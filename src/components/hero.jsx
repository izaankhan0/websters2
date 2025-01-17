import React, { useState } from 'react';
import '../styles/hero.css';
import '../styles/fonts.css';
import Nav from "./nav";
import Logo from "../../public/assets/media/logo.png"

function hero(){
    return <div className="hero" id="hero">
    <img src="../../public/assets/media/bg-scroll.png" className="absolute abs-1" alt="" />
    <img src="../../public/assets/media/bg-scroll.png" className="absolute abs-2" alt="" />
    <Nav />
    <div className="main">
        <img src= {Logo} className="logo" alt="" />
        <h1>Building your Digital Presence</h1>
        <button>Get your Website Now</button>
    </div>
</div>
}

export default hero;