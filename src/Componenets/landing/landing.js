import React, { useState } from 'react';
import './landing.css';
import landingImg from '../Assets/images/landingImg.png';
import overlayImg1 from '../Assets/images/GreyLogo.png';
import overlayImg2 from '../Assets/images/LimeLogo.png';

const Landing = () => {
  const [showPopUp, setShowPopUp] = useState(true);

  const handleClosePopUp = () => {
    setShowPopUp(false); // Update state to hide the popup
  };

  return (
    <div className="landing" id="landing-section">
      {showPopUp && (
        <div className="popUp">
          <h1 className="popUpHeadline">HUOM!</h1>
          <p className="popUpTxt">
            Hei, jos eksyit tälle sivulle huomautan että sivut ovat vielä valmistuksessa ja ne eivät
            toimi tai näytä täysin oikealta. Sivut valmistuvat piakkoin.
          </p>
          <button onClick={handleClosePopUp} className="popUpBtn">
            Sulje ikkuna tästä
          </button>
        </div>
      )}
      <div className="cntrLanding">
        <div className="overlayContent">
          <img src={overlayImg1} alt="GreyLogo" className="overlayImg1" />
          <img src={overlayImg2} alt="LimeLogo" className="overlayImg2" />
          <h1 className="overlayTxt">Maalia mahantäydeltä</h1>
        </div>
      </div>
      <img className="landingImg" src={landingImg} alt="landing_Img" />
    </div>
  );
};

export default Landing;
