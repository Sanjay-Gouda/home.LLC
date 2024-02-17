import "./style.css";
import weatherbg from "../../assets/weather.jpg";
import { FaWind } from "react-icons/fa";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { FaTachometerAlt } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const WeatherApp = ({ weatherData }: any) => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="upper-data">
            <img src={weatherbg} />

            <div className="weather-data">
              <div className="location">{weatherData?.cityName || "Surat"}</div>
              <div className="temp">{weatherData?.temp || "308.14"}°C</div>
            </div>
          </div>
          <div className="lower-data">
            <div className="more-info-label">More Information</div>
            <div className="wrapper">
              <div className="more-info-container">
                <p style={{ color: `white` }}>Humidity</p>
                <div className="humidity-container">
                  <WiHumidity size={30} color="white" />
                  <div className="info-block-value">
                    {weatherData?.humidity || "20"}%
                  </div>
                </div>
              </div>
              <div className="more-info-container">
                <p style={{ color: `white` }}>Feels Like</p>
                <div className="humidity-container">
                  <FaWind size={20} color="white" />
                  <div className="info-block-value">
                    {weatherData?.feels_like || "297.29"}°C
                  </div>
                </div>
              </div>
              <div className="more-info-container">
                <p style={{ color: `white` }}>Temprature</p>
                <div className="humidity-container">
                  <LiaTemperatureHighSolid size={30} color="white" />
                  <div className="info-block-value">
                    {weatherData?.temp || "298.21"}°C
                  </div>
                </div>
              </div>
              <div className="more-info-container">
                <p style={{ color: `white` }}>Wind Speed</p>
                <div className="humidity-container">
                  <FaTachometerAlt size={20} color="white" />
                  <div className="info-block-value">
                    {weatherData?.pressure || "5"} km/h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
