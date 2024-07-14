import Header from "../Components/Header";
import BottomMenu from "../Components/BottomMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <BottomMenu />
    </div>
  );
};

export default Layout;
