import React, { useState } from 'react';
import '../styles/startup.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';


function startup(){
    return <div className="startup">
        <FormsPage name="Startup" usd="$70" pkr="PKR 20,000" />
    </div>
}

export default startup;