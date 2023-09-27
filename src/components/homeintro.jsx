import React, { useState, useEffect } from 'react'
import Navbar from '../pages/navbar';
import bg from '../assets/bg-pattern-home-2.svg'
import bg43 from '../assets/bg-pattern-home-4-about-3.svg'


const HomeIntro = () => {


    return (
        <>
          <Navbar/>
          
          <div className='introContainer'>
         
            <div className='introText'>
                <div className='introText-title'>
                      <h1>Find the best <span className='red-color'>talent</span></h1>
                </div>
                <div className='introText-info'>
                    <p>Finding the right people and building high performing teams can 
                        be hard. Most companies aren’t tapping into the abundance of global 
                        talent. We’re about to change that for better.</p>
                </div>    
                
                
            </div>
            <img src={bg} className="bg" alt="React logo" />
            <img src={bg43} className="bg43" alt="React logo" />

          </div>
          
          

            
        </>
      )


}

export default HomeIntro;