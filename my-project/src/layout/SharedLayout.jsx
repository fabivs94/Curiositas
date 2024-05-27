import NavBar from "./NavBar";
import { Outlet } from "react-router";
import './sharedlayout.css'


const SharedLayout = () => {
 
  return (
    <div
      className="container">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;