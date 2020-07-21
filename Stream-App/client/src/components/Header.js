import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div>
    <hr/>
    <div style={{ marginLeft: '80px' }}>
      <Link to='/' className='item'>
      streamy
      </Link>
      <div style={{float:'right', marginRight: '80px',}}>
      <Link to='/' className='item'>
      ALL streams
      </Link>
      <GoogleAuth/>
      </div>
    </div>
    <br/>
    <hr/>
    </div>
  );
};

export default Header;
