import React from "react";
import './FloatBtn.css';
import PhoneIcon from '../Assets/images/phoneIcon.png';

const FloatBtn = () => {
    return ( 
        <div className="floatBtn">
            <div className="floatBtnImg">
                <img src={PhoneIcon} alt="Button_Img" className="btnImg" />
            </div>
            <div className="openFloatBtn">
                <p className="btnTxt">Ota yhteyttä täältä!</p>   
            </div>  
        </div>
     );
}
 
export default FloatBtn;