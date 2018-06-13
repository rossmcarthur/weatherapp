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
        <p>{description}</p>
        <h2>{this.props.city.main.temp}{this.props.units}</h2>
        <h3>{this.props.city.main.temp_min}{this.props.units}</h3>
        <h3>{this.props.city.main.temp_max}{this.props.units}</h3>
      </div>
    );
  }
}

export default WeatherboardItem;
