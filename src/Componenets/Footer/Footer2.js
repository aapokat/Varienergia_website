import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import './footer.css';
import greyLogo from '../Assets/images/GreyLogo.png';
import FbImg from '../Assets/images/FbImg.webp';
import IgImg from '../Assets/images/IgImg.svg';

const Footer2 = () => {
    return (
        <div className="footer">
            <div className="someRow">
                <h3 className="someRowName">Väri Energia</h3>
                <div className="someBtns">
                    <p className="FollowTxt">Seuraa meitä:</p>
                    <a href="https://www.facebook.com/profile.php?id=61555843463010" target="_blank" rel="noopener noreferrer">
                        <img src={FbImg} alt="Instagram_Icon" className="SclsImg" />
                    </a>
                    <a href="https://www.instagram.com/varienergia?igsh=MTI5dDVyODR6cnppNw==" target="_blank" rel="noopener noreferrer">
                        <img src={IgImg} alt="Facebook_Icon" className="SclsImg" />
                    </a>
                </div>
            </div>
            <div className="colorSection">
                <div className="pystyRivit">
                    <div className="1row">
                        <img src={greyLogo} alt="Logo" className="footerLogo" />
                        <p className="footerName">Väri Energia Oy</p>
                        <p className="footerAdrs">Höyhtykuja 17</p>
                        <p className="footerAdrs">90910 Kontio</p>
                    </div>
                    <div className="2row">
                        <p className="rowHead">Siirry Sivulla</p>
                        <div className="footerNav">
                            <RouterLink className="Link" to="/#landing-section">Alkuun</RouterLink>
                            <RouterLink className="Link" to="/#about-section">Tietoa meistä</RouterLink>
                            <RouterLink className="Link" to="/#services-section">Toimintamme</RouterLink>
                            <RouterLink className="Link" to="/#feedback-section">Kohteitamme</RouterLink>
                            <RouterLink className="Link" to="/#contacts-section">Yhteystiedot</RouterLink>
                        </div>
                    </div>
                    <div className="3row">
                        <p className="rowHead">Ota yhteyttä</p>
                    </div>
                </div>
            </div>
            <div className="rights">
                <RouterLink className="rightsTxt" to="/Tietosuojaseloste">Tietosuojaseloste</RouterLink>
                <RouterLink className="rightsTxt" to="/Kayttoehdot">Käyttöehdot</RouterLink>
                <p className="rightsTxt">Verkkosivut Aapon Apu</p>
                <p className="rightsTxt">Copyright © 2024 Väri Energia Oy</p>
            </div>
        </div>
    );
};

export default Footer2;
