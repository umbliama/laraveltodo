import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../store/TodoStore";
import TodoList from "./TodoList/TodoList";
import { observer } from "mobx-react";
import AddTodo from "./AddTodo/AddTodo";
import Header from "./layouts/Header";
import "./App.scss";

@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const store = this.props.store;
        return (
            <div className="todo__container">
                <Header />
                <AddTodo store={store} />
                <TodoList store={store} />
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App store={store} />, document.getElementById("root"));
