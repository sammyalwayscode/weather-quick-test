import React, { useState, useEffect } from "react";
// import "./Main.css";
import { Input } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const api = {
  key: "1dddec5bb1f81b184a2f5cf72a85e134",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Test = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  //  create axios url
  const search = async () => {
    const weatherURL = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=1dddec5bb1f81b184a2f5cf72a85e134`
    );
    console.log(weatherURL);
    if (weatherURL) {
      const data = await weatherURL.data;
      return setWeather(data);
    }
  };

  // date builder
  const dateBuilder = (d) => {
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`;
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <div>
      {weather ? (
        <div>
          <Input
            placeholder="Know Your Weather"
            style={{ width: "230px" }}
            onChange={handleChange}
            value={query}
            onKeyPress={search}
          />
          <div>{dateBuilder(new Date())}</div>
          <div>
            {weather.name}, {weather.sys.country}
          </div>
          <div>{Math.round(weather.main.temp)}°c</div>
          <div> {weather.weather[0].description}</div>
        </div>
      ) : (
        <div>
          <Input
            placeholder="Know Your Weather"
            style={{ width: "230px" }}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <div>{dateBuilder(new Date())}</div>
          <div>country name and short code</div>
          <div>temperature</div>
          <div>description</div>
        </div>
      )}
    </div>
  );
};

export default Test;
