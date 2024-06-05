import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import menu_icon from '../Assets/images/menu_icon.png';
import './navbar2.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [pageLinksVisible, setPageLinksVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const togglePageLinks = () => {
    setPageLinksVisible(!pageLinksVisible);
  };

  const handleLinkClick = () => {
    setPageLinksVisible(false);
  };

  return (
    <div className={`navbar ${visible ? 'navVisible' : 'navHidden'}`}>
      <div className="navLogo">
      
      <Link
            className="logoTxt"
            to="landing-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleLinkClick}
          >
            Väri Energia
          </Link>
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
            Alkuun
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
            Tietoa meistä
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
            Toimintamme
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
            Yhteystiedot
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
