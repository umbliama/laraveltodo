import { observable, action } from "mobx";
import { computed } from "mobx";
import axios from "axios";
class TodoStore {
    @observable todos = [];

    @computed get getTodos() {
        return this.todos.filter(todo => todo.isCompleted === 0);
    }

    @computed get completedTodos() {
        return this.todos.filter(todo => todo.isCompleted === true);
    }

    @action addTodo(taskName) {
        axios.post("/task", { name: taskName });
    }

    @action deleteTodo(taskId) {
        try {
            axios.get(`/task/${taskId}/delete`);
        } catch (error) {
            console.error(error);
        }
    }

    @action completeTodo(todoId) {
        // todo.isCompleted = !todo.isCompleted;
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
}

const store = new TodoStore();

export default store;
