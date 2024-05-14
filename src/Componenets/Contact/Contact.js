import './contact.css';
import cntcImg from '../Assets/images/WhiteImgLogo.png';

const Contact = () => {
    return ( 
        <div className="contact">
            <h1 className='contactHead'>Kysy tarjous kohteellesi!</h1>
            <div className="downSctn">
                <div className="contactForm">
                    <form action="Post">
                        <p className="formTxt">Nimi:</p>
                        <input className='inputBox' type="text" placeholder='Etu- ja sukunimi' />
                        <p className="formTxt">Puhelinnumero:</p>
                        <input id='number' className='inputBox' type="text"/>
                        <p  className="formTxt">Sähköposti:</p>
                        <input id='email' className='inputBox' type="text"/>
                        <p className="formTxt">Tietoja kohteesta:</p>
                        <p className="formSmallTxt">(Esim kohteen koko, sijainti, ikä, kunto jne)</p>
                        <textarea placeholder='Täytä tiedot tähän' name="infoBox" id="infoBox" cols="50" rows="7"></textarea>
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
        </div>
     );
}
 
export default Contact;