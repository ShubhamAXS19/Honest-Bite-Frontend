import UserPostCard from "../Components/UserPostcard";
import Profile from "../../assets/profile.jpg";
import { useRecoilValue } from "recoil";
import { userAtom } from "../Store/Atoms/userAtom";

const UserInfo = () => {
  const userData = useRecoilValue(userAtom);
  const postDeatils = useRecoilValue(userAtom);
  const { posts } = postDeatils;
  console.log(userData);
  return (
    <div className="flex flex-col items-center justify-center w-[80vw]  my-10 mx-8">
      {/* Avatar */}
      <div className="mb-6">
        <img
          src={Profile}
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* Followers and Following Stats */}
      <div className="flex items-center justify-evenly w-full my-6">
        <div className="flex flex-col items-center mx-6">
          <p className="text-2xl font-semibold">Followers</p>
          <p className="text-xl text-center">
            {userData ? userData.followers : "0"}
          </p>
        </div>

        <div className="flex flex-col items-center mx-6">
          <p className="text-2xl font-semibold">Following</p>
          <p className="text-xl text-center">
            {userData ? userData.following : "0"}
          </p>
        </div>
      </div>

      {/* User Info */}
      <div className="text-center mb-6 ">
        <div className="flex mt-4 mb-2 justify-between">
          <p className="text-3xl font-bold">
            {userData ? userData.firstName : "FirstName"}{" "}
          </p>
          <p className="text-3xl font-bold">
            {userData ? userData.lastName : "LastName"}
          </p>
        </div>
        <div className="flex mt-8 justify-between">
          <p className="text-xl">
            {userData ? userData.email : "xyz@gmail.com"}
          </p>
          <p className="text-xl">Phone Number</p>
        </div>
        <div className="text-xl text-center mt-4 p-4 border rounded-md bg-gray-100">
          {userData
            ? userData.bio
            : "Bio goes here. This section can contain a brief description of the Bio"}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center my-4">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p className="text-lg">Your Posts</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>

      {/* Horizontal Scroll Container for Posts */}
      <div className="overflow-x-auto mx-4 my-2 py-2 w-full ">
        <div className="flex h-20vh">
          {posts.map((post) => (
            <UserPostCard
              key={post._id}
              postsData={post}
              showEditButton={true}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center my-4">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p className="text-lg">Your Top Posts</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>

      {/* Another Horizontal Scroll Container for Top Posts */}
      <div className="overflow-x-auto mx-4 my-2 py-2 w-full">
        <div className="flex space-x-4">
          {posts.map((post) => (
            <UserPostCard
              key={post._id}
              postsData={post}
              showEditButton={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
