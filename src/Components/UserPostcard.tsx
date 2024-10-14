import { RxLapTimer } from "react-icons/rx";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import pizaa from "../../assets/pizzaBanner.png";
import { UserPostCardProps } from "../types/post";

const UserPostCard: React.FC<UserPostCardProps> = ({
  showEditButton,
  postsData,
}) => {
  return (
    <div className="flex-shrink-0 w-64 mx-2 my-2 bg-white p-2 rounded-lg shadow-md">
      <img
        src={postsData ? postsData.img[0] : pizaa}
        alt=""
        className="rounded-lg block h-40 w-full object-cover"
      />
      <div className="mt-2">
        <p className="text-black font-semibold">
          {postsData ? postsData.name : "Restaurant Name"}
        </p>
      </div>
      <div className="flex items-center mt-1">
        <RxLapTimer className="mr-2" />
        <p className="text-black font-semibold">
          {postsData ? postsData.likes : "Likes"}
        </p>
      </div>
      <div className="flex items-center mt-1">
        <AiFillThunderbolt className="mr-2" />
        <p className="text-black font-semibold">
          {postsData ? postsData.shares : "Shares"}
        </p>
      </div>
      {showEditButton && (
        <div className="flex items-center mt-1">
          <GiTakeMyMoney className="mr-2" />
          <Link to="/edit-post">
            <button>Edit Post</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserPostCard;
