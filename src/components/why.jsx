import React, { useState } from 'react'
import '../styles/why.css'
import resumeImg from "../../public/assets/media/resume.png";
import webImg from "../../public/assets/media/web.png";
import marImg from "../../public/assets/media/mar.png";
import allSitesImg from "../../public/assets/media/all-sites.png";

function why(){
    return <div className="why" id='why'>

        <h1>Why need a Website?</h1>
        <div className="slides">
            <div className="slide-1 slide">
                <img src={resumeImg} alt="" />
                <p>Resumes are Cringe, Get a Portfolio Website instead!</p>
                <img src={webImg} alt="" />
            </div>
            <div className="slide-2 slide">
                <p>Have an Online Presence! State your Achievements and Hobbies in a COOL way!</p>
                <img src={marImg} alt="" />
            </div>
            <div className="slide-3 slide">
                <img src={allSitesImg} alt="" />
                <p>STAND OUT to your University or Employer!</p>
            </div>   
        </div>


    </div>
}

export default why;