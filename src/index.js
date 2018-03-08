import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Glyphicon } from 'react-bootstrap';
import { firebaseApp } from './firebase';

import { Home, Login, Register } from './components';
import './App.css';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore();

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {

  }
  else {

  }
})

ReactDOM.render(
    <Router>
      <div>
        <section>
          <nav className="Nav">
            <ul>
              <li>
                <Link to="/"><Glyphicon glyph="home" /></Link>
              </li>
              <li>
                <Link to="/register"><span>Sign Up</span></Link>
              </li>
              <li>
                <Link to="/login"><span>Sign In</span></Link>
              </li>
            </ul>
          </nav>
        </section>
        <section>
          <Grid bsClass="container Content">
            <Row>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Row>
          </Grid>
        </section>
      </div>
    </Router>,
  document.getElementById('root')
)
