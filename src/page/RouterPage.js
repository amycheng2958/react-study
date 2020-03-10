import React, { Component } from "react";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import BrowserRouter from "../k-react-router/BrowserRouter"
import Route from "../k-react-router/Route"
import Link from "../k-react-router/Link"
import HomePage from "./HomePage";
import UserPage from "./UserPage.js";
// import LoginPage from "./LoginPage";
// import PrivatePage from "./PrivatePage";
export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>
                    {/* <Link to="/login">登录</Link> */}
                    {/* <Link to="/search/123">搜索</Link> */}
                    {/* <Switch> */}
                        <Route exact path="/" component={HomePage}></Route>
                        <Route path="/user" component={UserPage}></Route>
                        {/* <PrivatePage
                            path="/user"
                            component={PrivatePage}
                        ></PrivatePage> */}
                        {/* <Route path="/login" component={LoginPage}></Route> */}
                        {/* <Route
                            path="/search/:id"
                            component={SearchComponent}
                        ></Route> */}
                        {/* <Route render={() => <div>404</div>}></Route> */}
                    {/* </Switch> */}
                </BrowserRouter>
            </div>
        );
    }
}
function DetailComponent(props) {
    return <div>DetailComponent</div>;
}
function SearchComponent(props) {
    console.log(props, 1);
    const { id } = props.match.params;
    return (
        <div>
            SearchComponent-{id}
            <Link to={"/search/:" + id + "/detail"}>详情</Link>
            <Route
                path={"/search/:" + id + "/detail"}
                component={DetailComponent}
            ></Route>
        </div>
    );
}
