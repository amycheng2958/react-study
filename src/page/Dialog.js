import React, { Component } from 'react';
import {createPortal} from 'react-dom';
class Dialog extends Component {
    constructor(props) {
        super(props);
        const doc = window.document;
        this.node = doc.createElement('div')
        doc.body.appendChild(this.node)
    }
    componentWillUnmount() {
        document.body.removeChild(this.node)
    }
    render() {
        return createPortal(
            <div>
                {this.props.children.content}
                {this.props.children.text}
            </div>
        ,this.node);
    }
}

export default Dialog;