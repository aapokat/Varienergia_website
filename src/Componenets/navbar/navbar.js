import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import menu_icon from '../Assets/images/menu_icon.png';
import './navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  // Function to handle scroll event
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false);
  };

  return (
    <div className={`navbar ${visible ? "navVisible" : "navHidden"}`}>
      <div className="navLogo">
        <p className="logoTxt">Väri Energia</p>
      </div>
      <div className="navBurgerMenu">
        <div className={`pageLinks ${showLinks ? 'show' : ''}`}>
          <Link
            className="pageLink"
            to="landing-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Landing
          </Link>
          <Link
            className="pageLink"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className="pageLink"
            to="services-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            className="pageLink"
            to="contacts-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Contacts
          </Link>
        </div>
        <img className="menuIcon" src={menu_icon} alt="menu_icon" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
