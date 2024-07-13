import React from "react";
import pizaa from "../../assets/pizzaBanner.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxLapTimer } from "react-icons/rx";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";

const SpotCard = () => {
  return (
    <div className="relative inline-block mx-2 bg-white p-2 rounded-lg shadow-md">
      <div className="relative">
        <button className="absolute top-2 right-2 bg-none border-none cursor-pointer">
          <IoMdHeartEmpty size={25} />
        </button>
        <img
          src={pizaa}
          alt=""
          className="rounded-lg block h-40 w-full object-cover"
        />
        <div className="absolute bottom-2 w-full text-center">
          <p className="text-white font-semibold">60% OFF up to $20</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-black font-semibold">Restaurant Name</p>
      </div>
      <div className="flex items-center mt-1">
        <RxLapTimer className="mr-2" />
        <p className="text-black font-semibold">32 mins</p>
      </div>
      <div className="flex items-center mt-1">
        <AiFillThunderbolt className="mr-2" />
        <p className="text-black font-semibold">Near & Fast</p>
      </div>
      <div className="flex items-center mt-1">
        <GiTakeMyMoney className="mr-2" />
        <p className="text-black font-semibold">Value for Money</p>
      </div>
    </div>
  );
};

export default SpotCard;