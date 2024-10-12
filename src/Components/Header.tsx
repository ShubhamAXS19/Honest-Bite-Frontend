import { useEffect, useState } from "react";
import { FaMapPin } from "react-icons/fa6";
import { RiArrowDropDownLine, RiAccountCircleFill } from "react-icons/ri";
import HeaderGIF from "../Utils/HeaderGIF";
import Snowfall from "../../assets/Snowfall.mp4";
import Sunny from "../../assets/Sunny Morning.mp4";
import Rain from "../../assets/Rain.mp4";
import Cloudy from "../../assets/Cloudy.mp4";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { userAtom } from "../Store/Atoms/userAtom";

const Header = () => {
  const [weather, setWeather] = useState<any | null>(null);
  const [gif, setGif] = useState<string>("");
  const userInfo = useRecoilValue(userAtom);

  const isLoggedIn = userInfo && userInfo.status !== 403;

  useEffect(() => {
    // Function to get user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude is :", latitude);
          console.log("Longitude is :", longitude);
          const weatherData = await HeaderGIF(latitude, longitude);
          setWeather(weatherData);
          selectGif(weatherData);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    const selectGif = (weatherData: any) => {
      if (weatherData) {
        // const weatherCondition = weatherData.weather[0].main.toLowerCase();
        const weatherCondition = "rain";
        switch (weatherCondition) {
          case "clear":
            setGif(Sunny);
            break;
          case "clouds":
            setGif(Cloudy);
            break;
          case "rain":
            setGif(Rain);
            break;
          case "snow":
            setGif(Snowfall);
            break;
        }
      }
    };

    getLocation();
  }, []);

  return (
    <div className="relative flex items-center justify-between p-4 shadow-md">
      {gif &&
        Array.from({ length: 16 }).map((_, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={gif}
            style={{
              width: "110px", // Adjust the width as needed
              height: "110px", // Adjust the height as needed
              top: "50%",
              left: `${15 + 5 * index}%`, // Start 30% from the left and adjust the left position for each video
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              opacity: 0.5, // Optional: Adjust the opacity to make it look like a watermark
            }}
          />
        ))}

      <div className="flex items-center justify-between w-full">
        {/* Left section (Home with Address) */}
        <div className="relative z-10 flex items-center">
          <FaMapPin size={55} className="mr-4" />
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="font-semibold text-xl">Home</h1>
              <RiArrowDropDownLine size={40} className="text-gray-500" />
            </Link>
            <p className="mt-1 text-sm font-light text-gray-400">Address</p>
          </div>
        </div>

        {/* Right section (Login/Signup or User Icon) */}
        <div>
          {!isLoggedIn ? (
            <div className="flex space-x-4">
              <Link to="/login">
                <Button
                  variant="contained"
                  sx={{ p: 2, borderRadius: 4, width: "6rem" }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="contained"
                  sx={{ p: 2, borderRadius: 4, width: "6rem" }}
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="/userInfo">
              <RiAccountCircleFill className="relative z-10 text-5xl text-gray-500" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
