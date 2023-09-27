import React, { useState, useEffect } from 'react'
import bgcontact from '../assets/bg-pattern-home-3.svg'


const Ready = () => {


    return (
        <>  
          <div className='ready-container'>
                <div className="ready-text">
                    <h2>Ready to get started?</h2>
                    <a href="/contact"><h3 className="small">contact us</h3></a>
                </div>
                <img src={bgcontact} className='bgcontact2' alt=" logo" />

          </div>
            
                  
        </>
      )


}

export default Ready;