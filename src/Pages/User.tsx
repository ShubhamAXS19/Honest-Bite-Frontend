import Sidebar from "../Components/Sidebar";
import Dashboard from "./Dashboard";

const User = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar with custom width */}
        <div className="w-1/4 md:w-1/3 lg:w-1/6">
          <Sidebar />
        </div>

        {/* Dashboard (takes the remaining space) */}
        <div className="flex-1 bg-gray-100">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default User;
