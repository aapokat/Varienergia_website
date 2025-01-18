import React from 'react';
import './404.css';
import {Link as RouterLink} from "react-router-dom";

const NotFound = () => {
  return (
    <div className='NotFound'>
        <div className="NFContent">
            <h1 className='NFHeadline'>404 - Not Found</h1>
            <p className='NFPara'>Pahoittelut, tämä sivua ei ole käytettävissä.</p>
            <RouterLink className="BackToHomePage" to='/'>Palaa kotisivulle</RouterLink>
        </div>
    </div>
  );
};

export default NotFound;
