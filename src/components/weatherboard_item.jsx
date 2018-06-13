import React from 'react';

class WeatherboardItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const description = this.props.city.weather[0].description.split(" ").map( word => {
      return word[0].toUpperCase() + word.slice(1) + " ";
    });

    return (
      <div className='weatherboard-item' onClick={() => this.props.showModal(this.props.city)}>
        <h1 className='item-name'>{this.props.city.name}</h1>
        <img src={`http://openweathermap.org/img/w/${this.props.city.weather[0].icon}.png`} alt='icon' />
        <h3>{description}</h3>
        <div>
          <h1 className='current-temp'>{this.props.city.main.temp}{this.props.units}</h1>
          <h3 className='current'>Current</h3>
        </div>
        <div className='temps'>
          <div className='low-temp'>
            <h3 className='temp-min'>{this.props.city.main.temp_min}{this.props.units}</h3>
            <h4 className='low'>Low</h4>
          </div>
          <div className='high-temp'>
            <h3 className='temp-max'>{this.props.city.main.temp_max}{this.props.units}</h3>
            <h4 className='high'>High</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherboardItem;
