import React, { Component } from "react";

class UncompletedTodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="todos todos--uncompleted">
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

export default UncompletedTodosList;
