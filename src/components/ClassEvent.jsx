import React, { Component } from 'react'

export class ClassEvent extends Component {

  handleClick() {
    console.log('class based event handling');
  }
  
  render() {
    return (
      <div>
        This is a class based componenet
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

export default ClassEvent