import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2vw 3vw 0 3vw;
  margin: 0 auto;
  height: 85vh;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  width: 100%; /* Full width on small screens */
  height: 50%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  aspect-ratio: 16 / 9;
  perspective: 1000px; /* Perspective gives the 3D effect */

  @media (min-width: 768px) {
    width: calc(50% - 2vw);
  }
`;

const ImageWrapper = styled.div<{
  $transitioning: boolean;
  $direction: string;
}>`
  display: flex;
  transition: transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    opacity 0.5s ease;
  transform: ${(props) =>
    props.$transitioning
      ? `rotateY(${props.$direction === "left" ? "90deg" : "-90deg"})`
      : "rotateY(0deg)"};
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 80%;
  opacity: ${(props) =>
    props.$transitioning ? 0 : 1}; /* Fade out while transitioning */
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  backface-visibility: hidden;
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
  const [leftShowNext, setLeftShowNext] = useState(false);
  const [rightShowNext, setRightShowNext] = useState(false);

  useEffect(() => {
    const transitionImage = (
      setIndex: React.Dispatch<React.SetStateAction<number>>,
      setTransitioning: React.Dispatch<React.SetStateAction<boolean>>,
      setShowNext: React.Dispatch<React.SetStateAction<boolean>>,
      imagesLength: number
    ) => {
      setTransitioning(true);
      setTimeout(() => {
        setShowNext(true); // Show the next image halfway through rotation
      }, 500); // Start showing the next image halfway through rotation

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imagesLength); // Update to next image
        setTransitioning(false);
        setShowNext(false);
      }, 1000); // Shortened to 1s for smoother transitions
    };

    const leftTimer = setInterval(() => {
      transitionImage(
        setLeftIndex,
        setLeftTransitioning,
        setLeftShowNext,
        leftImages.length
      );
    }, interval);

    const rightTimer = setInterval(() => {
      transitionImage(
        setRightIndex,
        setRightTransitioning,
        setRightShowNext,
        rightImages.length
      );
    }, interval);

    return () => {
      clearInterval(leftTimer);
      clearInterval(rightTimer);
    };
  }, [leftImages.length, rightImages.length, interval]);

  return (
    <BannerContainer>
      <ImageContainer>
        <ImageWrapper $transitioning={leftTransitioning} $direction="left">
          <StyledImage
            src={
              leftImages[
                leftShowNext ? (leftIndex + 1) % leftImages.length : leftIndex
              ]
            }
            alt="Left banner"
          />
        </ImageWrapper>
      </ImageContainer>
      <ImageContainer>
        <ImageWrapper $transitioning={rightTransitioning} $direction="right">
          <StyledImage
            src={
              rightImages[
                rightShowNext
                  ? (rightIndex + 1) % rightImages.length
                  : rightIndex
              ]
            }
            alt="Right banner"
          />
        </ImageWrapper>
      </ImageContainer>
    </BannerContainer>
  );
};

export default Banner;
