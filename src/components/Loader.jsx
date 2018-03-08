import React, { Component } from 'react';
import { PropagateLoader } from 'react-spinners';
import '../App.css';

class Button extends Component {
  render() {
    return (
      <div className="Loader">
        <PropagateLoader
          color={'#123abc'}
          loading={this.props.loading}
        />
      </div>
    )
  }
}

export default Button;
