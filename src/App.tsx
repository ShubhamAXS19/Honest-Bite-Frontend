import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreatePost from "./Pages/CreatePost";
import ShareSlice from "./Pages/ShareSlice";
import NearbySpot from "./Pages/NearbySpot";
import Bookmark from "./Pages/Bookmark";
import Layout from "./Layouts/MainLayout";

import EditProfile from "./Pages/EditProfile";
import Trending from "./Pages/Trending";
import Dashboard from "./Pages/Dashboard";
import SideLayout from "./Layouts/SideLayout";
import UserInfo from "./Pages/UserInfo";
// import dotenv from "dotenv";
// dotenv.config();

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/share-a-slice" element={<ShareSlice />} />
          <Route path="/nearby-spot" element={<NearbySpot />} />
          <Route path="/trending" element={<Trending />} />
        </Route>

        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* User route outside Layout */}
        <Route element={<SideLayout />}>
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/analytics" element={<Dashboard />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
