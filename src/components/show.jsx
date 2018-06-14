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
    const date = new Date(this.state.current.dt * 1000);
    const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    const time = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
    const units = this.state.checked ? "°C" : "°F";
    const fiveDay = [];
    for(let i = 7; i < this.state.forecast.list.length; i+= 8) {
      const day = this.state.forecast.list[i];
      fiveDay.push(day);
    }
    const degToCompass = num => {
      const val = Math.floor((num / 45) + 0.5);
      const dir = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      return dir[(val % 8)];
    };
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
      <div className='show-container'>
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
        <h1 className='show-title'>{this.state.current.name}</h1>
        <h5 className='show-update'>Updated on {month}/{date.getDate()} at {time}.</h5>
        <div className='show-current-head'>
          <div className='show-current'>
            <h1 className='show-current-temp'>{parseInt(this.state.current.main.temp, 10)}</h1>
            <span className='show-current-units'>{units}</span>
            <img className='show-current-icon' src={`http://openweathermap.org/img/w/${this.state.current.weather[0].icon}.png`} alt='icon'/>
          </div>
          <h3 className='show-current-description'>{this.state.current.weather[0].description[0].toUpperCase() + this.state.current.weather[0].description.slice(1)}</h3>
        </div>
        <div className='show-current-details'>
          <div className='wind-container'>
            <p className='wind'>Wind</p>
            <div className='wind-content'>
              <p className='wind-speed'>{this.state.current.wind.speed}</p>
              <div className='wind-units'>
                <p className='deg'>{degToCompass(this.state.current.wind.deg)}</p>
                <p className='mph'>{this.state.checked ? " m/s" : " mph"}</p>
              </div>
            </div>
          </div>
          <div className='humidity-container'>
            <p className='humidity'>Humidity</p>
            <p className='humidity-content'>{this.state.current.main.humidity}%</p>
          </div>
          <div className='pressure-container'>
            <p className='pressure'>Pressure</p>
            <div className='pressure-content'>
              <p className='pressure-measurement'>{this.state.current.main.pressure}</p>
              <p className='pressure-pascals'>hPa</p>
            </div>
          </div>
          <div className='cloud-container'>
            <p className='cloud-coverage'>Cloud coverage</p>
            <p className='cloud-per'>{this.state.current.clouds.all}%</p>
          </div>
        </div>
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
