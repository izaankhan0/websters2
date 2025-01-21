import React, { useState } from 'react';
import Contact from "./contact"
import '../styles/contacts.css'
import Scroll from "../../public/assets/media/bg-scroll.png"
import Instagram from "../../public/assets/media/18.png"
import Email from "../../public/assets/media/17.png"


function contacts(){
    return <div className="contacts" id="contacts">
        <img src={Scroll} className="absolute abs-1" alt="" />
            <img src={Scroll} className="absolute abs-2" alt="" />
            
                <div className="top">
                    <h1>We'd Love to Answer Questions</h1>
                    <p>Whether it's about prices, or our quality of work; Feel free to ask anything!</p>
                </div>
                <div className="bottom">
                    <Contact img = {Email} h2 ="Email" h3= "websters.site@gmail.com" a="" />

                    <div className="contact contact-u">
                        <a href="https://izaankhan0.github.io/portfolio"><img src="../../assets/media/hat-bright.png" alt="" /></a>
                        <div className="contact-top">
                            <div className="vertical-line"></div>
                            <h2>Our Founder</h2>
                        </div>
                        <a href="https://izaankhan0.github.io/portfolio"><h3>My Website</h3></a>
                    </div>

                    <Contact img ={Instagram} h2 ="Instagram" h3= "@website.site" a="" />
                </div>
    </div>
}

export default contacts;