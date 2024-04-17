import React from "react";
import './contacts.css';
import teppoKuva from '../Assets/images/TeppoKuva.jpg';
import juhoKuva from '../Assets/images/JuhoKuva.jpg';


const Contacts = () => {
    return ( 
        <div className="contact" id="contacts-section">
          <h1 className="contactsHeadline">Yhteystiedot</h1>
          <div className="contactsSctns">
              <div className="teppoSctn">
                <img src={teppoKuva} alt="Contact_Img" className="contactImg" />
                <div className="NameSctn">
                    <p className="name">Teppo Ahonen</p>
                    <p className="tittle">Hallituksen puheenjohtaja</p>
                    <p className="phone">046 689 4259</p>
                </div>
              </div>
              <div className="middleLine"></div>
              <div className="juhoSctn">
              <img src={juhoKuva} alt="Contact_Img" className="contactImg" />
                <div className="NameSctn">
                    <p className="name">Juho Sallinen</p>
                    <p className="tittle">Toimitusjohtaja</p>
                    <p className="phone">044 243 6520</p>
                </div>
              </div>
          </div>
        </div>
     );
    }
 
export default Contacts;