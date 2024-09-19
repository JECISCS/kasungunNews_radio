import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Styles/NavBar.css";

function Navbar() {
  const navRef = useRef();
  const showNav_bar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>logo</h3>
      <nav ref={navRef}>
        <Link to="/news">News</Link> {/* Link to the News page */}
        <a href="#footer-contact">Contact</a> {/* Scrolls to the contact section in the footer */}
        <Link to="/updates">Updates</Link> {/* Link to the Updates section on the News page */}
        <Link to="/">Home</Link> {/* Link to the Home page */}
        <button className="nav_close_btn" onClick={showNav_bar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button className="nav_btn" onClick={showNav_bar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}

export default Navbar;
