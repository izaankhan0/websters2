import React, { useState } from 'react'
import '../styles/clients.css'
import taqseemLogo from "../../public/assets/media/taqseem-logo.jpeg"


function clients(){
    return <div className="clients">
        <h2>Our Clients</h2>
        <div className="scroller-box">
            <div className="scroller">
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
                <img src={taqseemLogo} alt="" />
            </div>
        </div>
    </div>
}

export default clients;