import './contact.css';
import cntcImg from '../Assets/images/WhiteImgLogo.png';
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
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
            <h1 className="sorry">Pahoittelut sotuksta mutta tämä ominaisuus on vielä pois käytöstä :)</h1>
            <RouterLink className="HomePageLink" to='/'>Palaa kotisivulle</RouterLink> {/* Add Link to TietosuojakaytantoPage */}
            <h1 className='contactHead'>Kysy tarjous kohteellesi!</h1>
            <div className="downSctn">
                <div className="contactForm">
                    <form action="submit_form.php" method="POST">
                        <p className="formTxt">Nimi:</p>
                        <input className='inputBox' type="text" placeholder='Etu- ja sukunimi' id="name" name="name" required/>
                        <p className="formTxt">Puhelinnumero:</p>
                        <input id='number' className='inputBox' type="text"/>
                        <p  className="formTxt">Sähköposti:</p>
                        <input className='inputBox' type="email" id="email" name="email" required/>
                        <p className="formTxt">Tietoja kohteesta:</p>
                        <p className="formSmallTxt">(Esim kohteen koko, sijainti, ikä, kunto jne)</p>
                        <textarea placeholder='Täytä tiedot tähän' id="message" name="message" required cols="50" rows="7"></textarea>
                        <button type='submit'>Lähetä</button>
                    </form>
                </div>
                <div className="middleLine"></div>
                <div className="callSctn">
                    <form action="Post">
                        <p className="leaveCall">Voit myös jättää numerosi ja me soittelemme teille.</p>
                        <p className="formTxt">Nimi:</p>
                        <input className='inputBox' type="text" placeholder='Etu- ja sukunimi' />
                        <p className="formTxt">Puhelinnumero:</p>
                        <input className='inputBox'  type="text"/>
                    </form>
                    <img src={cntcImg} alt="Logo_image" className="contactImg" />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
        </div>
     );
}
 
export default Contact;