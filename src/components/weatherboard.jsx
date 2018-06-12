import React from 'react';
import { fetchWeather } from '../ajax/api';
import WeatherboardItem from './weatherboard_item';
import Switch from 'react-switch';

class Weatherboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      checked: false
    };
    this.handleUnits = this.handleUnits.bind(this);
  }

  componentDidMount() {
    const units = this.state.checked ? "metric" : "imperial";
    fetchWeather("5128638,6167865,5391959,4254010,4990729", units)
    .then( data => {
      return data.json();
    }).then( data => {
      this.setState({ data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.checked !== prevState.checked) {
      const units = this.state.checked ? "metric" : "imperial";
      fetchWeather("5128638,6167865,5391959,4254010,4990729", units)
      .then( data => {
        return data.json();
      }).then( data => {
        this.setState({ data });
      });
    }
  }

  handleUnits(checked) {
    this.setState({ checked });
  }

  render() {
    if (this.state.data) {
      const items = this.state.data.list.map( city => {
        return (
          <WeatherboardItem city={city} key={city.id}/>
        );
      });
      return (
        <div>
          <Switch
            checked={this.state.checked}
            onChange={this.handleUnits}
            offColor='#FF0000'
            onColor='#0000FF'
            checkedIcon={<span className='celsius'>°C</span>}
            uncheckedIcon={<span className='fahrenheit'>°F</span>} />
          {items}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Weatherboard;
