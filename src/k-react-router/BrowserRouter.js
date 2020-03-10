import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { RouterContext } from "../RouterContext";
class BrowserRouter extends Component {
    constructor(props) {
        super(props);

        this.history = createBrowserHistory();
        this.state = {
            location: this.history.location
        };
        this.history.listen(location => {
            console.log(this.history, 222);
            console.log(location, 1111);

            this.setState({ location });
        });
    }

    render() {
        return (
            <RouterContext.Provider
                value={{ history: this.history, location: this.state.location }}
            >
                {this.props.children}
            </RouterContext.Provider>
        );
    }
}

export default BrowserRouter;
