import React, { Component } from 'react';
import {Form, Input, Button} from "antd";
class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
    }
    submit = ()=>{
        console.log(this.state);
        
    }
    render() {
        const {name,password} = this.state
        return (
            <div>
                <Form>
                    <Form.Item label="username">
                        <Input placeholder="username" value={name} onChange={e=>{this.setState({
                            'name': e.target.value
                        })}}/>
                    </Form.Item>
                    <Form.Item label="password">
                        <Input placeholder="password" value={password} onChange={e=>{this.setState({
                            'password': e.target.value
                        })}}/>
                    </Form.Item>
                    <Button type="primary" onClick={this.submit}>提交</Button>
                    
                </Form>
            </div>
        );
    }
}

export default FormPage;