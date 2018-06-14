const APIKey = "6a190bd8ee47493f099115e05b143028";

export const fetchWeather = (id, units) => {
  return fetch(`http://api.openweathermap.org/data/2.5/group?id=${id}&units=${units}&APPID=${APIKey}`, {
    method: 'get'
  });
};

export const fetchForecast = (id, units) => {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=${units}&APPID=${APIKey}`, {
    method: 'get'
  });
};

export const fetchCurrent = (id, units) => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&units=${units}&APPID=${APIKey}`, {
    method: 'get'
  });
};
