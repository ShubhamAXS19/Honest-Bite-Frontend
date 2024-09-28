import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar with custom width */}
        <div className="w-1/4 md:w-1/3 lg:w-1/6">
          <Sidebar />
        </div>

        {/* Dashboard (takes the remaining space) */}
        <div className="flex-1 bg-gray-100 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
