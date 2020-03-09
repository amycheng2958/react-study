import React, { Component } from 'react'
import store from '../store'
export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(()=>{
      this.forceUpdate()
    })
  }
  add = ()=>{
    store.dispatch({type:'ADD'})
  }
  minus = ()=>{
    store.dispatch({type:'MINUS'})
  }
  asyAdd = ()=>{
    store.dispatch((dispatch)=>{
      setTimeout(() => {
        dispatch({type:'ADD'})
      }, 1000);
      
    })
  }
  render() {
    return (
      <div>
        ReduxPage
        {store.getState()}
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyAdd}>asyAdd</button>
      </div>
    )
  }
}
