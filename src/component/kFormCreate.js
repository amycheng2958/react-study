import React, { Component } from "react";

export default function kFormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {}
    }
    handleChange = e => {
      let { name, value } = e.target;
      this.setState({ [name]: value });
    };
    getFieldsValue = () => {
      return { ...this.state };
    };
    getFieldValue = field => {
      return this.state[field];
    };
    validateFields = callback =>{
      console.log(this.options);
      const state = {...this.state}
      const errors = {}
      for(let name in this.options) {
        if(state[name] === '') {
          errors[name] = 'error'
        }
      }
      if(JSON.stringify(errors) === "{}") {
        callback(undefined,state)
      }else {
        callback(errors,state)
      }
    }
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return InputCmp => {
        return React.cloneElement(InputCmp, {
          name: field,
          value: this.state[field] || "",
          onChange: this.handleChange
        });
      };
    };
    render() {
      return (
        <div className="border">
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />
        </div>
      );
    }
  };
}
