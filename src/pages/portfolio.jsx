import React, { useState } from 'react';
import '../styles/portfolio.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';
import { useEffect } from "react";
import Scroll from "../../public/assets/media/bg-scroll-black.png"



function portfolio(){

 useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);


    return <div className="portfolio">
        <img src={Scroll} className="absolute abs-1" alt="" />
                <img src={Scroll} className="absolute abs-2" alt="" />
                <img src={Scroll} className="absolute-2 abs-1" alt="" />
                <img src={Scroll} className="absolute-2 abs-2" alt="" />
                <img src={Scroll} className="absolute-3 abs-1" alt="" />
                <img src={Scroll} className="absolute-3 abs-2" alt="" />
        <FormsPage name="Portfolio" usd="$55" pkr="PKR 15,000" />
        <div className="google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSclKDoVRt3bb5uc7Mp6aI7XFz5sUw0NBCQ979H8tly0eWMmcA/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
}

export default portfolio;