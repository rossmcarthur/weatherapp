import React from 'react';
import { fetchWeather } from '../ajax/api';
import WeatherboardItem from './weatherboard_item';
import Switch from 'react-switch';

class Weatherboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      checked: false,
      modal: false
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
          <WeatherboardItem
            units={this.state.checked ? " °C" : " °F"}
            city={city}
            key={city.id}
            showModal={this.props.showModal}
            />
        );
      });
      return (
        <div className='weatherboard-container'>
          <div className='switch-container'>
            <Switch
              className='unit-switch'
              checked={this.state.checked}
              onChange={this.handleUnits}
              offColor='#FF0000'
              onColor='#0000FF'
              checkedIcon={<span className='unit'>°C</span>}
              uncheckedIcon={<span className='unit'>°F</span>}
            />
        </div>
          <div className='weatherboard-index'>
            {items}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Weatherboard;
