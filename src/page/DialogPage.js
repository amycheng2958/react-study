import React, { Component } from "react";
import Dialog from "./Dialog";
import {Button} from 'antd'

class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: true
    };
  }
  render() {
    const { showDialog } = this.state;
    return (
        <div>
        <Button type="primary" onClick={()=>{
            this.setState({
                showDialog: !showDialog
            })
        }}>toggle</Button>
        {showDialog && <Dialog>
            {
                {
                    content: 'content',
                    text: 'ff'
                }
            }</Dialog>}
        </div>
    );
  }
}

export default DialogPage;
