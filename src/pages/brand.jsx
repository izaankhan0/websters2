import React, { useState } from 'react';
import '../styles/brand.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';


function brand(){
    return <div className="brand">
        <FormsPage name="Brand" usd="$70" pkr="PKR 20,000" />
    </div>
}

export default brand;