import React, { Component } from "react";
import { connect } from "react-redux";

export default connect(state => ({ num: state }), {
  add: () => ({
    type: "ADD"
  })
})(
  class ReactReduxPage extends Component {
    render() {
      const { num, add } = this.props;
      console.log(this.props);

      return (
        <div>
          {num}
          ReactReduxPage
          <button onClick={add}>add</button>
        </div>
      );
    }
  }
);
