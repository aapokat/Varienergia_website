import React from "react";
import './FloatBtn.css';
import PhoneIcon from '../Assets/images/phoneIcon.png';
import { Link as RouterLink } from "react-router-dom";

const FloatBtn = () => {
    return ( 
        <div className="floatBtn">
            <div className="floatBtnImg">
                <img src={PhoneIcon} alt="Button_Img" className="btnImg" />
            </div>
            <div className="openFloatBtn">
                
                <RouterLink className="ContactLink" to='Contact'>Ota yhteyttä täältä!</RouterLink>
            </div>  
        </div>
     );
}
 
export default FloatBtn;