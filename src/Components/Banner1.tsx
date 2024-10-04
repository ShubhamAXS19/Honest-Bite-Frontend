type BannerProps = {
  images: string[]; // Array of image URLs
};

const Banner: React.FC<BannerProps> = ({ images }) => {
  return (
    <div
      className="banner-container"
      style={{
        perspective: "1000px",
        width: "100%",
        height: "60vh",
        position: "relative",
      }}
    >
      <div
        className="banner-rectangle"
        style={{
          width: "90%",
          height: "90%",
          position: "relative",
          transformStyle: "preserve-3d",
          animation: "rotateX 12s infinite ease-in-out", // Slowed down and eased
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`banner-side side-${index}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backfaceVisibility: "hidden",
              transform: getTransformForSide(index),
              animationDelay: `${index * 1.5}s`, // Delaying each side's rotation
            }}
          >
            <img
              src={image}
              alt={`side-${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Inline style tag for keyframes and CSS */}
      <style>{`
        @keyframes rotateX {
          0% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(180deg);
          }
          100% {
            transform: rotateX(360deg);
          }
        }
      `}</style>
    </div>
  );
};

// Helper function to determine the transformation for each side of the 3D rectangle
const getTransformForSide = (index: number) => {
  const translateZ = "100px"; // Adjust if necessary
  switch (index) {
    case 0:
      return `translateZ(${translateZ})`;
    case 1:
      return `rotateX(90deg) translateZ(${translateZ})`;
    case 2:
      return `rotateX(180deg) translateZ(${translateZ})`;
    case 3:
      return `rotateX(270deg) translateZ(${translateZ})`;
    default:
      return "";
  }
};

export default Banner;
