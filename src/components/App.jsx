import React, { Component } from 'react';
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

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   // this.state = {
  //   //
  //   // }
  // }

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
                  <Link to="/login"><Glyphicon glyph="log-in" /></Link>
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
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Row>
            </Grid>
          </section>
        </div>
      </Router>
    )
  }
}

export default App;
