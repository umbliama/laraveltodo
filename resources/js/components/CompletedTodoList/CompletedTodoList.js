import React, { Component } from "react";

class CompletedTodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    deleteTodo = taskId => {
        this.props.store.deleteTodo(taskId);
        this.getTodos();
    };
    completeTodo = todo => {
        this.props.store.completeTodo(todo);
        this.getTodos();
    };

    getTodos = () => {
        this.props.store.fetchTodos();
    };
    componentDidMount() {
        this.getTodos();
    }
    render() {
        const store = this.props.store;
        return (
            <div className="todos todos--completed">
                <ul className="todos__list">
                    {store.completedTodos.map(todo => (
                        <li className="todos__item" key={todo.id}>
                            <span
                                className={
                                    todo.isCompleted
                                        ? "todos__title todos-completed--true"
                                        : "todos__title todos-completed--false"
                                }
                            >
                                {todo.name}
                            </span>
                            <span
                                className="btn btn--delete"
                                onClick={() => this.deleteTodo(todo.id)}
                            >
                                {" "}
                                Delete
                            </span>
                            <span
                                className={
                                    todo.isCompleted
                                        ? "todos__complete todos-completed--true"
                                        : "todos__complete todos-completed--false"
                                }
                                onClick={() => this.completeTodo(todo.id)}
                            >
                                complete this one
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CompletedTodoList;
