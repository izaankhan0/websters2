import React, { useState } from 'react';
import Review from "./review"
import '../styles/reviews.css'
import Scroll from "../../public/assets/media/bg-scroll-black.png";


function reviews(){
    return <div className="reviews" id="reviews">
        <img src={Scroll} className="absolute abs-7" alt="bg image scroller" />
        <img src={Scroll} className="absolute abs-8" alt="bg image scroller" />
        <img src={Scroll} className="absolute2 abs-9" alt="bg image scroller" />
        <img src={Scroll} className="absolute2 abs-10" alt="bg image scroller" />
                 
        <h1>Testimonials</h1>
        <div className="review-box">  
            <Review name="Marium" position="Medical Student" text="Izaans the perfect guy for website development, he made the website come to life just like I wanted it to. I absolutely love it from the colour scheme to the arrangement of things its super cute and just like what I had imagined it to be. I think the worked in affiliation with part on my website is the best cause look at those logos moving, super cute man! Also, he did all of this in like 2 days or something so if thats not super cool idk what is. He's the goat for this, im more than satisfied with mine!"/>
            <Review name="Abdul Azeem" position="Graphic Designer" text="Incredible website developer! He translated my vision into a stunning site. Despite my zero knowledge, he understood and executed flawlessly. Easy to work with, precise, and every webpage reflects his accuracy. Highly recommend!"/>
            <Review name="Taqseem Foundation" position="Non-Government Organization" text="Izaan's expertise in coding and design is evident in every aspect of the website. The choice of colors and graphics align perfectly with the identity of our organization, giving the website a professional and modern look. Izaan's attention to detail truly shines through, and it's evident that he invested time and effort to understand our needs."/>
        </div>
    </div>
}

export default reviews;