import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <h1>This is a class component {this.props.messagecode}</h1>
      </div>
    );
  }
}

export default Message;
