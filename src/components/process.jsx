import React, { useState } from 'react'
import '../styles/process.css'
import Step1 from "../../public/assets/media/10.png";
import Step2 from "../../public/assets/media/11.png";
import Step3 from "../../public/assets/media/12.png";
import Step4 from "../../public/assets/media/13.png";
import Scroll from "../../public/assets/media/bg-scroll.png"



function process(){
    return <div className="process" id="process">
        <img src={Scroll} className="absolute2 abs-12" alt="" />
        <img src={Scroll} className="absolute2 abs-22" alt="" />
        <img src={Scroll} className="absolute3 abs-32" alt="" />
        <img src={Scroll} className="absolute3 abs-42" alt="" />
          
        <h1>Our Process</h1>
        <div className="steps">
            <div className="step step-1">
                <img src={Step1} alt="" />
                <p>Tell Us the type of website you want via simple questions</p>
            </div>
            <div className="step step-2">
                <img src={Step2} alt="" />
                <p>We Design a website and deliver the design to you</p>
            </div>
            <div className="step step-3">
                <img src={Step3} alt="" />
                <p>We code your website once you confirm the Design</p>
            </div>
            <div className="step step-4">
                <img src={Step4} alt="" />
                <p>We Deliver your website and help you upload it on the web</p>
            </div>
        </div>
    </div>
}

export default process;