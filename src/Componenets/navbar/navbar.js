import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import menu_icon from '../Assets/images/menu_icon.png';
import './navbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [pageLinksVisible, setPageLinksVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Function to toggle page links visibility
  const togglePageLinks = () => {
    setPageLinksVisible(!pageLinksVisible);
  };

  // Function to hide page links when a link is clicked
  const handleLinkClick = () => {
    setPageLinksVisible(false);
  };

  return (
    <div className={`navbar ${visible ? 'navVisible' : 'navHidden'}`}>
      <div className="navLogo">
        <p className="logoTxt">Väri Energia</p>
      </div>
      <img className="menuIcon" src={menu_icon} alt="menu_icon" onClick={togglePageLinks} />
      <div className={`pageLinks ${pageLinksVisible ? 'pageLinksVisible' : 'pageLinksHidden'}`}>
        
          <div className="linkSection">
              <Link
                className="pageLink"
                to="landing-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
              >
                Contacts
              </Link>
          </div>
        <div className="menuimgsection">
          <img className="menuIcon2" src={menu_icon} alt="menu_icon" onClick={togglePageLinks} />
        </div>
        </div>
      
    </div>
  );
};

export default Navbar;
