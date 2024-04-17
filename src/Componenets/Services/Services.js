import React from "react";
import './Services.css';
import servicesBGImg from '../Assets/images/MaaliPensseli2.png';

const Services = () => {
    return (  
        <div className="services">
            <div className="servicesHead">
                <h1 className="servicesHeadline">Miten toimimme</h1>
                <h2 className="servicesHeadline2">Työnvaiheet:</h2>
            </div>
            <div className="serviceLower">
                <div className="serviceParts">
                    <p className="service">Urakasta sopiminen</p>
                    <p className="service">Vanhan maalin rappaus</p>
                    <p className="service">Homepesu</p>
                </div>
                <div className="serviceParts">
                    <p className="service">Pohjamaalaus</p>
                    <p className="service">Pintamaalaus</p>
                    <p className="service">Lopputarkastus</p>
                </div>
            </div>
        </div>
    );
}
 
export default Services;