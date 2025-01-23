import React, { useState } from 'react';
import '../styles/startup.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';
import { useEffect } from "react";

function startup(){

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);


    return <div className="startup">
        <FormsPage name="Startup" usd="$70" pkr="PKR 20,000" />
        <div className="google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSesmgcTuM3v2lhaO_xbksbHhqgwtn_NDqc-nLKjF4xom5ex_Q/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
}

export default startup;