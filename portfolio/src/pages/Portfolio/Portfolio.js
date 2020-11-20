import React, { Component } from 'react';
import './Portfolio.css'
import projects from './projects.json';

class Portfolio extends Component {
  render() {
    return (
      <div class='container'>
        <div class="row mt-3">
          <h3 class="card-title">Portfolio</h3>
          <div className='row'>
            {projects.map(project => 
            <div key={project.id} class="card-deck">
              <div class='card'>
                <a href={project.deployed} target="blank_"><img src={project.image} class="card-img-top" alt={project.title} /></a>
                <div class="card-body">
                  <h5 class="card-title"><a href={project.github}>{project.title}</a></h5>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;