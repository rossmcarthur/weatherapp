import * as Keys from '../keys';

export const fetchWeather = (id, units) => {
  return fetch(`http://api.openweathermap.org/data/2.5/group?id=${id}&units=${units}&APPID=${Keys.APIKey}`, {
    method: 'get'
  });
};

export const fetchForecast = (id, units) => {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=${units}&APPID=${Keys.APIKey}`, {
    method: 'get'
  });
};

export const fetchCurrent = (id, units) => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&units=${units}&APPID=${Keys.APIKey}`, {
    method: 'get'
  });
};
