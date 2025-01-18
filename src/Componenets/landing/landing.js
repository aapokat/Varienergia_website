import React from 'react';
import './landing.css';
import landingImg from '../Assets/images/AloitusKuva2.jpg'; // Import the background image
import overlayImg1 from '../Assets/images/MixLogo.svg';

const Landing = () => {
    return (
        <div
            className="landing"
            id="landing-section"
            style={{
                backgroundImage: `url(${landingImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'black',
                height: 'calc(45vw + 6.4vw)', // Add enough height to account for the navbar
                boxShadow: '0.1rem 0.1rem 2rem rgb(25, 25, 25)',
            }}
        >
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
