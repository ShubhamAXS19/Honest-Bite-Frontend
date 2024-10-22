import { Link } from "react-router-dom";
import Searchbar from "../Components/Searchbar";
import Banner from "../Components/Banner";
import FoodCard from "../Components/FoodCard";
import ScrollableCardRow from "../Components/DetailCard";
import ForYou from "../Components/ForYou";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { getAllPostsAtom } from "../Store/Atoms/postAtom";
import taco from "../../public/assets/taco.jpg";
import sandwich from "../../public/assets/sandwich.jpg";
import pavBhaji from "../../public/assets/pav-bhaji.jpg";
import burger from "../../public/assets/burger.jpg";

const Homepage = () => {
  const allPosts = useRecoilValue(getAllPostsAtom);
  // console.log(allPosts);
  const leftImages = [taco, sandwich];
  const rightImages = [pavBhaji, burger];

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

      <ForYou />

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
      {/* ---------------- */}
      <div className="md:overflow-x-auto mx-4 my-2 py-2">
        <FoodCard />
      </div>
      {/* ---------------- */}
      <div className="flex items-center justify-center my-6">
        <div className="flex-grow border-t-2 mx-4"></div>
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center rounded-lg shadow-md border border-gray-300">
            <div className="flex-2 text-center py-2 px-4 bg-cyan-200 rounded-lg">
              <Link to="/">
                <p>All</p>
              </Link>
            </div>
            <div className="border-l-2 h-6"></div>
            <Link to="/nearby-spot">
              <div className="flex items-center flex-2 justify-center py-2 px-4 rounded-lg">
                {" "}
                <AiOutlineThunderbolt size={20} />
                <p>NEAR & FAST</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>
      <ScrollableCardRow allPosts={allPosts} />
      {/* </div> */}
      <div className="mb-40"></div>
    </>
  );
};

export default Homepage;
