import React from 'react';
import { fetchCurrent, fetchForecast } from '../ajax/api';
import ForecastItem from './forecast_item';
import Switch from 'react-switch';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.city,
      forecast: null,
      checked: false
    };
    this.handleUnits = this.handleUnits.bind(this);
  }

  componentDidMount() {
    const units = this.state.checked ? "metric" : "imperial";
    fetchCurrent(this.props.city.id, units)
    .then( data => {
      return data.json();
    }).then( current => {
      this.setState({ current });
    });
    fetchForecast(this.props.city.id, units)
    .then( data => {
      return data.json();
    }).then( forecast => {
      this.setState({ forecast });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.checked !== prevState.checked) {
      const units = this.state.checked ? "metric" : "imperial";
      fetchCurrent(this.props.city.id, units)
      .then( data => {
        return data.json();
      }).then( current => {
        this.setState({ current });
      });
      fetchForecast(this.props.city.id, units)
      .then( data => {
        return data.json();
      }).then( forecast => {
        this.setState({ forecast });
      });
    }
  }

  handleUnits(checked) {
    this.setState({ checked });
  }

  render() {
    if (this.state.forecast) {
    const units = this.state.checked ? "°C" : "°F";
    const fiveDay = this.state.forecast.list.slice(0, 5);
    const forecastContainer = fiveDay.map( (day, i) => {
      return (
          <ForecastItem
            day={day}
            units={units}
            key={i}
          />
      );
    });
    return(
      <div>
        <div className='show-switch-container'>
          <Switch
            checked={this.state.checked}
            onChange={this.handleUnits}
            offColor='#FC5457'
            onColor='#97D0F3'
            checkedIcon={<span className='unit'>°C</span>}
            uncheckedIcon={<span className='unit'>°F</span>}
          />
      </div>
      <div className='show-modal-container'>
      <h1>{this.state.current.name}</h1>
        <h2>{this.state.current.main.temp} {units}</h2>
        <h2 className='forecast-title'>Five Day Forecast: </h2>
        <div className='forecast-container'>
          { forecastContainer }
        </div>
      </div>
      </div>
    );
  } else {
    return null;
  }
}

}

export default Show;
