import React, { useState, useRef, useEffect } from 'react';
import _get from 'lodash/get';
import { AnimatedWeatherIcon } from 'animated-weather-icon';
import HANDELERS from './weather.helpers';
import { getTemparatureList, getLocationData } from './weather.utils';
import styles from './weather.module.scss';

function Weather() {
  const [icon, setIcon] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const inputEl = useRef(null);

  useEffect(() => {
    const fn = async () => {
      const iconEl = new AnimatedWeatherIcon(inputEl.current);
      const weather = await HANDELERS.FETCH_CURRENT_WEATHER('kolkata');
      setIcon(iconEl);
      setWeatherData(weather);
      await HANDELERS.SET_WEATHER_ICON(iconEl, weather);
    }
    fn();
  }, []);

  return (
    <div>
      <div ref={inputEl} className={styles.weatherContainer} />
      <h2>{_get(getLocationData(weatherData), 'location')}</h2>
    </div>
  )
}

export default Weather
