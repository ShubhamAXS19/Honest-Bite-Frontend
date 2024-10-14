import React, { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";

import { useRecoilState } from "recoil";
import { userAtom, syncBookmarks } from "../Store/Atoms/userAtom";
import { IPost, ScrollableCardRowProps } from "../types/post";
import { IUser } from "../types/user";
const Card = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  flex-shrink: 0;
  margin-right: 16px;
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 16px;
  margin-left: 16px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const RestaurantName = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 8px;
`;

const Info = styled.div`
  color: #4a5568;
  display: flex;
  items-align: center;
  gap: 4px;
`;

const Tag = styled.p`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
`;

const Caption = styled.p`
  color: #4a5568;
  margin-top: 8px;
`;

const Location = styled.p`
  color: #718096;
  font-size: 0.875rem;
  margin-top: 4px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 16px 0;
`;

interface DetailCardProps {
  post: IPost;
}

const DetailCard: React.FC<DetailCardProps> = ({ post }) => {
  const [user, setUser] = useRecoilState(userAtom);
  const toggleBookmark = (postId: string) => {
    setUser((prevUser: IUser) => {
      const isBookmarked = prevUser.tempBookmarks.includes(postId);
      const updatedTempBookmarks = isBookmarked
        ? prevUser.tempBookmarks.filter((id: string) => id !== postId)
        : [...prevUser.tempBookmarks, postId];

      // console.log("Toggling bookmark for post ID:", updatedTempBookmarks);
      return {
        ...prevUser,
        tempBookmarks: updatedTempBookmarks,
      };
    });
  };

  const isBookmarked = user.fav.includes(post._id);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user && user.tempBookmarks) {
        syncBookmarks(user._id, user.tempBookmarks);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user]);

  return (
    <Card>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {post.img.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px 8px 0 0",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <RestaurantName>{post.name}</RestaurantName>
      <Info>
        {post.tags.map((tag: string, index: number) => {
          // Split the tag string by space to get individual words
          const words = tag.split(" ");

          // Only render the 1st and 3rd words, if available
          return (
            <React.Fragment key={index}>
              {words[0] && <Tag>{words[0]}</Tag>} {/* Render 1st word */}
              {words[2] && <Tag>{words[2]}</Tag>} {/* Render 3rd word */}
            </React.Fragment>
          );
        })}
      </Info>

      <Caption>{post.caption}</Caption>
      <Location>{post.location}</Location>
      <Divider />
      <div className="flex items-center justify-between">
        {" "}
        <div className="flex items-center justify-center gap-1">
          <AiOutlineLike size={30} />
          <p>{post.likes}</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <IoShareSocialOutline size={30} />
          <p>{post.shares}</p>
        </div>
        <div>
          <CiHeart size={30} />
        </div>
        <div className="flex">
          <button onClick={() => toggleBookmark(post._id)}>
            {isBookmarked ? (
              <IoBookmark size={30} />
            ) : (
              <IoBookmarkOutline size={30} />
            )}
          </button>
        </div>
      </div>
    </Card>
  );
};

const ScrollableCardRow: React.FC<ScrollableCardRowProps> = ({ allPosts }) => {
  return (
    <CardsContainer>
      {allPosts.map((post) => (
        <DetailCard key={post._id} post={post} />
      ))}
    </CardsContainer>
  );
};

export default ScrollableCardRow;
