import { FaMapPin } from "react-icons/fa6";
import { RiArrowDropDownLine, RiAccountCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center">
        <FaMapPin size={55} className="mr-4" />
        <div>
          <button className="flex items-center space-x-2">
            <h1 className="font-semibold text-xl">Home</h1>
            <RiArrowDropDownLine size={40} className="text-gray-500" />
          </button>
          <p className="mt-1 text-sm font-light text-gray-400">Address</p>
        </div>
      </div>
      <RiAccountCircleFill className="text-5xl text-gray-500" />
    </div>
  );
};

export default Header;
