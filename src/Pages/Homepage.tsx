import BottomMenu from "../Components/BottomMenu";
import Header from "../Components/Header";
import Searchbar from "../Components/Searchbar";
import { IoHeartOutline } from "react-icons/io5";
import pizzaBanner from "../../assets/pizzaBanner.png";

const Homepage = () => {
  return (
    <>
      <Header />
      <Searchbar />

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

      <BottomMenu />
    </>
  );
};

export default Homepage;
