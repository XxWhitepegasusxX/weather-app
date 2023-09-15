import React, { useEffect, useState } from "react";

import Card from "@/components/Card";
import Header from "@/components/Header";
import { getDate } from "@/utils/getDate";

interface WeatherData {
  id: number;
  weather: { 
    id: number; 
    main: string; 
    description: string; 
    icon: string 
  }[];
  base: string;
  main: {
    temp: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  };
  wind: { speed: number };
  name: string;
  visibility: number;
  dt: number;
  formattedDate: string;
  timezone: number;
}

export default function Home() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true);

  const API_KEY = "cba92156e7ce86c903fd8d75b8b286df";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data: WeatherData) => {
          const formattedDate = getDate(data.dt, data.timezone);
          setWeather({...data, formattedDate });
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [location]);

  return (
    <>
      <Header/>
      <div className="bg-white/25 w-full flex justify-center items-center flex-col h-screen">
        {loading ? (
          <h1 className="text-5xl">Loading...</h1>
        ) : weather ? (
          <Card 
            city={weather.name}
            main={weather.weather[0].main}
            date={weather.formattedDate}
            temperature={Math.round(weather.main.temp)}
            max_temperature={Math.round(weather.main.temp_max)}
            min_temperature={Math.round(weather.main.temp_min)}
            description={weather.weather[0].description}
            humidity={weather.main.humidity}
            icon={weather.weather[0].icon}
            windSpeed={weather.wind.speed}
            visibility={(weather.visibility / 1000)}
          />
        ) : <p>Something Went wrong</p>}
      </div>
    </>
  )
}
