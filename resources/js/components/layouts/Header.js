import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/">Completed</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/">Uncompleted</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        );
    }
}

export default Header;
