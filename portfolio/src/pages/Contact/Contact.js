import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div class="container">
        <p class='card-text'>I currently live in Cupertino, CA and you can contact me at: </p>
        <p>Twitter: <a target='blank_' href="https://twitter.com/combinathan">@combinathan</a></p>
        <p>Github: <a href="https://github.com/nathanmvu">@nathanmvu</a></p>
        <p>LinkedIn: <a target='blank_' href="https://www.linkedin.com/in/nathan-vu/">nathan-vu</a></p>
        <p>Email: <a target='blank_' href="mailto:nathanvu99@gmail.com">nathanvu99@gmail.com</a></p>
      </div>
    )
  }
}

export default Contact;