import React, { useState, useEffect } from 'react'
import kady from '../assets/avatar-kady.jpg'
import aiysha from '../assets/avatar-aiysha.jpg'
import arthur from '../assets/avatar-arthur.jpg'
import bg4 from '../assets/bg-pattern-home-4-about-3.svg'
import bg5 from '../assets/bg-pattern-home-5.svg'


const Testimonials = () => {


    return (
        <>
          <div className='testimonials-container'>
            <img src={bg4} className="bg4" alt="" />

            <div className='testimonials-heading'>
                <h2>Delivering real results for top companies. 
                    Some of our success stories.</h2>
             </div>

             <div className='testimonial-list'>
                <div className='testimonial-item'>
                    <p>
                    “The team perfectly fit the specialized skill set required. They focused 
                    on the most essential features helping us launch the platform eight months 
                    faster than planned.”
                    </p>
                    <h3>Kady Baker</h3>
                     <p>Product Manager at Bookmark</p>
                     <img src={kady} className="person-icon" alt="" />

                </div>
            
                <div className='testimonial-item'>
                    <p>
                    “We needed to automate our entire onboarding process. The team came in and 
                        built out the whole journey. Since going live, user retention has gone 
                        through the roof!”
                    </p>
                    <h3>Aiyashsa Ryan</h3>
                     <p>CEO, Manage</p>
                     <img src={aiysha} className="person-icon" alt="" />

                </div>

                <div className='testimonial-item'>
                    <p>
                    “Amazing. Our team helped us build an app that delivered a new experience for 
                    hiring a physio. The launch was an instant success with 100k downloads in the 
                    first month.”
                    </p>
                    <h3>Arthur Clarke</h3>
                     <p>Co-founder of MyPhysio</p>
                     <img src={arthur} className="person-icon" alt="" />

                </div>
            
            
             </div>
             <img src={bg5} className="bg5" alt="" />

          </div>
            
        </>
      )


}

export default Testimonials;