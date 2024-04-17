import React from "react";
import './About.css';
import infoImg1 from '../Assets/images/LimeLogo.png';
import infoImg2 from '../Assets/images/LimeLogo.png';
import infoImg3 from '../Assets/images/LimeLogo.png';
import houseImg from '../Assets/images/WhiteImgLogo.png';



const About = () => {
    return ( 
        <div className="about" id="about-section">
            <div className="firstSection">
                <h1 className="aboutHeadline">Yrityksemme</h1>
                <img src="" alt="" className="headlineImg1" />
                <img src="" alt="" className="headlineImg2" />
                <p className="aboutTxt">
                    Väri Energia Oy on kahden nuoren miehenperustama maalausyritys. <br />
                        Olemme erikoistuneet talon ulkoverhouksienmaalauksiin, <br />
                            Haluamme tehdä talonmaalauksesta sinulle <br />
                                vaivattoman ja helponkokemuksen. 
                </p>
            </div>
            <div className="secondSection">
                <div className="chooseSection">
                            <h1 className="chooseHeadline">Valitse meidät</h1>
                            <div className="infoSection">
                                <div className="infoWindow">
                                    <h3 className="infoImgTxt">Laatu</h3>
                                    <img src={infoImg1} alt="info_img" className="infoImg" />
                                    <p className="infoTxt">Jotain tekstiä meidän laadusta että kuinka hyvää se on jne</p>
                                </div>
                                <div className="infoWindow">
                                    <h3 className="infoImgTxt">Energia</h3>
                                    <img src={infoImg2} alt="info_img" className="infoImg" />
                                    <p className="infoTxt">Jotain tekstiä meidän laadusta että kuinka hyvää se on jne</p>
                                </div>
                                <div className="infoWindow">
                                    <h3 className="infoImgTxt">Kulutus</h3>
                                    <img src={infoImg3} alt="info_img" className="infoImg" />
                                    <p className="infoTxt">Jotain tekstiä meidän laadusta että kuinka hyvää se on jne</p>
                                </div>
                            </div>
                </div>
                <div className="houseImgSection">
                    <img src={houseImg} alt="House_img" className="houseImg" />
                </div>
            </div>
        </div>
     );
}
 
export default About;