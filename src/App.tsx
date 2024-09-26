import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreatePost from "./Pages/CreatePost";
import ShareSlice from "./Pages/ShareSlice";
import NearbySpot from "./Pages/NearbySpot";
import Bookmark from "./Pages/Bookmark";
import Layout from "./Layouts/Layout";
import User from "./Pages/User";
// import dotenv from "dotenv";
// dotenv.config();

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/share-a-slice" element={<ShareSlice />} />
          <Route path="/nearby-spot" element={<NearbySpot />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Route>

        {/* User route outside Layout */}
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
