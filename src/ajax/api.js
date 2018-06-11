export default fetchWeather = city => {
  return ajax({
    method: 'get',
    url:`api.openweathermap.org/data/2.5/weather?q=${city}`
  });
};
