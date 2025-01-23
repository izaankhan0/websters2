import React, { useState } from 'react';
import '../styles/blog.css';
import '../styles/fonts.css';
import FormsPage from '../components/forms-page';


function blog(){
    return <div className="blog">
        <FormsPage name="Blog" usd="$55" pkr="PKR 15,000" />
    </div>
}

export default blog;