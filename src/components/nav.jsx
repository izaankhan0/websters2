import React, { useState } from 'react'
import '../styles/hero.css'
import '../styles/fonts.css'

function nav(){
    return <div className="wrapper">
        <nav>
            <img src="../public/assets/media/hat-dark.png" className="w-20" alt="" />
            <ul>
                <a href=""><img src="../../public/assets/media/1.png" alt="" /></a>
                <a href=""><img src="../../public/assets/media/2.png" alt="" /></a>
                <a href=""><img src="../../public/assets/media/3.png" alt="" /></a>
                <a href=""><img src="../../public/assets/media/4.png" alt="" /></a>
                <a href=""><img src="../../public/assets/media/5.png" alt="" /></a>
            </ul>
        </nav>
    </div>
}

export default nav;