import React, { useState } from 'react';
import '../styles/hero.css';
import '../styles/fonts.css';
import Nav from "./nav";
import Logo from "../../public/assets/media/logo.png"
import Scroll from "../../public/assets/media/bg-scroll.png"

function hero(){
    return <div className="hero" id="hero">
    <img src={Scroll} className="absolute abs-1" alt="background scroller image" />
    <img src={Scroll} className="absolute abs-2" alt="background scroller image" />
    <Nav />
    <div className="main">
        <img src= {Logo} className="logo" alt="logo" />
        <h1>We build Modern Websites!</h1>
        <a href="#forms"><button>Get your Website Now</button></a>
    </div>
</div>
}

export default hero;