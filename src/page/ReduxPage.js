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
  render() {
    return (
      <div>
        ReduxPage
        {store.getState()}
        <button onClick={this.add}> add</button>
      </div>
    )
  }
}
