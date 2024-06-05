import React from "react";
import './About.css';
import infoImg2 from '../Assets/images/IkkunaKuva1.0.png';
import infoImg3 from '../Assets/images/MaaliPensseli1.0.jpg';
import houseImg from '../Assets/images/WhiteImgLogo.png';
import valuGImg from '../Assets/images/valu.png';
import inffoKuva1 from '../Assets/images/MaaliPensseli2.0.png';




const About = () => {
    return ( 
        <div className="about" id="about-section">
            <div className="firstSection">
            <div className="aboutHead">
                    <h1 className="aboutHeadline">Yrityksemme</h1>
                 
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
                                
                            </div>
                            <div className="infoSection">
                                <div className="infoWindow">
                                    <h3 className="infoImgTxt">Laadukas</h3>
                                    <img src={inffoKuva1} alt="info_img" className="infoImg" />
                                    <p className="infoTxt1">Vuosien <br /> työkokemus eri maalausyrityksillä.</p>
                                </div>
                                <div className="infoWindow">
                                    <h3 className="infoImgTxt">Helppo</h3>
                                    <img src={infoImg2} alt="info_img" className="infoImg" />
                                    
                                        <p className="infoTxt2">Yksinkertainen yrityksen rakenne. Kiinteä ja selkeä urakan hinta. Koko toimintamme perustuu tyytyväisiin asiakkaisiin sekä työntekiöihin.</p>
                                    
                                </div>
                                <div className="infoWindow">
                                    <h3 className="infoImgTxt">Luotettava</h3>
                                    <img src={infoImg3} alt="info_img" className="infoImg" />
                                    <p className="infoTxt3">Kannamme vastuun kaikista työmaalla tapahtuvista asioista, sekä annamme 24kk takuun kaikelle meidän aiheuttamalle vahingolle.</p>
                                </div>
                            </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default About;