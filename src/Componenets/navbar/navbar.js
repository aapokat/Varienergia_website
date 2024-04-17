import React, {useState} from "react";
import menu_icon from '../Assets/images/menu_icon.png';
import './navbar.css';



const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="navbar">
      <div className="navLogo">
        <p className="logoTxt">Väri Energia</p>
      </div>
      <div className="navBurgerMenu">
        <div className={`pageLinks ${showLinks ? 'show' : ''}`}>
          <div className="pageLink">Alasivu</div>
          <div className="pageLink">Alasivu</div>
          <div className="pageLink">Alasivu</div>
        </div>
        <img className="menuIcon" src={menu_icon} alt="menu_icon" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
