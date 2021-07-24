import axios from 'axios';

export const getWeatherByLocation = (location, units = 'imperial') => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${process.env.REACT_APP_OPENWEATHERMAP_APIKEY}`);