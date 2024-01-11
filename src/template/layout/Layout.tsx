import { Outlet } from "react-router-dom";
import Navbar from "src/atoms/navbar/Navbar";
import Spacer from "src/atoms/spacer/Spacer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Spacer height="5000px" />
    </>
  );
};

export default Layout;
