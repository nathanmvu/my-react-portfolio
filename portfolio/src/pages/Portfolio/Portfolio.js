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
            <img src={project.image} class="card-img-top" alt={project.title} />
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p><a href={project.deployed} target="blank_">Website</a></p>
              <p><a href={project.github} target="blank_">Github</a></p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio;