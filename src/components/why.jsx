import React, { useState } from 'react'
import '../styles/why.css'
import Scroll from "../../public/assets/media/bg-scroll-black.png"
import resumeImg from "../../public/assets/media/resume.png";
import webImg from "../../public/assets/media/web.png";
import marImg from "../../public/assets/media/mar.png";
import allSitesImg from "../../public/assets/media/all-sites.png";

function why(){
    return <div className="why" id='why'>
        <img src={Scroll} className="absolute2 abs-12" alt="bg image scroller" />
        <img src={Scroll} className="absolute2 abs-22" alt="bg image scroller" />
        <img src={Scroll} className="absolute3 abs-32" alt="bg image scroller" />
        <img src={Scroll} className="absolute3 abs-42" alt="bg image scroller" />
        <h1>Why need a Website?</h1>
        <div className="slides">
            <div className="slide-1 slide">
                <img src={resumeImg} alt="resume img" />
                <p>Resumes are Cringe, Get a Portfolio Website instead!</p>
                <img src={webImg} alt="website img" />
            </div>
            <div className="slide-2 slide">
                <p>Have an Online Presence! State your Achievements and Hobbies in a COOL way!</p>
                <img src={marImg} alt="achievements img" />
            </div>
            <div className="slide-3 slide">
                <img src={allSitesImg} alt="achievements img" />
                <p>STAND OUT to your University or Employer!</p>
            </div>   
        </div>


    </div>
}

export default why;