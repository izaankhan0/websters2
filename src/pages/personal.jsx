import React, { useState } from 'react';
import '../styles/personal.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';


function personal(){
    return <div className="personal">
        <FormsPage name="Personal" usd="$55" pkr="PKR 15,000" />
    </div>
}

export default personal;