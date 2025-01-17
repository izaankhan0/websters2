import React, { useState } from 'react'
import '../styles/why.css'

function why(){
    return <div className="why">

        <h1>Why need a Website?</h1>
        <div className="slides">
            <div className="slide-1 slide">
                <img src="../../public/assets/media/resume.png" alt="" />
                <p>Resumes are Cringe, Get a Portfolio Website instead!</p>
                <img src="../../public/assets/media/web.png" alt="" />
            </div>
            <div className="slide-2 slide">
                <p>Have an Online Presence! State your Achievements and Hobbies in a COOL way!</p>
                <img src="../../public/assets/media/mar.png" alt="" />
            </div>
            <div className="slide-3 slide">
                <p>STAND OUT to your University or Employer!</p>
                <img src="../../public/assets/media/all-sites.png" alt="" />
            </div>   
        </div>


    </div>
}

export default why;