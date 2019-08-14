import React, { Component } from "react";
import "./AddTodo.scss";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textTodo: null
        };
    }
    setTask = event => {
        const { value } = event.target;

        this.setState({
            textTodo: value
        });
    };
    addTodo = () => {
        this.props.store.addTodo(this.state.textTodo);
    };

    render() {
        return (
            <div className="add-todo">
                <input
                    className="add-todo__input"
                    name="name"
                    type="text"
                    onChange={this.setTask}
                />
                <button
                    className={`btn btn--submit add-tood__button ${
                        !this.state.textTodo ? "btn--disabled" : ""
                    }`}
                    disabled={!this.state.textTodo}
                    onClick={this.addTodo}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default AddTodo;
