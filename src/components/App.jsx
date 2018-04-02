import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Glyphicon } from 'react-bootstrap';

import '../App.css';
import { Home,
          Login,
          Register,
          Skills,
          Projects,
          Shop
       } from '.';
import { firebaseApp } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:null
    }
  }

  logIn = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    this.setState({error:{message:''}});

    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.goBack();
      })
      .catch(error => {
        this.setState({error});
      })
  }

  signOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => this.setState({email:null}));
  }

  render() {
    return (
      <Router>
        <div>
          <section>
            <nav className="Nav inverse">
              <ul>
                <li>
                  <Link to="/"><Glyphicon glyph="home" /></Link>
                </li>
                <li>
                  <Link to="/projects"><Glyphicon glyph="blackboard" /></Link>
                </li>
                <li>
                  <Link to="/skills"><Glyphicon glyph="education" /></Link>
                </li>
                <li>
                  <Link to="/shop"><Glyphicon glyph="shopping-cart" /></Link>
                </li>
                <li>
                  {!this.state.email
                    && <Link to="/login"><Glyphicon glyph="log-in" /></Link>
                  }
                  {this.state.email
                    && <Link to="/" onClick={this.signOut}><Glyphicon glyph="log-out" /></Link>
                  }
                </li>
                <li>
                  <Link to="/"><Glyphicon glyph="option-horizontal" /></Link>
                </li>
              </ul>
            </nav>
          </section>
          <section>
            <Grid bsClass="container Content inverse">
              <Row>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />
                <Route path="/shop" component={Shop} />
                <Route path="/login" component={Login} submit={this.logIn} />
                <Route path="/register" component={Register} />
              </Row>
            </Grid>
          </section>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  console.log('state in app.jsx',state);
  const { email } = state.user;
  return {
    user: {
      email: email
    }
  }
}

export default connect(mapStateToProps, null)(App);
