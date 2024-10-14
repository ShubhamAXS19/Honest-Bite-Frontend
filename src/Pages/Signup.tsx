import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import biryani from "../../assets/biryani.jpg";
import burger from "../../assets/burger.jpg";
import QUESADILLA from "../../assets/QUESADILLA.jpg";

const images = [biryani, burger, QUESADILLA];

const Signup: React.FC = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();

  const handleVerification = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("userID", userID);
    // Use toast.promise to handle pending, success, and error states
    toast.promise(
      axios.post(
        `http://localhost:3000/v1/auth/verify/${userID}/${verificationCode}`,
        {
          id: userID,
          verificationCode: verificationCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ),
      {
        loading: "Verifying your account...",
        success: () => {
          toast.success("Verification Successful! Please login.");
          toast("Redirecting to login page...", {
            duration: 2000,
            icon: "🚀",
          });
          setTimeout(() => {
            navigate("/login");
          }, 2500);

          return "Verification Successful! Please login.";
        },
        error: () => {
          return "Something went wrong. Please try again.";
        },
      }
    );
  };

  // Handle explosion effect on slide change
  const handleSlideChange = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1500); // Reset after 1.5s
  };

  // Updated function using toast.promise
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use toast.promise to handle pending, success, and error states
    toast.promise(
      axios.post(
        "http://localhost:3000/v1/auth/register",
        {
          firstName: FirstName,
          lastName: LastName,
          password: Password,
          passwordConfirmation: confirmPassword,
          email: Email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ),
      {
        loading: "Registering your account...",
        success: () => {
          setIsModalOpen(true); // Open modal on success
          return "Registration Successful! Please check your email.";
        },
        error: (err) => {
          const status = err.response?.status;
          if (status === 409) {
            return "Account already exists.";
          }
          return "Something went wrong. Please try again.";
        },
      }
    );
  };

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center rounded-md">
      <div className="w-[80vw] h-[80vh] flex">
        {/* Left Side Div */}
        <div className="w-1/2 h-full bg-blue-500 flex flex-col items-center relative overflow-hidden">
          {isExploding && (
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <ConfettiExplosion
                force={1}
                duration={5000}
                particleCount={20}
                // floorHeight={700}
                // floorWidth={500}
                colors={[
                  "#FFC700",
                  "#FF0000",
                  "#00FF00",
                  "#0000FF",
                  "#FFFFFF",
                  "#FFA500",
                  "#800080",
                ]}
              />
            </div>
          )}

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

          <div className="mb-20 bg-white p-2 rounded shadow-md w-[20vw] text-center">
            <p>This is additional content below the image carousel.</p>
          </div>
        </div>

        {/* Right Side Div */}
        <div className="w-1/2 h-full bg-gray-100 flex flex-col items-center justify-center">
          <form
            onSubmit={handleRegister}
            className="w-full flex flex-col items-center"
          >
            <h1 className="text-4xl mb-16">Register</h1>
            <TextField
              id="outlined-email"
              label="Email"
              variant="outlined"
              sx={{ mb: 4, width: "50%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-firstname"
              label="First Name"
              variant="outlined"
              sx={{ mb: 4, width: "50%" }}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="outlined-lastname"
              label="Last Name"
              variant="outlined"
              sx={{ mb: 4, width: "50%" }}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              id="outlined-password"
              label="Password"
              variant="outlined"
              sx={{ mb: 4, width: "50%" }}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <TextField
              id="outlined-confirm-password"
              label="Confirm Password"
              variant="outlined"
              sx={{ mb: 4, width: "50%" }}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
            <Button
              variant="contained"
              sx={{ mb: 4, pt: 2, pb: 2, width: "50%" }}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <p className="text-xl">
            Already have an account?{" "}
            <Link to="/login">
              <b className="underline">Login</b>
            </Link>
          </p>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center">
          <div className="bg-white w-full md:w-1/2 h-1/3 p-6 rounded-t-lg flex flex-col items-center">
            <h2 className="text-2xl mb-4">Verify Your Email</h2>
            <p className="text-lg mb-6">
              A verification email has been sent to your {Email}. Please enter
              the vertification code to verify and to continue.
            </p>
            <form action="" onSubmit={handleVerification}>
              <TextField
                id="outlined-basic"
                label="Verification Code"
                variant="outlined"
                onChange={(e) => setVerificationCode(e.target.value)}
                sx={{ mb: 4, width: "50%" }}
              />
              <TextField
                id="outlined-basic"
                label="User ID"
                variant="outlined"
                onChange={(e) => setUserID(e.target.value)}
                sx={{ mb: 4, width: "50%" }}
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default Signup;
