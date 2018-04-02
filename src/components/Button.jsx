import React, { Component } from 'react';
import { Button as BSButton } from 'react-bootstrap';
import '../App.css';

class Button extends Component {
  render() {
    let p = Object.assign({},this.props);
    p.className = "inverse " + (p.className || '');

    return (
      <BSButton {...p}>
         {this.props.text}
       </BSButton>
    )
  }
}

export default Button;
