import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import person from '../assets/icon-person.svg'
import cog from '../assets/icon-cog.svg'
import chart from '../assets/icon-chart.svg'
import MyForm from '../components/form'
import bgcontact from '../assets/bg-pattern-contact-2.svg'
import Footer from '../components/footer'
const Contact = () => {


    return (
        <>  
            <Navbar/>
            <div className='contact-container'>
            <img src={bgcontact} className='bgcontact' alt=" logo" />

                
                <div className='contact-text'>
                    <h2>Contact </h2>
                    <h2 className='red-color'>Ask us about</h2>

                    <div className='contact-list'>
                      <div className='contact-list-item'>
                        <div class="column1"><img src={person} className='bgnew' alt="logo" /></div>
                        <div class="column2"> <p>The quality of our talent network</p></div>
                      </div>  


                      <div className='contact-list-item'>
                        <div class="column1"><img src={cog} className='bgnew' alt="logo" /></div>
                        <div class="column2"> <p>Usage & Implementation of our software</p></div>
                      </div>  

                      <div className='contact-list-item'>
                        <div class="column1"><img src={chart} className='bgnew' alt="logo" /></div>
                        <div class="column2"> <p>How we help drive growth & innovation</p></div>
                      </div>  
                    </div>

                </div>
               
                <div className='form-container'>

                 <MyForm/>
                </div>
                
            </div>
         
            <Footer/>
        </>
      )


}

export default Contact;