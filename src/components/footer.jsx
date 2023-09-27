import React from 'react';
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-twitter.svg'
import facebook from '../assets/icon-facebook.svg'
import linkedin from '../assets/icon-linkedin.svg'




const Footer = () => {
  return (
    <div className="footer-container">
      
      <div className="links">
        <h3>myTeam</h3>

       <div className='link-container'>
        <div className=' quick social-icons'>
            <span> <a href="/" className='footer-link'>home</a></span>
            <span> <a href="/about" className='footer-link'>about</a></span>
        </div>
        <div className="social-icons">
          <span><img src={facebook} className="twitter" alt="facebook" /></span>
          <span> <img src={twitter} className="twitter" alt="twitter" /></span>
          <span><img src={linkedin} className="twitter" alt="linkedin" /></span>
        </div>
       </div>
       
      </div>
      
      <div className="address">
        <p>987 Hillcrest Lane</p>
        <p>Irvine, CA</p>
        <p>California 92714</p>
        <p>Call Us: 949-833-7432</p>
        <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
