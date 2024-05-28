import React from "react";
import './Services.css';
import headImg from '../Assets/images/valu2.png';
import icon1 from '../Assets/images/DealImg.svg';
import icon2 from '../Assets/images/SkrapImg.svg';
import icon3 from '../Assets/images/WashImg.svg';
import icon4 from '../Assets/images/PohjaImg.svg';
import icon5 from '../Assets/images/PintImg.svg';
import icon6 from '../Assets/images/CheckImg.svg';

const Services = () => {
    return (  
        <div className="services" id="services-section">
            <div className="servicesHead">
                <div className="SHeadTxt">
                    <h1 id="SheadTxt" className="servicesHeadline">Miten toimimme</h1>
                    <h2 id="SheadTxt" className="servicesHeadline2">Työnvaiheet:</h2>
                </div>
                <img src={headImg} alt="ValuTausta" className="SValuImg" />
            </div>
            
            <div className="serviceLower">
                <div className="serviceParts">
                    <div className="serviceLine">
                        <img src={icon1} alt="ServiceIcon" className="ServiceIcon" />
                        <p className="service">Urakasta sopiminen</p>
                    </div>
                    <div className="serviceLine">
                        <img src={icon2} alt="ServiceIcon" className="ServiceIcon" />
                        <p className="service">Vanhan maalin rappaus</p>
                    </div>
                    <div className="serviceLine">
                        <img src={icon3} alt="ServiceIcon" className="ServiceIcon" />
                        <p className="service">Homepesu</p>
                    </div>
                </div>
                <div className="serviceParts">
                <div className="serviceLine">
                        <img src={icon4} alt="ServiceIcon" className="ServiceIcon" />
                        <p className="service">Pohjamaalaus</p>
                    </div>
                    <div className="serviceLine">
                        <img src={icon5} alt="ServiceIcon" className="ServiceIcon" />
                        <p className="service">Pintamaalaus</p>
                    </div>
                    <div className="serviceLine">
                        <img src={icon6} alt="ServiceIcon" className="ServiceIcon" />
                        <p className="service">Lopputarkastus</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Services;