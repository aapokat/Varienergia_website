import React from "react";
import './About.css';
import infoImg2 from '../Assets/images/TelineKuva.jpg';
import infoImg3 from '../Assets/images/MaaliPensseli.jpg';
import houseImg from '../Assets/images/WhiteImgLogo.png';
import valuGImg from '../Assets/images/valu.png';
import inffoKuva1 from '../Assets/images/MaaliPensseli2.png';




const About = () => {
    return ( 
        <div className="about" id="about-section">
            <div className="firstSection">
            <div className="aboutHead">
                    <h1 className="aboutHeadline">Yrityksemme</h1>
                    <img src={valuGImg} alt="Valu_img" className="valuImg" />
            </div>
                <p className="aboutTxt">
                    Väri Energia Oy on kahden nuoren miehen perustama maalausyritys.
                    Olemme erikoistuneet talon ulkoverhouksienmaalauksiin,
                    Haluamme tehdä talonmaalauksesta sinulle
                    vaivattoman ja helpon kokemuksen. 
                </p>
            </div>
            <div className="secondSection">
                <div className="chooseSection">
                            
                            <div className="aboutHead">
                                <h1 className="aboutHeadline">Valitse meidät</h1>
                                <img src={valuGImg} alt="Valu_img" className="valuImg2" />
                            </div>
                            <div className="infoSection">
                                <div className="infoWindow">
                                    <h3 className="infoImgTxt">Laatu</h3>
                                    <img src={inffoKuva1} alt="info_img" className="infoImg" />
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