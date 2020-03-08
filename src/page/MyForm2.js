import React, { Component } from "react";
import kFormCreate2 from "../component/kFormCreate2";
const nameRules = {required: true,massage: 'name'}
const passwordRules = {required: true,massage: 'passwd'}
@kFormCreate2
class MyForm extends Component {
  submit = () => {
    
  };
  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props;
    return (
      <div>
        {getFieldDecorator(
          "name",
          {rules: [nameRules]}
        )(<input type="text" placeholder="please input ur name" />)}
        {getFieldDecorator(
          "password",
          {rules: [passwordRules]}
        )(<input type="password" placeholder="please input ur password" />)}
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default MyForm;
