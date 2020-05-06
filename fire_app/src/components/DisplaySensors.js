import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  axios from 'axios';
import '../App.css';

export default class DisplaySensors extends Component {
  constructor(props) {
      super(props);
      this.state = {
        sensors: []
      }
  }

  // GET ALL SENSOR DETAILS
  componentDidMount() {
    // UPDATE THE STATE AFTER EVERY 40 SECOND
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 40000);

    axios.get('http://localhost:5000/firesensor/')
      .then(response => {
        this.setState({sensors: response.data})
      })
        .catch((error) => {
          console.log(error);
        })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // DISPLAY SENSOR DETAILS
  sensorList() {
    return this.state.sensors.map(fireSensor => {
      return  <tr>
                <td>{fireSensor.state}</td>
                <td>{fireSensor.location}</td>
                <td className={(fireSensor.smoke <= 5) ? "active" : "inactive"}>{fireSensor.smoke}</td>
                <td className={(fireSensor.co2 <= 5) ? "active" : "inactive"}>{fireSensor.co2}</td>
            </tr>;
    })
  }

  render() {
    return (
      <div>
        <h3 className="text-center mt-3 mb-3"><i className="fas fa-bell mr-3"></i>Fire Sensors</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>State</th>
              <th>Location</th>
              <th>Smoke Level</th>
              <th>CO2 Level</th>
            </tr>
          </thead>
          <tbody>
            {this.sensorList()}
          </tbody>
        </table>
      </div>
    );
  }
}
