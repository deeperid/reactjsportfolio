import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,
          ControlLabel,
          FormControl,
          HelpBlock,
          Modal
        } from 'react-bootstrap';

import Button from './Button';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Login extends Component {
  constructor(props){
     super(props);
     this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Modal show={true} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
            />
            <Button type="submit" text="Login" />
          </form>
          <div>
            Or <Link to="/register">Register</Link>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Login;
