import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import biryani from "../../assets/biryani.jpg";
import burger from "../../assets/burger.jpg";
import QUESADILLA from "../../assets/QUESADILLA.jpg";

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

const Offer = styled.p`
  color: #38a169;
  font-weight: 600;
  margin-top: 8px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 16px 0;
`;

const DetailCard: React.FC = () => {
  return (
    <Card>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500 }} // Add autoplay configuration here
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module here
      >
        <SwiperSlide>
          <img
            src={biryani}
            alt="Image 1"
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={burger}
            alt="Image 2"
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={QUESADILLA}
            alt="Image 3"
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
        </SwiperSlide>
      </Swiper>

      <RestaurantName>Restaurant Name</RestaurantName>
      <Info>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
      </Info>
      <Divider />
      <Offer>20% OFF up to $20</Offer>
    </Card>
  );
};

// This component will render multiple DetailCards in a scrollable row
const ScrollableCardRow: React.FC = () => {
  return (
    <CardsContainer>
      <DetailCard />
      <DetailCard />
      <DetailCard />
      <DetailCard />
      {/* Add more DetailCard components as needed */}
    </CardsContainer>
  );
};

export default ScrollableCardRow;
