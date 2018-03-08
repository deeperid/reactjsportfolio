import React, { Component } from 'react';
import { Col, Jumbotron } from 'react-bootstrap';

import Loader from './Loader';
import Project from './Project';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: null,
      loading: true
    }
  }

  fetchProjects() {
    const BASE_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/61875131/posts/?';
    const FETCH_URL = `${BASE_URL}type=page&parent_id=20&fields=ID,title,excerpt,featured_image`;
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const loading = false;
      let projects = json
                        .posts
                        .filter(post => post.featured_image);

      projects.forEach(post => {
        post.excerpt = post.excerpt
                            .replace('[&#038;hellip','')
                            .replace('</p>',' &hellip;</p>');
      });

      this.setState({projects,loading});
      console.log('this.state',this.state);
    });
  }

  componentDidMount() {
    if (!this.state.projects) {
      this.fetchProjects();
    }
  }

  render() {
    return (
        <Col>
          <Jumbotron>
            <h1>Projects</h1>
            <p>
            </p>
          </Jumbotron>
          <Loader loading={this.state.loading} />
          {this.state.projects && this.state.projects.map((project,i) => {
                return (
                  <Project key={i} post={project} />
                )
              })}
        </Col>
    )
  }
}

export default Projects;
