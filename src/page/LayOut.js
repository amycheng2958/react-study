import React, { Component } from 'react';
import Bottom from './Bottom';
import Header from './Header';

class LayOut extends Component {
    componentDidMount() {
        const {title} = this.props
        document.title = title
    }
    render() {
        const {children} = this.props
        console.log(this.props);
        return (
            <div>
                <Header/>
                    {children}
                <Bottom/>
            </div>
        );
    }
}

export default LayOut;