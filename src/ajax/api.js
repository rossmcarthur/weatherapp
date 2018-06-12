import * as Keys from '../keys';

export const fetchWeather = (id, units) => {
  return fetch(`http://api.openweathermap.org/data/2.5/group?id=${id}&units=${units}&APPID=${Keys.APIKey}`, {
    method: 'get'
  });
};
