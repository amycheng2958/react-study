import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
const nameRules = {required: true,massage: 'name'}
const passwordRules = {required: true,massage: 'passwd'}
@Form.create({})
class FormPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    submit = () =>{
        const {getFieldsValue,getFieldValue,validateFields} = this.props.form
        console.log(1,getFieldsValue());
        console.log(2,getFieldValue('Field A'));
        validateFields((err,values)=>{
                if(err) {
                    console.log('err',err);
                }else {
                    console.log('success',values);
                }
        })
    }
    render() {
        console.log(this.props);
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <Form>
                    <Form.Item label="Field A">
                        {getFieldDecorator('Field A',{rules: [nameRules]})(<Input placeholder="input placeholder" />)}
                    </Form.Item>
                    <Form.Item label="Field B">
                        {getFieldDecorator('Field B',{rules: [passwordRules]})(<Input type="password" placeholder="input placeholder" />)}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large" onClick={this.submit}>Submit</Button>
                    </Form.Item>
                </Form>
                
            </div>
        );
    }
}

export default FormPage2; 