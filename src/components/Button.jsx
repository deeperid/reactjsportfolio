import React, { Component } from 'react';
import { Button as BSButton } from 'react-bootstrap';
import '../App.css';

class Button extends Component {
  render() {
    return (
      <BSButton className="inverse" type={this.props.type}>{this.props.text}</BSButton>
    )
  }
}

export default Button;
