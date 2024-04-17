import React from 'react';
import './404.css';

const NotFound = () => {
  return (
    <div className='NotFound'>
        <div className="NFContent">
            <h1 className='NFHeadline'>404 - Not Found</h1>
            <p className='NFPara'>Sorry, the page you are looking for does not exist.</p>
        </div>
    </div>
  );
};

export default NotFound;