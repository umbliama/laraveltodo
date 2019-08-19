import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const store = this.props.store;
        return (
            <div className="home">
                <p>
                    Hello , {store.user.name} use navigation above to get info
                    about your tasks
                </p>
            </div>
        );
    }
}

export default Home;
