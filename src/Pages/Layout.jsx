import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";

function Layout() {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  );
}

export default Layout;
Layout;
