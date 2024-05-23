import React, { useState } from 'react';
import './landing.css';
import landingImg from '../Assets/images/landingImg.png';
import overlayImg1 from '../Assets/images/MixLogo.svg';
import overlayImg2 from '../Assets/images/LimeLogo.png';

const Landing = () => {


  return (
    <div className="landing" id="landing-section">
      <div className="overlayContent">
        <div className="cntr">
          <img src={overlayImg1} alt="MixLogo" className="overlayImg1" />
          <h1 className="overlayTxt">Maalia mahantäydeltä</h1>
      </div>
      </div>
    
    </div>
  );
};

export default Landing;
