import NotFoundImg from "../../assets/404-error-page-found-with-donut_114341-54.avif";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <img src={NotFoundImg} alt="" />
      <Link to="/">
        <Button variant="contained" sx={{ p: 2, width: "10vw", my: 2 }}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
