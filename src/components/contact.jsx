import React, { useState } from 'react'
import '../styles/contact.css'

function contact(props){
    return <div className="contact">
                <div className="contact-top">
                    <a href={props.a}><img src={props.img} alt="" /></a>
                    <div className="vertical-line"></div>
                    <h2>{props.h2}</h2>
                </div>
                <a href={props.a}><h3>{props.h3}</h3></a>
            </div>
}

export default contact;