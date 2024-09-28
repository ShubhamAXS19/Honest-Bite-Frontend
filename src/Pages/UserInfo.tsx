import UserPostCard from "../Components/UserPostcard";

const UserInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div>
        <img src="" alt="User Avatar" />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p>Followers</p>
          <p>100</p>
        </div>

        <div className="flex flex-col">
          <p>Following</p>
          <p>10</p>
        </div>
      </div>

      <div className="flex">
        <p>First Name</p>
        <p>Last Name</p>
      </div>
      <div className="flex">
        <p>Email</p>
        <p>Phone Number</p>
      </div>
      <div>Bio</div>

      <div className="flex items-center justify-center my-2">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>Your Post</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="overflow-x-auto mx-4 my-2 py-2 w-full">
        <div className="grid grid-flow-col gap-4 w-max">
          <UserPostCard />
          <UserPostCard />
          <UserPostCard />
        </div>
      </div>

      <div className="flex items-center justify-center my-2">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>Your Top Post</p>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>

      {/* Another Horizontal Scrolling Container */}
      <div className="overflow-x-auto mx-4 my-2 py-2 w-full">
        <div className="grid grid-flow-col gap-4 w-max">
          <UserPostCard />
          <UserPostCard />
          <UserPostCard />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
