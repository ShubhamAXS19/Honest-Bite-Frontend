import { useRecoilValue } from "recoil";
import { TopCreatorAtom, TopPostAtom } from "../Store/Atoms/postAtom";
import SpotCard from "../Components/SpotCard";
import CreatorCard from "../Components/CreatorCard";
import { IUser } from "../types/user";
import { IPost } from "../types/post";

const Trending = () => {
  const topPosts = useRecoilValue(TopPostAtom);
  // console.log(topPosts);
  const topCreators = useRecoilValue(TopCreatorAtom);

  return (
    <>
      <div className="flex flex-col items-center justify-center my-6">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>Top Posts This Week</p>
        <div className="flex">
          {topPosts.map((posts: IPost) => (
            <SpotCard postData={posts} />
          ))}
        </div>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>
      <div className="flex flex-col items-center justify-center my-6">
        <div className="flex-grow border-t-2 mx-4"></div>
        <p>Top Creator This Week</p>
        <div className="flex">
          {topCreators.map((creator: IUser) => (
            <CreatorCard creatorData={creator} />
          ))}
        </div>
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>
      <div className="mb-40"></div>
    </>
  );
};

export default Trending;
