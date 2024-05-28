import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import './footer.css';
import greyLogo from '../Assets/images/GreyLogo.png';
import FbImg from '../Assets/images/FbImg.webp';
import IgImg from '../Assets/images/IgImg.svg';


const Footer = () => {

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
                                <Link
                                className="Link"
                                to="landing-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Alkuun
                                </Link>
                                <Link
                                className="Link"
                                to="about-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Tietoa meistä
                                </Link>
                                <Link
                                className="Link"
                                to="services-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Toimintamme
                                </Link>
                                <Link
                                className="Link"
                                to="contacts-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Yhteystiedot
                                </Link>
                            </div>
                    </div>
                    <div className="3row">
                        <p className="rowHead">Ota yhteyttä</p>
                       
                    </div>
                </div>
            </div>
            <div className="rights">
                <RouterLink className="rightsTxt" to='/tietosuojakaytantoPage'>Tietosuojakäytäntö</RouterLink> {/* Add Link to TietosuojakaytantoPage */}
                <p className="rightsTxt">Verkkosivut Aapon Apu</p>
                <p className="rightsTxt">Copyright © 2024 Väri Energia Oy</p>
            </div>
        </div>
     );
};
 
export default Footer;