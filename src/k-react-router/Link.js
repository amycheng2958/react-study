import React, { Component } from "react";
import { RouterContext } from "../RouterContext";

class Link extends Component {
    handleClick = (e, history) => {
        e.preventDefault();
        history.push(this.props.to);
    };
    render() {
        const { to, children } = this.props;
        return (
            <RouterContext.Consumer>
                {context => (
                    <a
                        href={to}
                        onClick={event =>
                            this.handleClick(event, context.history)
                        }
                    >
                        {children}
                    </a>
                )}
            </RouterContext.Consumer>
        );
    }
}

export default Link;
