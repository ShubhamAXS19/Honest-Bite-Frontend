import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
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
  gap: 8px;
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

const DetailCard = ({ post }) => {
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
        {post.img.map((image, index) => (
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
        {post.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Info>
      <Caption>{post.caption}</Caption>
      <Location>{post.location}</Location>
      <Divider />
      <div className="flex items-center justify-between">
        {" "}
        <div className="flex items-center justify-center gap-1">
          <AiOutlineLike size={20} />
          <p>Likes: {post.likes}</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <IoShareSocialOutline size={20} />
          <p>Shares: {post.shares}</p>
        </div>
        <div>
          <CiHeart size={20} />
        </div>
        <div>
          <CiBookmark size={20} />
        </div>
      </div>
    </Card>
  );
};

const ScrollableCardRow = ({ allPosts }) => {
  return (
    <CardsContainer>
      {allPosts.map((post) => (
        <DetailCard key={post._id} post={post} />
      ))}
    </CardsContainer>
  );
};

export default ScrollableCardRow;
