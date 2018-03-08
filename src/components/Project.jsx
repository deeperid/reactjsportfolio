import React, { Component } from 'react';
import { Panel, Media } from 'react-bootstrap';
import '../App.css';

class Project extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     projects: null
  //   }
  // }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title
            componentClass="h3"
            dangerouslySetInnerHTML={{__html: this.props.post.title}}
          />
        </Panel.Heading>
        <Panel.Body>
          <Media>
            <Media.Left>
              {
                this.props.post.featured_image &&
                <img width={158} height={100} src={this.props.post.featured_image} alt="thumbnail" />
              }
            </Media.Left>
            <Media.Body>
              <p
                dangerouslySetInnerHTML={{__html: this.props.post.excerpt}}
              />
            </Media.Body>
          </Media>
        </Panel.Body>
      </Panel>
    )
  }
}

export default Project;
