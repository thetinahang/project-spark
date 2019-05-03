import React, { Component } from 'react'

const Projects = ({projects}) => <ul className="project-list">{projects.map((project, i) => <li className="project" key={i}> {project.display_title} </li>)}</ul>

export default Projects