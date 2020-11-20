import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <h1>
        <a id='nameBadge' class="navbar-brand ml-5" href="/">Nathan Vu</a>
      </h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">about<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio">portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="./assets/img/NV-Resume-2020.pdf">resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;