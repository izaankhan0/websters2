import React, { useState } from 'react';
import '../styles/forms-page.css';
import '../styles/fonts.css';
import Scroll from "../../public/assets/media/bg-scroll.png"
import Fiverr from "../../public/assets/media/fiverr-compar.png"
import { Link } from "react-router-dom";


function formsPage(props){
    return <div className="forms-page">
        <Link to="/"><button>&#8678; Back</button></Link>
        <div className="page">
            <h1>{props.name} Website</h1>
            <div className="down">
                <div className="down-left">
                    <h2>Minimum Fee of Fiverr:</h2>
                    <img src={Fiverr} alt="" />
                    <p>For ONLY Website Development</p>
                </div>
                <div className="down-right">
                    <h2>What we Offer:</h2>

                    <div className="price-card">
                        <h4>Websters</h4>
                        <h5>{props.name} Package</h5>
                        <div className="horizontal-line"></div>
                        <div className="prices">
                            <p className="usd">{props.usd}</p>
                            <p className="or">or</p>
                            <p className="pkr">{props.pkr}</p>
                        </div>
                        <ul>
                            <li>Website Design</li>
                            <li>Website Development</li>
                            <li>Quick and Quality Service</li>
                            <li>Fully Customizable Styles</li>
                        </ul>
                    </div>

                    <h6>We offer Design AND Development for cheaper!</h6>

                </div>
            </div>
        </div>
    </div>
}

export default formsPage;