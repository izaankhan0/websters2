import React, { useState } from 'react';
import '../styles/hero.css';
import '../styles/fonts.css';
import Nav from "./nav";

function hero(){
    return <div className="hero" id="hero">
    {/* <img src="../../public/assets/media/hero-bg.png" className="absolute" alt="" /> */}
    <Nav />
    <div className="main">
        <img src="../../public/assets/media/logo.png" className="logo" alt="" />
        <h1>Building your Digital Presence</h1>
        <button>Get your Website Now</button>
    </div>
</div>
}

export default hero;