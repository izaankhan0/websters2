import React, { useState } from 'react';
import '../styles/blog.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';
import { useEffect } from "react";
import Scroll from "../../public/assets/media/bg-scroll-black.png"



function blog(){

useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);

    return <div className="blog">
        <img src={Scroll} className="absolute abs-1" alt="" />
                <img src={Scroll} className="absolute abs-2" alt="" />
                <img src={Scroll} className="absolute-2 abs-1" alt="" />
                <img src={Scroll} className="absolute-2 abs-2" alt="" />
                <img src={Scroll} className="absolute-3 abs-1" alt="" />
                <img src={Scroll} className="absolute-3 abs-2" alt="" />
        <FormsPage name="Blog" usd="$55" pkr="PKR 15,000" />
        <div className="google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyROOJ3urWXxo5GyqjMI0K15unbi6YwZItjZfvhxDTf_QOBg/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
}

export default blog;