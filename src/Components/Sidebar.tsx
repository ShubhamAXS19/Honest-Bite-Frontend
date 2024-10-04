// import Button from "./Button";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-6">
      <Link to="/edit-profile">
        <Button variant="contained" sx={{ p: 2, width: "10vw", my: 2 }}>
          Edit Profile
        </Button>
      </Link>
      <Link to="/analytics">
        <Button variant="contained" sx={{ p: 2, width: "10vw", my: 2 }}>
          Analytics
        </Button>
      </Link>
      <Link to="/bookmark">
        <Button variant="contained" sx={{ p: 2, width: "10vw", my: 2 }}>
          Bookmark
        </Button>
      </Link>

      <Link to="/">
        <Button variant="contained" sx={{ p: 2, width: "10vw", my: 2 }}>
          Back to Home
        </Button>
      </Link>
      <Button variant="contained" sx={{ p: 2, width: "10vw", my: 2 }}>
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
