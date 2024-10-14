import { useRecoilValue } from "recoil";
import UserPostCard from "../Components/UserPostcard";
import { getAllPostsAtom } from "../Store/Atoms/postAtom";
const EditProfile: React.FC = () => {
  const post = useRecoilValue(getAllPostsAtom);
  return (
    <div className="flex flex-col items-center justify-center w-full  mx-4 my-8">
      <div>
        <img src="" alt="User Avatar" />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <label htmlFor="">First Name</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Phone Number</label>
          <input type="text" />
        </div>
      </div>
      <div className="flex flex-col my-4">
        <label htmlFor="">Bio</label>
        <input type="text" />
      </div>

      <div className="flex items-center justify-center my-2">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>Your Post</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="overflow-x-auto mx-4 my-2 py-2 w-full ">
        <div className="grid grid-flow-col gap-4 w-max">
          <UserPostCard key={post.id} showEditButton={true} postsData={post} />
          <UserPostCard key={post.id} showEditButton={true} postsData={post} />
          <UserPostCard key={post.id} showEditButton={true} postsData={post} />
        </div>
      </div>

      <div className="flex items-center justify-center my-2">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>Your Top Post</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>

      {/* Another Horizontal Scrolling Container */}
      <div className="overflow-x-auto mx-4 my-2 py-2 w-full h-full">
        <div className="grid grid-flow-col gap-4 w-max">
          <UserPostCard key={post.id} showEditButton={true} postsData={post} />
          <UserPostCard key={post.id} showEditButton={true} postsData={post} />
          <UserPostCard key={post.id} showEditButton={true} postsData={post} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
