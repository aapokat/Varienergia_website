import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import menu_icon from '../Assets/images/menu_icon.png';
import './navbar.css';

const Navbar2 = () => {
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
        <RouterLink className="logoTxt" to='/'>Väri Energia</RouterLink> {/* Add Link to TietosuojakaytantoPage */}
       
      </div>
      <img className="menuIcon" src={menu_icon} alt="menu_icon" onClick={togglePageLinks} />
      <div className={`pageLinks ${pageLinksVisible ? 'pageLinksVisible' : 'pageLinksHidden'}`}>
        <div className="linkSection">
          <RouterLink
            className="pageLink"
            to="/#landing-section"
            onClick={handleLinkClick}
          >
            Alkuun
          </RouterLink>
          <RouterLink
            className="pageLink"
            to="/#about-section"
            onClick={handleLinkClick}
          >
            Tietoa meistä
          </RouterLink>
          <RouterLink
            className="pageLink"
            to="/#services-section"
            onClick={handleLinkClick}
          >
            Toimintamme
          </RouterLink>
          <RouterLink
            className="pageLink"
            to="/#contacts-section"
            onClick={handleLinkClick}
          >
            Yhteystiedot
          </RouterLink>
        </div>
        <div className="menuimgsection">
          <img className="menuIcon2" src={menu_icon} alt="menu_icon" onClick={togglePageLinks} />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
