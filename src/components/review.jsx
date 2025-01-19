import React, { useState } from 'react'
import '../styles/review.css'
import Quote from "../../public/assets/media/quote.png"
import Stars from "../../public/assets/media/stars.png"


function review(props){
    return <div className="review" id="review">
        <img src={Quote} alt="" />
        <div className="right">
            <h2>{props.name}</h2>
            <h3>{props.position}</h3>
            <p>{props.text}</p>
            <img src={Stars} alt="" />
        </div>
    </div>
}

export default review;