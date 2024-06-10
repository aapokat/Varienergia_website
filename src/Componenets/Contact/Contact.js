import './contact.css';
import cntcImg from '../Assets/images/WhiteImgLogo.png';
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('https://varienergia.fi/submit_form.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData),
        })
          .then(response => response.text())
          .then(result => {
            console.log(result);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };

    return ( 
        <div className="contact">
            
            <h1 className='contactHead'>Kysy tarjous kohteellesi!</h1>
            <div className="downSctn">
                <div className="contactForm">
                    <form onSubmit={handleSubmit}>
                        <p className="formTxt">Nimi:</p>
                        <input type="text" name="name" className='inputBox' placeholder='Etu- ja sukunimi' value={formData.name} onChange={handleChange} required />
                        <p className="formTxt">Puhelinnumero:</p>
                        <input id='phone' name='phone' className='inputBox' type="text" value={formData.phone} onChange={handleChange} required/>
                        <p  className="formTxt">Sähköposti:</p>
                        <input type="email" name="email" className='inputBox' value={formData.email} onChange={handleChange} required />
                        <p className="formTxt">Tietoja kohteesta:</p>
                        <p className="formSmallTxt">(Esim kohteen koko, sijainti, ikä, kunto jne)</p>
                        <textarea className='formTxtArea' placeholder='Täytä tiedot tähän' id='message' name="message" value={formData.message} onChange={handleChange} required cols="50" rows="7"></textarea>
                        <br />
                        <button className='sendBtn' type='submit'>Lähetä</button>
                    </form>
                </div>
                <div className="middleLine"></div>
                <div className="callSctn"> 
                
                   
                    <img src={cntcImg} alt="Logo_image" className="contactImg" />
                </div>
            </div>

            
        </div>
     );
}
 
export default Contact;