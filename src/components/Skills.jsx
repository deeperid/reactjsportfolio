import React, { Component } from 'react';
import { Col, Jumbotron } from 'react-bootstrap';

import Loader from './Loader';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: null,
      loading: true
    }
  }

  render() {
    return (
        <Col>
          <Jumbotron>
            <h1>Skills</h1>
            <p>
            </p>
          </Jumbotron>
          <Loader loading={this.state.loading} />
        </Col>
    )
  }
}

export default Skills;
