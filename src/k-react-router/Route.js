import React, { Component } from "react";
import { RouterContext } from "../RouterContext";

class Route extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {context => {
                    console.log(this.props, 9);
                    console.log(context, 9);

                    const { path, component } = this.props;
                    const match = context.location.pathname === path;
                    return match
                        ? React.createElement(component, this.props)
                        : null;
                }}
            </RouterContext.Consumer>
        );
    }
}

export default Route;
