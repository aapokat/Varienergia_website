import React from "react";
import './contacts.css';
import teppoKuva from '../Assets/images/TeppoKuva.jpg';
import juhoKuva from '../Assets/images/JuhoKuva.jpg';
import valuGImg from '../Assets/images/valu.png';

const Contacts = () => {
    return ( 
        <div className="contacts" id="contacts-section">
            <div className="CHead">
                <h1 className="contactsHeadline">Yhteystiedot</h1>
            </div>
            <img src={valuGImg} alt="Valu_img" className="valuImg3" />
            <div className="contactsSctns">
                <div className="teppoSctn contactCard">
                    <img src={teppoKuva} alt="Contact_Img" className="contactImg" />
                    <div className="NameSctn">
                        <p className="name">Teppo Ahonen</p>
                        <p className="title">Hallituksen puheenjohtaja</p>
                        <p className="phone">046 689 4259</p>
                    </div>
                </div>
                <div className="middleLine"></div>
                <div className="juhoSctn contactCard">
                    <img src={juhoKuva} alt="Contact_Img" className="contactImg" />
                    <div className="NameSctn">
                        <p className="name">Juho Sallinen</p>
                        <p className="title">Toimitusjohtaja</p>
                        <p className="phone">044 243 6520</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
