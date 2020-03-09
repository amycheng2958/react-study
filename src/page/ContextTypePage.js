import React, { Component } from 'react'
import {ThemeContext} from './ThemeContext'
export default class ContextTypePage extends Component {
    static contextType = ThemeContext
    render() {
        console.log(this);
        const {themeColor} = this.context
        return (
            <div className={themeColor}>
                ContextTypePage
            </div>
        )
    }
}
