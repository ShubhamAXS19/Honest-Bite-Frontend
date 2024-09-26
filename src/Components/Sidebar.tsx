import Button from "./Button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-6">
      <Link to="/edit-profile">
        <Button>Edit Profile</Button>
      </Link>
      <Link to="/Dashboard">
        <Button>Analytics</Button>
      </Link>
      <Button>Logout</Button>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Sidebar;
