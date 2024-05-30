import NavBar from "./NavBar";
import { Outlet } from "react-router";
import './sharedlayout.css';
import Footer from '../assets/Footer';

const SharedLayout = () => {
  return (
    <div id="root" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;