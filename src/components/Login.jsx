import React, { Component } from 'react';
import { FormGroup,
          ControlLabel,
          FormControl,
          HelpBlock,
          Button,
          Modal
        } from 'react-bootstrap';

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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Login</h1>
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
            <Button type="submit">Login</Button>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Login;
