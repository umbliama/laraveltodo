import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link className="header__link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" to="/uncompleted">
                                Uncompleted
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" to="/completed">
                                Completed
                            </Link>
                        </li>
                        <a className="header__link" href="/logout">
                            Logout
                        </a>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
