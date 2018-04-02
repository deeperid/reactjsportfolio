import React, { Component } from 'react';
import { FormGroup,
          ControlLabel,
          FormControl,
          HelpBlock,
          Modal
        } from 'react-bootstrap';

import Button from './Button';
import { firebaseApp } from '../firebase';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Register extends Component {
  constructor(props){
     super(props);
     this.handleClose = this.handleClose.bind(this);

     this.state = {
       email: '',
       password: '',
       error: {
         message: ''
       }
     }
  }

  handleClose = () => {
    this.props.history.goBack();
    this.props.history.goBack();
  }

  register = () => {
    const { email, password } = this.state;
    this.setState({error:{message:''}});

    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error});
      });
  }

  render() {
    return (
      <Modal show={true} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            onClick={this.register}
          />
          <Button type="submit" text="Register" />
          <div>{this.state.error.message}</div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Register;
