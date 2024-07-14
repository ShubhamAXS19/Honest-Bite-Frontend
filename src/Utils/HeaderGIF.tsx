// src/utils/getWeather.ts
import axios from "axios";

interface Weather {
  weather: {
    main: string;
  }[];
  main: {
    temp: number;
  };
  name: string;
}

const HeaderGIF = async (
  latitude: number,
  longitude: number
): Promise<Weather | null> => {
  const apiKey = "your_api_key"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${apiKey}`;

  try {
    const response = await axios.get<Weather>(url);
    console.log(response.data.weather[0].main);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};

export default HeaderGIF;
