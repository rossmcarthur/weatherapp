import React from 'react';
import { fetchWeather } from '../ajax/api';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetchWeather("New York");
    fetchWeather("San Francisco");
    fetchWeather("Toronto");
    fetchWeather("Austin");
    fetchWeather("Detroit");
  }





  render() {
    return (
      <div>
        <p1>Hello from the homepage!</p1>
      </div>
    )
  }
}

export default Homepage;
