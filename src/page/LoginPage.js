import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class LoginPage extends Component {
    render() {
        const { isLogin, location } = this.props;
        const { redirect } = location.state || {};
        if (isLogin) {
            return <Redirect to={redirect} />;
        } else {
            return (
                <div>
                    LoginPage
                    <button onClick={() => {}}>登录</button>
                </div>
            );
        }
    }
}
