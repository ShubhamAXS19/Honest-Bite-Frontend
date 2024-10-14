import { useState } from "react";
import SpotCard from "../Components/SpotCard";
import { IoHeartOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { userAtom } from "../Store/Atoms/userAtom";

const ForYou = () => {
  const favPosts = useRecoilValue(userAtom);
  const { fav } = favPosts;
  const [favActive, setFavActive] = useState(true);
  const [recActive, setRecActive] = useState(false);

  // Function to handle click for Recommendations
  const handleRecClick = () => {
    setRecActive(true);
    setFavActive(false);
  };

  // Function to handle click for Favourites
  const handleFavClick = () => {
    setRecActive(false);
    setFavActive(true);
  };

  return (
    <>
      <div className="flex items-center justify-center my-6">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>For You</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>

      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center rounded-lg shadow-md border border-gray-300">
          {/* Recommendation Button */}
          <button
            onClick={handleRecClick}
            className={`flex-1 text-center py-1 px-8 rounded-lg  transition-colors duration-300 ${
              recActive ? "bg-cyan-200" : ""
            }`}
          >
            Recommendation
          </button>

          {/* Divider */}
          <div className="border-l-2 h-6"></div>

          {/* Favourites Button */}
          <button
            onClick={handleFavClick}
            className={`flex items-center flex-1 justify-center py-1 px-8 rounded-lg transition-colors duration-300 ${
              favActive ? "bg-cyan-200" : ""
            } `}
          >
            <IoHeartOutline />
            <p className="pl-2 cursor-pointer">Favourites</p>
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="overflow-x-auto mx-4 my-2 py-2">
        <div className="grid grid-flow-col gap-4 w-max">
          <SpotCard postData={fav} />
        </div>
      </div>
    </>
  );
};

export default ForYou;
