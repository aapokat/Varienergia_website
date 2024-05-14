import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './footer.css';
import greyLogo from '../Assets/images/GreyLogo.png';

const Footer = () => {

    return ( 
        <div className="footer">
            <div className="colorSection">
                <div className="someRow">
                    <img src="" alt="Instagram_Icon" className="igImg" />
                    <img src="" alt="Facebook_Icon" className="fbImg" />
                </div>
                <div className="pystyRivit">
                    <div className="1row">
                        <img src={greyLogo} alt="Logo" className="footerLogo" />
                        <p className="footerName">Värienergia Oy</p>
                        <p className="footerAdrs1">jokukatu 123 A</p>
                        <p className="footerAdrs2">90100 Oulu</p>
                        <button className="footerContactBtn">Yhteystiedot</button>
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
                                Landing
                                </Link>
                                <Link
                                className="Link"
                                to="about-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                About
                                </Link>
                                <Link
                                className="Link"
                                to="services-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Services
                                </Link>
                                <Link
                                className="Link"
                                to="contacts-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Contacts
                                </Link>
                            </div>
                    </div>
                    <div className="3row">
                        <p className="rowHead">Ota yhteyttä</p>
                        <p>valikko</p>
                        <p>osote</p>
                        <p>sivu</p>
                    </div>
                </div>
            </div>
            <div className="rights">
                <p className="rightsTxt">Tietosuojaseloste</p>
                <p className="rightsTxt">Verkkosivut Aapon Apu</p>
                <p className="rightsTxt">Copyright © 2024 Värienergia Oy</p>
            </div>
        </div>
     );
};
 
export default Footer;