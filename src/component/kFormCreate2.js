import React, {Component} from 'react'

export default function kFormCreate2(Cmp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state ={}
        }
        handleChange = e => {
            let { name, value } = e.target;
            this.setState({ [name]: value });
          };
        getFieldDecorator=(field,option)=>{
            return InputCmp=>{
                return React.cloneElement(InputCmp,{
                    value: this.state[field] || '',
                    name: field,
                    onChange: this.handleChange
                })
            }
        }
        render() {
            return (
                <div>   
                    <Cmp getFieldDecorator={this.getFieldDecorator}/>
                </div>
                
            )
        }
    }
}