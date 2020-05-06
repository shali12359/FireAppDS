import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand"><i className="fas fa-fire fa-lg mr-3"></i>Fire App</Link>
        <div className="collpase navbar-collpase">
        </div>
      </nav>
    );
  }
}
