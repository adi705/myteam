import React, { useState, useEffect } from 'react'
import HomeIntro from '../components/homeintro';
import HomeFeatures from '../components/homefeatures';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';
import Ready from '../components/ready';


const Home = () => {


    return (
        <>
           
           <HomeIntro/>
           <HomeFeatures/>
           <Testimonials/>
           <Ready/>
           <Footer/>
        </>
      )


}

export default Home;