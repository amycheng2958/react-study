import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export default class PrivatePage extends Component {
    render() {
        console.log(this.props, 999);
        const { isLogin, path, component } = this.props;
        if (isLogin) {
            return <Route path={path} component={component} />;
        } else {
            return (
                <Redirect
                    to={{ pathname: "/login", state: { redirect: path } }}
                />
            );
        }
        return <div>1</div>;
    }
}
