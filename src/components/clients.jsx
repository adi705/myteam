import React, { useState, useEffect } from 'react'
import jakarta from '../assets/logo-jakarta-post.png'
import guardian from '../assets/logo-the-guardian.png'
import radar from '../assets/logo-tech-radar.png'
import gadgets from '../assets/logo-gadgets-now.png'
import verge from '../assets/logo-the-verge.png'

import bg5 from '../assets/bg-pattern-home-5.svg'






const Clients = () => {


    return (
        <>
          <div className='client-container'>
            <h1>Some of our clients</h1>

            <div className='client-list'>
            <img src={jakarta}  alt="logo" />
            <img src={guardian}  alt="logo" />
            <img src={radar}  alt=" logo" />
            <img src={gadgets}  alt="j logo" />
            <img src={verge}  alt=" logo" />





            </div>
            
            <img src={bg5} className="bg5-client" alt="logo" />

          </div>
            
        </>
      )


}

export default Clients;