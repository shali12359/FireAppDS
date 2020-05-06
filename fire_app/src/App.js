import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import DisplaySensors from './components/DisplaySensors';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <br/>
        <Route path="/" exact component={DisplaySensors}/>
      </div>
    </Router>
  );
}

export default App;
