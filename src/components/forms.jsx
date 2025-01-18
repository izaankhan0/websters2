import React, { useState } from 'react'
import '../styles/forms.css'
import Startup from "../../public/assets/media/startup.png"
import Personal from "../../public/assets/media/personal.png"
import Portfolio from "../../public/assets/media/portfolio.png"
import Company from "../../public/assets/media/company.png"
import Blog from "../../public/assets/media/blog.png"


function forms(){
    return <div className="forms" id="forms">
        <h1>Choose the Website you wou want!</h1>
        <div className="forms">
            <div className="form-box">
                <img src={Startup} alt="" />
                <p>Startup Website</p>
            </div>
            <div className="form-box">
                <img src={Personal} alt="" />
                <p>Personal Website</p>
            </div>
            <div className="form-box">
                <img src={Portfolio} alt="" />
                <p>Portfolio Website</p>
            </div>
            <div className="form-box">
                <img src={Company} alt="" />
                <p>Company/Brand Website</p>
            </div>
            <div className="form-box">
                <img src={Blog} alt="" />
                <p>Blog Website</p>
            </div>
        </div>
    </div>
}

export default forms;