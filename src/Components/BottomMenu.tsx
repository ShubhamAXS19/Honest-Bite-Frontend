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
    // Adjust the translateY value to move the pizza icon upwards
    const pizzaIcon = document.getElementById("pizzaIcon");
    if (pizzaIcon) {
      pizzaIcon.style.transform = `translateY(-${Math.random() * 10 + 10}px)`;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 flex items-center justify-between px-6 py-2">
      <button onClick={toggleHome}>
        {homeFilled ? (
          <div className="flex flex-col items-center justify-center">
            <GoHomeFill size={35} />
            <h4>Home</h4>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <GoHome size={35} />
            <h4>Home</h4>
          </div>
        )}
      </button>
      <button onClick={togglePlusCircle}>
        {plusCircleFilled ? (
          <div className="flex flex-col items-center justify-center">
            <AiFillPlusCircle size={35} />
            <p>Create a post</p>
          </div>
        ) : (
          <Link to="/create-post">
            <div className="flex flex-col items-center justify-center">
              <LuPlusCircle size={35} />
              <p>Create a post</p>
            </div>
          </Link>
        )}
      </button>
      <Link to="/share-a-slice">
        <button onClick={movePizzaIcon}>
          <div className="flex flex-col items-center justify-center">
            <img
              id="pizzaIcon"
              src={PizzaIcon}
              className="w-12 h-12 transition-transform duration-300 transform hover:scale-110"
              alt="Pizza Icon"
            />
            <p>Share a slice</p>
          </div>
        </button>
      </Link>
      <button onClick={toggleMapPin}>
        {mapPinFilled ? (
          <div className="flex flex-col items-center justify-center">
            <PiMapPinFill size={35} />

            <p>Find Nearby Spot</p>
          </div>
        ) : (
          <Link to="/nearby-spot">
            <div className="flex flex-col items-center justify-center">
              <PiMapPinLight size={35} />
              <p>Find Nearby Spot</p>
            </div>
          </Link>
        )}
      </button>
      <button onClick={toggleBookmark}>
        {bookmarkFilled ? (
          <div className="flex flex-col items-center justify-center">
            <FaArrowTrendUp size={35} />
            <p>Trending</p>
          </div>
        ) : (
          <Link to="/trending">
            <div className="flex flex-col items-center justify-center">
              <FaArrowTrendUp size={35} />
              <p>Trending</p>
            </div>
          </Link>
        )}
      </button>
    </div>
  );
};

export default BottomMenu;
