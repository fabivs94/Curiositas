import NavBar from "./NavBar";
import { Outlet } from "react-router";
import './sharedlayout.css'
/* import Footer from '../assets/Footer'; */


const SharedLayout = () => {
 
  return (
    <div
      className="container">
      <NavBar />
      <Outlet />
      {/* <Footer />  */}
    </div>
  );
};

export default SharedLayout;