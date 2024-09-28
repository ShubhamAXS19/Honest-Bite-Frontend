import pizaa from "../../assets/pizzaBanner.png";
import { RxLapTimer } from "react-icons/rx";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";

const UserPostCard = () => {
  return (
    <div className="relative inline-block mx-2 bg-white p-2 rounded-lg shadow-md">
      <img
        src={pizaa}
        alt=""
        className="rounded-lg block h-40 w-full object-cover"
      />
      <div className="mt-2">
        <p className="text-black font-semibold">Restaurant Name</p>
      </div>
      <div className="flex items-center mt-1">
        <RxLapTimer className="mr-2" />
        <p className="text-black font-semibold">Likes</p>
      </div>
      <div className="flex items-center mt-1">
        <AiFillThunderbolt className="mr-2" />
        <p className="text-black font-semibold">Shares</p>
      </div>
      <div className="flex items-center mt-1">
        <GiTakeMyMoney className="mr-2" />
        <button>Edit Post</button>
      </div>
    </div>
  );
};

export default UserPostCard;
