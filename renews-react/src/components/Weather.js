import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [temp, setTemp] = useState({});
  const [city, setCity] = useState({});

  // WEATHER CONFIG
  const weatherApiKey = 'a35b8fcb87faf12df6fd2c3fec6758f8';
  const url = `http://api.openweathermap.org/data/2.5/find?q=stockholm&units=metric&appid=${weatherApiKey}`;

  const fetchWeather = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCity(`${data.list[0].name}`);
        setTemp(`${data.list[0].main.temp}`);
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <section className='w-weather'>
      <h1 className='temperature'>{temp.toString()}</h1>
      <span className='city'>{city.toString()}</span>
    </section>
  );
};

export default Weather;
