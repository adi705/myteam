import React, { useState, useEffect } from 'react'
import person from '../assets/icon-person.svg'
import cog from '../assets/icon-cog.svg'
import chart from '../assets/icon-chart.svg'
import bg3 from '../assets/bg-pattern-home-3.svg'

const HomeFeatures = () => {

    return (
        <>  
          <div className='feature-container'>
            <img src={bg3} className="bg-3" alt="" />

            
            <div className='feature-heading'>
                <h2> Build and manage teams like no one else.</h2>
            </div>

            <div className='feature-list'>
                <div className='feature-item'>
                    <div className='feature-icon'>
                        <img src={person} className="bgnew" alt="" />
                    </div>
                    <div className='feature-info'>
                        <div className='feature-title'>
                            <h3 className='red-color'>Experienced Individuals</h3>
                        </div>
                        <div className='feature-desc'>
                            <p>Our network is made up of highly experienced professionals who are 
                            passionate about what they do.</p>
                        </div>
                    </div>
                </div>

                <div className='feature-item'>
                    <div className='feature-icon'>
                        <img src={cog} className="bgnew" alt="" />
                    </div>
                    <div className='feature-info'>
                        <div className='feature-title'>
                            <h3 className='red-color'>Easy to Implement</h3>
                        </div>
                        <div className='feature-desc'>
                            <p>Our processes have been refined over years of implementation meaning 
                                our teams always deliver.</p>
                        </div>
                    </div>
                </div>

                <div className='feature-item'>
                    <div className='feature-icon'>
                        <img src={chart} className="bgnew" alt="" />
                    </div>
                    <div className='feature-info'>
                        <div className='feature-title'>
                            <h3 className='red-color'>Enhanced Productivity</h3>
                        </div>
                        <div className='feature-desc'>
                            <p>Our customized platform with in-built analytics helps you manage your 
                               distributed teams.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
      )


}

export default HomeFeatures;
;