import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class RouteComponentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({ count: count + 1 });
                    }}
                >
                    click change count {count}
                </button>
                <Router>
                    {/* <Route component={() => <Child count={count} />}></Route> */}
                    <Route render={() => <Child count={count} />}></Route>
                </Router>
            </div>
        );
    }
}

class Child extends Component {
    componentDidMount() {
        console.log("componentDidMount"); //sy-log
    }

    componentWillUnmount() {
        console.log("componentWillUnmount"); //sy-log
    }

    render() {
        return <div>child-{this.props.count}</div>;
    }
}
