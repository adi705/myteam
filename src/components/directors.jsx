import React, { useState, useEffect } from 'react'
import nikita from '../assets/avatar-nikita.jpg'
import christian from '../assets/avatar-christian.jpg'
import cruz from '../assets/avatar-cruz.jpg'
import drake from '../assets/avatar-drake.jpg'



import bg4 from '../assets/bg-pattern-about-4.svg'
import bg5 from '../assets/bg-pattern-about-1-mobile-nav-1.svg'




const Directors = () => {


    return (
        <>
          
          <div className='directors-container'>
          <img src={bg4} className='director-bg' alt="React logo" />
          <img src={bg5} className='director-bg-tl' alt="React logo" /> 
          
            <div className='directorsheading'>
                <h1>Meet the directors</h1>
            </div>
            <div className='directors-list'>
                <div className='director-item'>
                    <img src={nikita} className="person-icon" alt="" />
                    <h3 className='red-color'>Nikita Marks</h3>
                    <p>Founder & CEO</p>
                </div>

                <div className='director-item'>
                    <img src={cruz} className="person-icon" alt="" />
                    <h3 className='red-color'>Cruz Wood</h3>
                    <p>Co-Founder & COO</p>
                </div>

                <div className='director-item'>
                    <img src={drake} className="person-icon" alt="" />
                    <h3 className='red-color'>Drake Schultz</h3>
                    <p>Co-Founder & CTO</p>
                </div>

                <div className='director-item'>
                    <img src={christian} className="person-icon" alt="" />
                    <h3 className='red-color'>Christian Blake</h3>
                    <p>Business Development Lead</p>
                </div>

               
            </div>
         
         </div>
            
        </>
      )


}

export default Directors;