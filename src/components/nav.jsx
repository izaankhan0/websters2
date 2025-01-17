import React, { useState } from 'react'
import '../styles/hero.css'
import '../styles/fonts.css'
import hatDark from "../../public/assets/media/hat-dark.png"
import navIcon1 from "../../public/assets/media/1.png";
import navIcon2 from "../../public/assets/media/2.png";
import navIcon3 from "../../public/assets/media/3.png";
import navIcon4 from "../../public/assets/media/4.png";
import navIcon5 from "../../public/assets/media/5.png";


function nav(){
    const [ticker, setTicker] = useState(false);
    const [rotator, setRotator] = useState(0);
    const [a1, setA1] = useState(-110);
    const [a2, setA2] = useState(-217);
    const [a3, setA3] = useState(-320);
    const [a4, setA4] = useState(-425);
    const [a5, setA5] = useState(-530);
    function enable(){
        setA1(0);
        setA2(0);
        setA3(0);
        setA4(0);
        setA5(0);
        setTicker((prevTicker) =>{
            return !prevTicker;
        })
        

        
    }
    function disable(){
        setA1(-110);
        setA2(-217);
        setA3(-320);
        setA4(-425);
        setA5(-530);
        setTicker((prevTicker) =>{
            return !prevTicker;
        })
        

        
    }
    function burger(){
        setRotator((prevValue) =>{
            return prevValue + 360;
        });
        if(ticker === true){
            disable();
        }else{
            enable();
        }
    }

    return <div className="wrapper">
        <nav>
            <img src={hatDark} className="w-20" alt="" />
            <ul>
                <a href=""><img src={navIcon1} alt="" /></a>
                <a href=""><img src={navIcon2} alt="" /></a>
                <a href=""><img src={navIcon3} alt="" /></a>
                <a href=""><img src={navIcon4} alt="" /></a>
                <a href=""><img src={navIcon5} alt="" /></a>
            </ul>
        </nav>

        <div style={{transform: `rotate(${rotator}deg)`}} onClick={burger} className="burger">
            <img src="../public/assets/media/hat-dark.png" className="w-20" alt="" />
        </div>

        <van>
            <ul>
                <a href="" style={{transform: `translateY(${a1}px)`}}><img src={navIcon1} alt="" /></a>
                <a href="" style={{transform: `translateY(${a2}px)`}}><img src={navIcon2} alt="" /></a>
                <a href="" style={{transform: `translateY(${a3}px)`}}><img src={navIcon3} alt="" /></a>
                <a href="" style={{transform: `translateY(${a4}px)`}}><img src={navIcon4} alt="" /></a>
                <a href="" style={{transform: `translateY(${a5}px)`}}><img src={navIcon5} alt="" /></a>
            </ul>
        </van>
    </div>
}

export default nav;