import React from 'react';
import './Portfolio.css'
import projects from './projects.json';

function Portfolio() {
  return (
    <div class='container'>
      <div class="d-flex justify-content-center">
        <h3>Portfolio</h3>
      </div>
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
  )
}

export default Portfolio;