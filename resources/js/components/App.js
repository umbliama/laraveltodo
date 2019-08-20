import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../store/TodoStore";
import TodoList from "./TodoList/TodoList";
import { observer } from "mobx-react";
import CompletedTodoList from "./CompletedTodoList/CompletedTodoList";
import Header from "./layouts/Header";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
                <Switch>
                    <div className="todo__container">
                        <Header />
                        <Switch>
                            <Route
                                path="/uncompleted"
                                component={() => <TodoList store={store} />}
                            />
                            <Route
                                path="/completed"
                                component={() => (
                                    <CompletedTodoList store={store} />
                                )}
                            />
                        </Switch>
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

ReactDOM.render(<App store={store} />, document.getElementById("root"));
