import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreatePost from "./Pages/CreatePost";
import ShareSlice from "./Pages/ShareSlice";
import NearbySpot from "./Pages/NearbySpot";
import Bookmark from "./Pages/Bookmark";
import Layout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import EditProfile from "./Pages/EditProfile";
import Trending from "./Pages/Trending";
import Dashboard from "./Pages/Dashboard";
import SideLayout from "./Layouts/SideLayout";
const UserInfo = React.lazy(() => import("./Pages/UserInfo"));
import EditPost from "./Pages/EditPost";
import NotFound from "./Components/NotFound";
import Test from "./Components/Test";
import Fallback from "./Utils/Fallback";
import ErrorBoundary from "./Utils/ErrorBoundary";

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
          <Route path="/edit-post" element={<EditPost />} />
          <Route path="/test" element={<Test />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* User route outside Layout */}
        <Route element={<SideLayout />}>
          <Route path="/edit-profile" element={<EditProfile />} />
          {/* <Route path="/userInfo" element={<UserInfo />} /> */}
          <Route
            path="/userInfo"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Fallback />}>
                  <UserInfo />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route path="/analytics" element={<Dashboard />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
