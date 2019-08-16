import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../store/TodoStore";
import TodoList from "./TodoList/TodoList";
import { observer } from "mobx-react";
import AddTodo from "./AddTodo/AddTodo";
import Header from "./layouts/Header";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        store.getUserInfo();
    }
    render() {
        const store = this.props.store;
        return (
            <BrowserRouter>
                <div className="todo__container">
                    <Header />
                    <AddTodo store={store} />
                    <TodoList store={store} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

ReactDOM.render(<App store={store} />, document.getElementById("root"));
