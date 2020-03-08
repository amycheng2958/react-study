import React, { Component } from "react";
import kFormCreate from "../component/kFormCreate";
const nameRules = {required: true,massage: 'name'}
const passwordRules = {required: true,massage: 'passwd'}
@kFormCreate
class MyForm extends Component {
  submit = () => {
    const {getFieldsValue,getFieldValue,validateFields} = this.props
    console.log(getFieldsValue());
    console.log(getFieldValue('name'));
    validateFields((err,values)=>{
      if(err) {
        console.log('err',err);
      }else {
        console.log('success',values);
      }
    })
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
