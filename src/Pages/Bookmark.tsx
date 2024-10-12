import UserPostCard from "../Components/UserPostcard";
import { useRecoilValue } from "recoil";
import { userAtom } from "../Store/Atoms/userAtom";

const Bookmark = () => {
  const userData = useRecoilValue(userAtom);
  const { bookmarks } = userData;
  return (
    <div>
      {bookmarks.map((post) => (
        <UserPostCard key={post._id} postsData={post} showEditButton={false} />
      ))}
    </div>
  );
};

export default Bookmark;
