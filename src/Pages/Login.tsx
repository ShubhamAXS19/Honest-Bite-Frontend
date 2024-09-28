import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ConfettiExplosion from "react-confetti-explosion";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import biryani from "../../assets/biryani.jpg";
import burger from "../../assets/burger.jpg";
import QUESADILLA from "../../assets/QUESADILLA.jpg";
import { Link } from "react-router-dom";

const images = [biryani, burger, QUESADILLA];

const Login: React.FC = () => {
  const [isExploding, setIsExploding] = useState(false);

  // Handle explosion effect on slide change
  const handleSlideChange = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1500); // Reset after 1.5s to control duration
  };

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center rounded-md">
      <div className="w-[80vw] h-[80vh] flex">
        {/* Left Side Div */}
        <div className="w-1/2 h-full bg-blue-500 flex flex-col items-center relative overflow-hidden">
          {/* Maxed Out Confetti Explosion Effect */}
          {isExploding && (
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <ConfettiExplosion
                force={1} // Maximum explosion force
                duration={5000} // Maximum duration
                particleCount={20} // Maximum number of particles
                floorHeight={700} // Increases the explosion height range
                floorWidth={500} // Increases the explosion width range
                colors={[
                  "#FFC700",
                  "#FF0000",
                  "#00FF00",
                  "#0000FF",
                  "#FFFFFF",
                  "#FFA500",
                  "#800080",
                ]} // Multiple colors for variety
              />
            </div>
          )}

          {/* Swiper Carousel */}
          <div className="flex-grow w-full flex justify-center items-center">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              modules={[Navigation, Pagination, Autoplay]}
              onSlideChange={handleSlideChange}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-[20vw] h-[40vh] object-cover rounded"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Additional Div Below the Carousel */}
          <div className="mb-20 bg-white p-2 rounded shadow-md w-[20vw] text-center">
            <p>This is additional content below the image carousel.</p>
          </div>
        </div>

        {/* Right Side Div */}
        <div className="w-1/2 h-full bg-gray-100 flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-16">Sign In</h1>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ mb: 4, width: "50%" }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ mb: 4, width: "50%" }}
          />
          <Button
            variant="contained"
            sx={{ mb: 4, pt: 2, pb: 2, width: "50%" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ mb: 4, pt: 2, pb: 2, width: "50%" }}
          >
            Reset Password
          </Button>
          <p className="text-xl">
            Don't have an account??{" "}
            <Link to="/register">
              <b className="underline">Sign Up</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
