import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div class="container h-100">
      <div class="d-flex align-items-center justify-content-center h-100">
        <div class="d-flex flex-column">
          <h3>Contact</h3>
          <br></br>
          <p class='card-text'>I currently live in Cupertino, CA and you can contact me via: </p>
          <p>Twitter: <a target='blank_' href="https://twitter.com/combinathan">@combinathan</a></p>
          <p>Github: <a href="https://github.com/nathanmvu">@nathanmvu</a></p>
          <p>LinkedIn: <a target='blank_' href="https://www.linkedin.com/in/nathan-vu/">nathan-vu</a></p>
          <p>Email: <a target='blank_' href="mailto:nathanvu99@gmail.com">nathanvu99@gmail.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contact;