import { observable, action } from "mobx";
import { computed } from "mobx";
import axios from "axios";
class TodoStore {
    @observable todos = [];
    @observable user = {};

    @computed get getTodos() {
        return this.todos.filter(
            todo => todo.isCompleted === 0 && todo.user_id === this.user.id
        );
    }

    @computed get completedTodos() {
        return this.todos.filter(todo => todo.isCompleted === 1);
    }

    @action addTodo(taskName) {
        axios.post("/task", { name: taskName, user_id: this.user.id });
    }

    @action deleteTodo(taskId) {
        try {
            axios.get(`/task/${taskId}/delete`);
        } catch (error) {
            console.error(error);
        }
    }

    @action completeTodo(todoId) {
        try {
            axios.put(`/task/${todoId}/update`);
        } catch (error) {
            console.error(error);
        }
    }

    @action async fetchTodos() {
        try {
            const response = await axios.get("/api/tasks");
            this.todos = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    @action async getUserInfo() {
        try {
            const response = await axios.get("/user");
            this.user = response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

const store = new TodoStore();

export default store;
