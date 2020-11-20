import React, { Component } from 'react';
import './Portfolio.css'

class Portfolio extends Component {
  render() {
    return (
      <div class='container'>
        <div class="row justify-content-center mt-3">
          <div class="col">
            <h3 class="card-title">Portfolio</h3>
            <hr></hr>
          </div>
          
          <div class="row row-cols-1 row-cols-lg-3 ml-1 mr-3 mb-5">
            <div class="col mb-4">
              <div class='card'>
                <a href="https://obscure-citadel-38973.herokuapp.com/" target="blank_"><img src="./assets/projects/whimit.png" class="card-img-top" alt="WhimIt" /></a>
                <div class="card-body">
                  <h5 class="card-title"><a href="https://github.com/nathanmvu/WhimIt">WhimIt</a></h5>
                </div>
              </div>
            </div>

            <div class="col mb-4">
              <div class="card">
                <a href='https://sheltered-tundra-69850.herokuapp.com/' target="blank_"><img src="./assets/projects/burger.png" class="card-img-top" alt="burger" /></a>
                <div class="card-body">
                  <h5 class="card-title"><a href="https://github.com/nathanmvu/burger">Eat the Burger!</a></h5>
                </div>
              </div>
            </div>

            <div class="col mb-4">
              <div class="card">
                <a href="https://github.com/nathanmvu/drink-to-the-weather" target="blank_"><img src="./assets/projects/drink to the weather.png" class="card-img-top" alt="drink-to-the-weather" /></a>
                <div class="card-body">
                  <h5 class="card-title">Drink to the Weather</h5>
                </div>
              </div>
            </div>

            <div class="col mb-4">
              <div class="card">
                <a href="https://github.com/nathanmvu/weather-dash" target="blank_"><img src="./assets/projects/weather dash.png" class="card-img-top" alt="weather-dash" /></a>
                <div class="card-body">
                  <h5 class="card-title">Weather Dash</h5>
                </div>
              </div>
            </div>

            <div class="col mb-4">
              <div class="card">
                <a href="https://github.com/nathanmvu/work-day-calendar" target="blank_"><img src="./assets/projects/work day calendar.png" class="card-img-top" alt='work-day-calendar' /></a>
                <div class="card-body">
                  <h5 class="card-title">Work Day Calendar</h5>
                </div>
              </div>
            </div>

            <div class="col mb-4">
              <div class="card">
                <a href="https://github.com/nathanmvu/password-generator" target="blank_"><img src="./assets/projects/password generator.png" class="card-img-top" alt='password-generator' /></a>
                <div class="card-body">
                  <h5 class="card-title">Password Generator</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;