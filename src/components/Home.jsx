import React, { Component } from 'react';
import { Col, Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <Col>
          <Jumbotron>
            <h1>An app for my portfolio</h1>
            <p>
              This is a simple app I put together with ReactJS, Redux, Bootstrap, and Firebase.
              This app is a sample of one way I might implement test driven development, registration, authentication, additional content/behavior for logged in users, fetching data from an API (WordPress public API), interacting with a database, and audio/controls for your project or website.
            </p>
            <p>
              Source Code: <a href="https://github.com/deeperid/reactjsportfolio" target="_blank" rel="noopener noreferrer">ReactJSportfolio on Github</a>
            </p>
          </Jumbotron>
        </Col>
    )
  }
}

export default Home;
