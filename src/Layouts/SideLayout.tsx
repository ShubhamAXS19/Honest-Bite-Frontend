import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { FaBars } from "react-icons/fa";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Burger Icon (Visible on small and medium screens) */}
        <div className="lg:hidden p-4">
          <button onClick={toggleSidebar}>
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed inset-0 z-30 w-64 bg-white transition-transform transform lg:relative lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:w-1/6`}
        >
          <Sidebar onClose={closeSidebar} />
        </div>

        {/* Overlay for small and medium screens (when sidebar is open) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
            onClick={closeSidebar}
          ></div>
        )}

        {/* Dashboard (takes the remaining space) */}
        <div className="flex-1 bg-gray-100 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
