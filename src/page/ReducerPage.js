import React, { Component } from "react";

export default class ReducerPage extends Component {
  f1 = arg => {
    console.log("f1", arg);
    return arg;
  };
  f2 = arg => {
    console.log("f2", arg);
    return arg;
  };
  f3 = arg => {
    console.log("f3", arg);
    return arg;
  };
  compose = (...funcs) => {
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
  };
  render() {
    const { f1, f2, f3,compose } = this;
    
    compose(f1, f2, f3)("omg");
    
    return <div>ReducerPage</div>;
  }
}
