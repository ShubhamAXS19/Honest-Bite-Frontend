import { useState } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import PizzaIcon from "../../assets/pizza.png";
import { PiMapPinLight, PiMapPinFill } from "react-icons/pi";
import { LuPlusCircle } from "react-icons/lu";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const BottomMenu = () => {
  const navigate = useNavigate();
  const [homeFilled, setHomeFilled] = useState(false);
  const [bookmarkFilled, setBookmarkFilled] = useState(false);
  const [mapPinFilled, setMapPinFilled] = useState(false);
  const [plusCircleFilled, setPlusCircleFilled] = useState(false);

  const toggleHome = () => {
    setHomeFilled(!homeFilled);
    navigate("/");
  };

  const toggleBookmark = () => {
    setBookmarkFilled(!bookmarkFilled);
  };

  const toggleMapPin = () => {
    setMapPinFilled(!mapPinFilled);
  };

  const togglePlusCircle = () => {
    setPlusCircleFilled(!plusCircleFilled);
  };

  const movePizzaIcon = () => {
    const pizzaIcon = document.getElementById("pizzaIcon");
    if (pizzaIcon) {
      pizzaIcon.style.transform = `translateY(-${Math.random() * 10 + 10}px)`;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 flex items-center justify-between sm:px-4 md:px-6 lg:px-8 py-2">
      <button onClick={toggleHome} className="w-1/5 text-center">
        {homeFilled ? (
          <div className="flex flex-col items-center">
            <GoHomeFill className="sm:text-3xl md:text-4xl lg:text-5xl" />
            <h4 className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
              Home
            </h4>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <GoHome className="sm:text-3xl md:text-4xl lg:text-5xl" />
            <h4 className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
              Home
            </h4>
          </div>
        )}
      </button>
      <button onClick={togglePlusCircle} className="w-1/5 text-center">
        {plusCircleFilled ? (
          <div className="flex flex-col items-center">
            <AiFillPlusCircle className="sm:text-3xl md:text-4xl lg:text-5xl" />
            <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
              Create a post
            </p>
          </div>
        ) : (
          <Link to="/create-post">
            <div className="flex flex-col items-center">
              <LuPlusCircle className="sm:text-3xl md:text-4xl lg:text-5xl" />
              <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
                Create a post
              </p>
            </div>
          </Link>
        )}
      </button>
      <Link to="/share-a-slice" className="w-1/5 text-center">
        <button onClick={movePizzaIcon}>
          <div className="flex flex-col items-center">
            <img
              id="pizzaIcon"
              src={PizzaIcon}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-transform duration-300 transform hover:scale-110"
              alt="Pizza Icon"
            />
            <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
              Share a slice
            </p>
          </div>
        </button>
      </Link>
      <button onClick={toggleMapPin} className="w-1/5 text-center">
        {mapPinFilled ? (
          <div className="flex flex-col items-center">
            <PiMapPinFill className="sm:text-3xl md:text-4xl lg:text-5xl" />
            <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
              Find Nearby Spot
            </p>
          </div>
        ) : (
          <Link to="/nearby-spot">
            <div className="flex flex-col items-center">
              <PiMapPinLight className="sm:text-3xl md:text-4xl lg:text-5xl" />
              <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
                Find Nearby Spot
              </p>
            </div>
          </Link>
        )}
      </button>
      <button onClick={toggleBookmark} className="w-1/5 text-center">
        {bookmarkFilled ? (
          <div className="flex flex-col items-center">
            <FaArrowTrendUp className="sm:text-3xl md:text-4xl lg:text-5xl" />
            <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
              Trending
            </p>
          </div>
        ) : (
          <Link to="/trending">
            <div className="flex flex-col items-center">
              <FaArrowTrendUp className="sm:text-3xl md:text-4xl lg:text-5xl" />
              <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg">
                Trending
              </p>
            </div>
          </Link>
        )}
      </button>
    </div>
  );
};

export default BottomMenu;
