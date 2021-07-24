import _get from 'lodash/get';
import { AnimatedWeatherTypes, AnimatedWeatherTimes } from 'animated-weather-icon';
import { getWeatherByLocation } from '../../services/web-mirror.services';
import { getForcastType } from './weather.utils';


const fetchCurrentWeather = async (loacation) => {
  try {
    const weatherState = await getWeatherByLocation(loacation);
    return _get(weatherState, 'data', null);
  } catch (err) {
    console.error('ERROR fetching weather', err);
  }
}

const setWeatherIcon = async (icon, weather) => {
  console.log('weatherState', weather, getForcastType(weather));
  await icon.setType(AnimatedWeatherTypes[getForcastType(weather).forcast], AnimatedWeatherTimes.Day);
}

const fns = {
  FETCH_CURRENT_WEATHER: fetchCurrentWeather,
  SET_WEATHER_ICON: setWeatherIcon,
};

export default fns;