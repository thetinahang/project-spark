import React, { Component } from 'react';
import Projects from './Projects'

export default class SearchableProjectsContainer extends Component {
  constructor() {
    super()

    this.state = {
      projects: [],
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const searchTerm = this.state.searchTerm
    this.componentDidMount(searchTerm)
  }

  componentDidMount() {
    fetch(`${URL}${searchTerm}`)
      .then(response => response.json())
      .then(reviews => this.setState(projects: response.results ))
  }

  render() {
    return(
      <div className="searchable-projects">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={event => this.handleChange(event)}/>
        </form>
        <Projects reviews={this.state.projects}/>
      </div>
    )
  }
}