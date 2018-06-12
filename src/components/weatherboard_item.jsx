import React from 'react';

const WeatherboardItem = ({city, units}) => {
  return (
    <div>
      <h1>{city.name}</h1>
      <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt='icon' />
      <h2>{city.main.temp}{units}</h2>
      <h3>{city.main.temp_min}{units}</h3>
      <h3>{city.main.temp_max}{units}</h3>
      <p>{city.weather[0].description}</p>

    </div>
  )
}

export default WeatherboardItem;
