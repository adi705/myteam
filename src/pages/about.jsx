import React, { useState, useEffect } from 'react'
import Navbar from '../pages/navbar';
import bg from '../assets/bg-pattern-home-2.svg'

import bg2 from '../assets/bg-pattern-about-1-mobile-nav-1.svg'
import bg3 from '../assets/bg-pattern-about-2-contact-1.svg'
import bg4 from '../assets/bg-pattern-about-4.svg'
import bg5 from '../assets/bg-pattern-home-5.svg'


import Directors from '../components/directors';
import Clients from '../components/clients';
import Footer from '../components/footer';
import Ready from '../components/ready';

const About = () => {


    return (
        <>  
            <Navbar/>
            <div className='about-container'>
            <img src={bg2} className="bg2-about" alt="React logo" />
                
                <div className='about-text'>
                    <div className='about-heading'>
                       <h1>About</h1> 
                    </div>
                    <div className='about-desc'>
                     <p>  
                    We help companies build dynamic teams made up of top global talent. 
                    Using our network of passionate professionals we drive innovation 
                    and deliver incredible outcomes. Talented, diverse teams shape the 
                    best products and experiences. We’ll bring those teams to you.
                     </p>
                    </div>
                </div>


            </div>
            
            <Directors/>
            <Clients/>
            <Ready/>
            <Footer/>
        </>
      )


}

export default About;