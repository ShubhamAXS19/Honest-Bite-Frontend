// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   toggleHome,
//   toggleBookmark,
//   toggleMapPin,
//   togglePlusCircle,
//   selectBottomMenuState,
// } from "./bottomMenuSlice"; // Assuming these are your Redux actions and selectors

// import { GoHome, GoHomeFill } from "react-icons/go";
// import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
// import PizzaIcon from "../../assets/pizza.png";
// import { PiMapPinLight, PiMapPinFill } from "react-icons/pi";
// import { LuPlusCircle } from "react-icons/lu";
// import { AiFillPlusCircle } from "react-icons/ai";

// const BottomMenu = () => {
//   const { homeFilled, bookmarkFilled, mapPinFilled, plusCircleFilled } =
//     useSelector(selectBottomMenuState);
//   const dispatch = useDispatch();

//   const handleClickHome = () => {
//     dispatch(toggleHome());
//     resetOtherStates("homeFilled");
//   };

//   const handleClickBookmark = () => {
//     dispatch(toggleBookmark());
//     resetOtherStates("bookmarkFilled");
//   };

//   const handleClickMapPin = () => {
//     dispatch(toggleMapPin());
//     resetOtherStates("mapPinFilled");
//   };

//   const handleClickPlusCircle = () => {
//     dispatch(togglePlusCircle());
//     resetOtherStates("plusCircleFilled");
//   };

//   const resetOtherStates = (current) => {
//     const states = [
//       "homeFilled",
//       "bookmarkFilled",
//       "mapPinFilled",
//       "plusCircleFilled",
//     ];
//     states.forEach((state) => {
//       if (state !== current) {
//         dispatch({ type: `reset${state}` });
//       }
//     });
//   };

//   const movePizzaIcon = () => {
//     const pizzaIcon = document.getElementById("pizzaIcon");
//     if (pizzaIcon) {
//       pizzaIcon.style.transform = `translateY(-${10}px)`; // Adjust as needed
//     }
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 flex items-center justify-between pl-6 pr-6">
//       <button onClick={handleClickHome}>
//         {homeFilled ? <GoHomeFill size={40} /> : <GoHome size={40} />}
//       </button>
//       <button onClick={handleClickPlusCircle}>
//         {plusCircleFilled ? (
//           <AiFillPlusCircle size={40} />
//         ) : (
//           <LuPlusCircle size={40} />
//         )}
//       </button>
//       <button onClick={movePizzaIcon}>
//         <img
//           id="pizzaIcon"
//           src={PizzaIcon}
//           className="w-14 h-14 transition-transform duration-300 transform hover:scale-110"
//           alt="Pizza Icon"
//         />
//       </button>
//       <button onClick={handleClickMapPin}>
//         {mapPinFilled ? (
//           <PiMapPinFill size={40} />
//         ) : (
//           <PiMapPinLight size={40} />
//         )}
//       </button>
//       <button onClick={handleClickBookmark}>
//         {bookmarkFilled ? (
//           <IoBookmark size={40} />
//         ) : (
//           <IoBookmarkOutline size={40} />
//         )}
//       </button>
//     </div>
//   );
// };

// export default BottomMenu;

import React, { useState } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import PizzaIcon from "../../assets/pizza.png";
import { PiMapPinLight, PiMapPinFill } from "react-icons/pi";
import { LuPlusCircle } from "react-icons/lu";
import { AiFillPlusCircle } from "react-icons/ai";
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
            <IoBookmark size={35} />
            <p>Bookmark</p>
          </div>
        ) : (
          <Link to="/bookmark">
            <div className="flex flex-col items-center justify-center">
              <IoBookmarkOutline size={35} />
              <p>Bookmark</p>
            </div>
          </Link>
        )}
      </button>
    </div>
  );
};

export default BottomMenu;
