import React, { useState } from 'react';
import '../styles/personal.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';
import { useEffect } from "react";



function personal(){

useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);

    return <div className="personal">
        <FormsPage name="Personal" usd="$55" pkr="PKR 15,000" />
        <div className="google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScX-oFMjLKQDHAkCRbbOoLnHZvZiwZ4GVfzYhSVjC2kbrRQhw/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
}

export default personal;