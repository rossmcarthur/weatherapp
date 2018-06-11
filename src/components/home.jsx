import React from 'react';
import { fetchWeather } from '../ajax/api';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ny: null,
      to: null,
      sf: null,
      au: null,
      dt: null
    };
  }

  componentDidMount() {
    fetchWeather("5128638").then( data => {
      return data.json();
    }).then( data => {
      this.setState({ ny: data });
    });
    fetchWeather("6167865").then( data => {
      return data.json();
    }).then( data => {
      this.setState({ to: data });
    });
    fetchWeather("5391959").then( data => {
      return data.json();
    }).then( data => {
      this.setState({ sf: data });
    });
    fetchWeather("4254010").then( data => {
      return data.json();
    }).then( data => {
      this.setState({ au: data });
    });
    fetchWeather("4990729").then( data => {
      return data.json();
    }).then( data => {
      this.setState({ dt: data });
    });
  }





  render() {
    debugger
    return (
      <div>
        <p>Hello from the homepage!</p>
      </div>
    );
  }
}

export default Homepage;
