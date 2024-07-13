import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1.5rem;
`;

const ImageContainer = styled.div`
  width: calc(50% - 1vw);
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
`;

const ImageWrapper = styled.div<{ $transitioning: boolean }>`
  display: flex;
  transition: transform 1s ease;
  transform: translateY(${(props) => (props.$transitioning ? "-100%" : "0")});
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
`;

const Banner: React.FC<{
  leftImages: string[];
  rightImages: string[];
  interval?: number;
}> = ({ leftImages, rightImages, interval = 5000 }) => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [leftTransitioning, setLeftTransitioning] = useState(false);
  const [rightTransitioning, setRightTransitioning] = useState(false);

  useEffect(() => {
    const transitionImage = (
      setIndex: React.Dispatch<React.SetStateAction<number>>,
      setTransitioning: React.Dispatch<React.SetStateAction<boolean>>,
      imagesLength: number
    ) => {
      setTransitioning(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imagesLength);
        setTransitioning(false);
      }, 1000); // This should match the transition duration in styled-components
    };

    const leftTimer = setInterval(() => {
      transitionImage(setLeftIndex, setLeftTransitioning, leftImages.length);
    }, interval);

    const rightTimer = setInterval(() => {
      transitionImage(setRightIndex, setRightTransitioning, rightImages.length);
    }, interval);

    return () => {
      clearInterval(leftTimer);
      clearInterval(rightTimer);
    };
  }, [leftImages.length, rightImages.length, interval]);

  return (
    <BannerContainer>
      <ImageContainer>
        <ImageWrapper $transitioning={leftTransitioning}>
          <StyledImage src={leftImages[leftIndex]} alt="" />
          <StyledImage
            src={leftImages[(leftIndex + 1) % leftImages.length]}
            alt=""
          />
        </ImageWrapper>
      </ImageContainer>
      <ImageContainer>
        <ImageWrapper $transitioning={rightTransitioning}>
          <StyledImage src={rightImages[rightIndex]} alt="" />
          <StyledImage
            src={rightImages[(rightIndex + 1) % rightImages.length]}
            alt=""
          />
        </ImageWrapper>
      </ImageContainer>
    </BannerContainer>
  );
};

export default Banner;
