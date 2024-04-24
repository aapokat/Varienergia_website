import React from 'react';
import './404.css';

const NotFound = () => {
  return (
    <div className='NotFound'>
        <div className="NFContent">
            <h1 className='NFHeadline'>404 - Not Found</h1>
            <p className='NFPara'>Pahoittelut, tämä sivua ei ole käytettävissä.</p>
            <p className='NFPara2'>Palaa etusivulle tästä <link rel="stylesheet" href="" /></p>
        </div>
    </div>
  );
};

export default NotFound;