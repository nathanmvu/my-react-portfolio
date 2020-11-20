import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={(process.env.PUBLIC_URL || '/') + '/'} component={About} />
        <Route exact path={(process.env.PUBLIC_URL || '/') + '/portfolio'} component={Portfolio} />
        <Route exact path={(process.env.PUBLIC_URL || '/') + '/contact'} component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
