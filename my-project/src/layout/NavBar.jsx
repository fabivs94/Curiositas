import { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

export default function NavBar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <img className="logo" src="https://i.ibb.co/JrZp2K4/Curiositas-logo.png" alt="blog logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/articles" className="nav-link">Articles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end">
          <NavLink
            to="/login"
            className={`btn btn-success rounded-pill me-3 ${active ? "active" : ""} login-btn`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={() => setActive(true)}
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}