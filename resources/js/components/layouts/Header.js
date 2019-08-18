import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Completed from "../UncompletedTodosList/UncompletedTodosList";
import "./Header.scss";

class Header extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <Link className="header__link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link className="header__link" to="/">
                                    Completed
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link
                                    className="header__link"
                                    to="/completed"
                                    component={Completed}
                                >
                                    Completed
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/completed" component={Completed} />
                </div>
            </Router>
        );
    }
}

export default Header;
