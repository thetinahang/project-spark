import React, { Component } from 'react';
import Projects from './Projects'

export default class LatestProjectsContainer extends Component {
  constructor() {
    super()

    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('/projects') //need to connect to this
      .then(response => response.json())
      .then(reviews => this.setState({projects: response.results}))
  }

  render() {
    return(
      <div className="latest-projects">
        <Projects projects={this.state.projects} />
      </div>
    )
  }
}