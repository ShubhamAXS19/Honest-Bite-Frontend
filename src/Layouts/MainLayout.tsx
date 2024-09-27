import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import BottomMenu from "../Components/BottomMenu";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <BottomMenu />
    </div>
  );
};

export default Layout;
