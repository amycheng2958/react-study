import React, { Component } from "react";
import LayOut from "./LayOut";

class HomePage extends Component {
    render() {
        console.log(this.props, "home");

        return (
            <div>
                {/* <LayOut title="主页"> */}
                HomePage
                {/* </LayOut> */}
            </div>
        );
    }
}

export default HomePage;
