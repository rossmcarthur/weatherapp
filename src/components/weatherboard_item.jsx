import React from 'react';

const WeatherboardItem = ({ city, units, showModal}) => {
  const description = city.weather[0].description.split(" ").map( word => {
    return word[0].toUpperCase() + word.slice(1) + " ";
  });

  return (
    <div className='weatherboard-item' onClick={() => showModal(city)}>
      <h1 className='item-name'>{city.name}</h1>
      <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt='icon' />
      <h3>{description}</h3>
      <div>
        <h1 className='current-temp'>{parseInt(city.main.temp, 10)}{units}</h1>
        <h3 className='current'>Current</h3>
      </div>
      <div className='temps'>
        <div className='low-temp'>
          <h3 className='temp-min'>{parseInt(city.main.temp_min, 10)}{units}</h3>
          <h4 className='low'>Low</h4>
        </div>
        <div className='high-temp'>
          <h3 className='temp-max'>{parseInt(city.main.temp_max, 10)}{units}</h3>
          <h4 className='high'>High</h4>
        </div>
      </div>
    </div>
  );
}

export default WeatherboardItem;
