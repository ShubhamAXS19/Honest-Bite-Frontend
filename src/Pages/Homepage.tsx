import Searchbar from "../Components/Searchbar";
import { IoHeartOutline } from "react-icons/io5";
import Banner from "../Components/Banner";
import SpotCard from "../Components/SpotCard";
import FoodCard from "../Components/FoodCard";
import { AiOutlineThunderbolt } from "react-icons/ai";
import DetailCard from "../Components/DetailCard";
import { Link } from "react-router-dom";
const Homepage = () => {
  const leftImages = ["../../assets/tsco.jpg", "../../assets/sandwich.jpg"];

  const rightImages = ["../../assets/pav-bhaji.jpg", "../../assets/burger.jpg"];

  return (
    <>
      <Searchbar />
      {/* <div style={{ backgroundColor: "#8ecae6" }}> */}
      {/* banner */}
      <Banner
        leftImages={leftImages}
        rightImages={rightImages}
        interval={3000}
      />

      <div className="flex items-center justify-center my-6">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>For You</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>
      {/* menu */}
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center pt-1 pb-1 px-4 rounded-lg shadow-md border border-gray-300">
          <button className="flex-1 text-center ">Recommendation</button>
          <div className="border-l-2 h-6 mx-4"></div>
          <button className="flex items-center flex-1 justify-center">
            <IoHeartOutline />
            <p className="pl-2">Favourites</p>
          </button>
        </div>
      </div>
      {/* card */}
      <div className="overflow-x-auto mx-4 my-2 py-2">
        <div className="grid grid-flow-col gap-4 w-max">
          <SpotCard />
        </div>
      </div>
      {/* Explore */}
      <div className="flex items-center justify-center my-6">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>Explore</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>
      <div className="flex items-center justify-center my-6">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>WHAT'S ON YOUR MIND ?</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>
      <div className="overflow-x-auto mx-4 my-2 py-2">
        <div className="grid grid-flow-col gap-4 w-max">
          <FoodCard />
        </div>
      </div>
      <div className="flex items-center justify-center my-6">
        <div className="flex-grow border-t-2 mx-4"></div>
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center py-2 px-4 rounded-lg shadow-md border border-gray-300">
            <button className="flex-2 text-center ">All</button>
            <div className="border-l-2 h-6 mx-2"></div>
            <button className="flex items-center flex-2 justify-center">
              <AiOutlineThunderbolt size={20} />
              <p className="pl-2">NEAR & FAST</p>
            </button>
          </div>
        </div>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>
      <Link to="/detail">
        <DetailCard />
      </Link>
      {/* </div> */}
      <div className="mb-40"></div>
    </>
  );
};

export default Homepage;
