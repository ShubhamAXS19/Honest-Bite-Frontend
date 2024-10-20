import { atom, selector } from "recoil";
import axios from "axios";

export const TopPostAtom = atom({
  key: "TopPostAtom",
  default: selector({
    key: "TopPostAtomSelector",
    get: async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/post/top-posts`
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching top posts: ", error);
        throw error;
      }
    },
  }),
});
export const TopCreatorAtom = atom({
  key: "TopCreatorAtom",
  default: selector({
    key: "TopCreatorAtomSelector",
    get: async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/eat/top-creators`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching top creator: ", error);
        throw error;
      }
    },
  }),
});

export const getAllPostsAtom = atom({
  key: "getAllPostsAtom",
  default: selector({
    key: "getAllPostsAtomSelector",
    get: async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/post/allposts`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching all posts: ", error);
        throw error;
      }
    },
  }),
});
