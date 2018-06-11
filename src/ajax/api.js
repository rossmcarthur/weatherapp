import * as Keys from '../keys';

export const fetchWeather = id => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${Keys.APIKey}`, {
    method: 'get'
  });
};
