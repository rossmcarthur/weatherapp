import React from 'react';

const weekday = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
}

const ForecastItem = ({day, units}) => {
  const date = new Date(day.dt_txt);
  const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    return(
      <div className='forecast-item'>
        <h2 className='forecast-day'>{weekday[date.getDay()]}</h2>
        <h3 className='forecast-date'>{month}/{date.getDate()}</h3>
        <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt='icon' />
        <h3 className='forecast-description'>{day.weather[0].description[0].toUpperCase() + day.weather[0].description.slice(1)}</h3>
        <h1 className='forecast-max-temp'>{parseInt(day.main.temp_max, 10)} {units}</h1>
        <h2 clasName='forecast-min-temp'>{parseInt(day.main.temp_min, 10)} {units}</h2>
      </div>
    );
}

export default ForecastItem;
