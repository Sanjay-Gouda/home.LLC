import { useState } from "react";
import "./App.css";
import WeatherApp from "./components/weather-app";
import ReactSearchBox from "react-search-box";
import city from "./constant/city.json";

type TweatherInfo = {
  feels_like?: number;
  humidity?: number;
  pressure?: number;
  temp?: number;
  cityName?: string;
};

function App() {
  const api_key = "63a9b2fcece8a02018af922b70a19fd3";

  const [weatherData, setWeatherData] = useState<TweatherInfo>({});

  const handleSelect = async (record: any) => {
    console.log(record);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${record?.item?.value}&appid=${api_key}`
      );
      const data = await res.json();
      const { name, wind } = data;
      const { speed } = wind;

      const { feels_like, humidity, temp } = data.main;

      setWeatherData({
        feels_like: feels_like,
        humidity: humidity,
        pressure: speed,
        temp: temp,
        cityName: name,
      });
      console.log(data, "data");
    } catch (err) {
      console.log(err);
      alert("Invalid City Name");
    }
  };

  return (
    <>
      <ReactSearchBox
        style={{ width: "400px" }}
        inputBackgroundColor="red"
        placeholder="Search City"
        className="searchbox"
        onSelect={(record: string) => handleSelect(record)}
        onFocus={() => {
          console.log("This function is called when is focussed");
        }}
        autoFocus
        data={city}
      />
      <WeatherApp weatherData={weatherData} />
    </>
  );
}

export default App;
