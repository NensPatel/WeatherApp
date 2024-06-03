import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("Gujarat");
  const [weatherData, setWeatherData] = useState(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const API_KEY = "c5b179fa203a5ecec3be6adebce3cd9e";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = response.data;
      setWeatherData(data);
      console.log(data);
      console.log("data", data.weather[0].description);
      console.log("description", data.weather[0].description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="max-w-xs w-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg shadow-lg p-5 text-center space-y-10">
          <div className="space-y-3">
            <p className="text-blue-200 text-sm">{formattedDate}</p>
            {weatherData && (
              <>
                <h1 className="text-white text-2xl font-bold">
                  {weatherData.name}, {weatherData.sys.country}
                </h1>
                <img
                  src="/assets/weather.png"
                  alt="weather"
                  className="w-2/3 rounded-full mx-auto block"
                />
                <div>
                  <p className="text-white text-3xl font-black">
                    {weatherData.main.temp}°C
                  </p>
                  <p className="text-white text-md">
                    {weatherData.weather[0].main}
                  </p>
                </div>
              </>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="city"
              value={city}
              placeholder="Enter city name"
              className="w-2/3 p-2 bg-gray-100 border-1"
              onChange={handleChange}
            />
            <button
              className="bg-blue-200 p-2 font-bold hover:bg-blue-300"
              type="submit"
            >
              GET
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
