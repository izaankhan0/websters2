import React, { useState } from 'react';
import Contact from "./contact"
import '../styles/contacts.css'
import Scroll from "../../public/assets/media/bg-scroll.png"
import Instagram from "../../public/assets/media/18.png"
import Email from "../../public/assets/media/17.png"


function contacts(){
    return <div className="contacts" id="contacts">
        <img src={Scroll} className="absolute abs-1" alt="bg scroller image" />
            <img src={Scroll} className="absolute abs-2" alt="bg scroller image" />
            
                <div className="top">
                    <h1>We'd Love to Answer Questions</h1>
                    <p>Whether it's about prices, or our quality of work; Feel free to ask anything!</p>
                </div>
                <div className="bottom">
                    <Contact img = {Email} h2 ="Email" h3= "teamwebstersmail@gmail.com" a="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjgGjbqrPnmkdJPNHcshCxDBPpVbmLvHLkGWPsWhfdQdQBdJHPKxCSKNHPHJcnTcsTVjfj" />

                    <div className="contact contact-u">
                        <a href="https://izaankhan0.github.io/portfolio"><img src="../../assets/media/hat-bright.png" alt="grad cap image" /></a>
                        <div className="contact-top">
                            <div className="vertical-line"></div>
                            <h2>Founder's Website</h2>
                        </div>
                        <a href="https://izaankhan0.github.io/portfolio"><h3>My Website</h3></a>
                    </div>

                    <Contact img ={Instagram} h2 ="Instagram" h3= "@teamwebsters.com_" a="https://www.instagram.com/teamwebsters.com_" />
                </div>
    </div>
}

export default contacts;