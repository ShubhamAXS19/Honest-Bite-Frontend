import Button from "./Button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-6">
      <Link to="/edit-profile">
        <Button>Edit Profile</Button>
      </Link>
      <Link to="/analytics">
        <Button>Analytics</Button>
      </Link>
      <Link to="/bookmark">
        <Button>Bookmark</Button>
      </Link>

      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
      <Button>Logout</Button>
    </div>
  );
};

export default Sidebar;
