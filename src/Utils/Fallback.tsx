import { RotatingLines } from "react-loader-spinner";

const Fallback = () => {
  return (
    <>
      <RotatingLines
        visible={true}
        height="120"
        width="120"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      ;
    </>
  );
};

export default Fallback;
