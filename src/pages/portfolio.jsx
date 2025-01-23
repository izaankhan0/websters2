import React, { useState } from 'react';
import '../styles/portfolio.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';


function portfolio(){
    return <div className="portfolio">
        <FormsPage name="Portfolio" usd="$55" pkr="PKR 15,000" />
    </div>
}

export default portfolio;