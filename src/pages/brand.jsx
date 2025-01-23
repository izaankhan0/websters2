import React, { useState } from 'react';
import '../styles/brand.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';
import { useEffect } from "react";


function brand(){


     useEffect(() => {
            window.scrollTo(0, 0); // Scroll to the top
          }, []);

    return <div className="brand">
        <FormsPage name="Brand" usd="$70" pkr="PKR 20,000" />
        <div className="google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSed7lWUV2ViJUJCS0G5pw0jEF8saQGojDjTZDdAX7mDl77oEA/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
}

export default brand;