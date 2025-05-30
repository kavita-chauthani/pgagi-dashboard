import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/WeatherStyles.css";
import axios from "axios";
import toast from "react-hot-toast";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const handleCityChange = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"6b2c22b1901ff468920dbe31b518398c"}`
      );
      console.log(response);
      setWeather(response);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const handleClick = () => {
    fetchWeather();
  };
  return (
    <Layout>
      <div className="weather-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={handleClick}>Get Weather</button>
        {weather && (
          <>
            <div className="weather-info">
              <h2>{weather.data.name}</h2>
              <p>Temp is {weather.data.main.temp}</p>
              <p>{weather.data.weather[0].description}</p>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Weather;
