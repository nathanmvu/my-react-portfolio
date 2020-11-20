import React from 'react';
import './About.css'

function About() {
  return (
    <div class="container">
      <div class="d-flex justify-content-center">
        <h3 id="intro">About Me</h3>
      </div>
      <br></br>
      <div class="row">
        <div class="col-lg-3">
          <img src="https://avatars0.githubusercontent.com/u/29564904?s=460&v=4" alt="Profile Pic" />
        </div>
        <div class="col-lg-7">
          <p class="card-text">Hi I'm Nathan! I'm a recent graduate from the University of California, San Diego where I studied economics but found that I was more passionate about technology and design and so decided to change my career path. I am currently learning 
          about web development and am hoping to have a career in UI/UX design in my future where I can merge my interests in design and web-based technology. When I'm not in class or working you'll probably find me at the local climbing gym, biking steep hills around 
          my neighborhood, or going on a brisk hike. </p>
        </div>
      </div>
    </div>
  )
}

export default About;