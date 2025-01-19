import React, { useState } from 'react';
import Review from "./review"
import '../styles/reviews.css'
import Scroll from "../../public/assets/media/bg-scroll-black.png";


function reviews(){
    return <div className="reviews" id="reviews">
        <img src={Scroll} className="absolute abs-7" alt="" />
        <img src={Scroll} className="absolute abs-8" alt="" />
        <img src={Scroll} className="absolute2 abs-9" alt="" />
        <img src={Scroll} className="absolute2 abs-10" alt="" />
                 
        <h1>Testimonials</h1>
        <div className="review-box">  
            <Review name="Abdul Azeem" position="Graphic Designer" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit modi quisquam eum! Molestiae necessitatibus non perferendis ipsam vero deserunt, eos facilis ullam quidem error libero totam impedit consequatur voluptatum tempore nihil iste voluptate illum veniam perspiciatis esse? Quam qui quo quod? Nemo incidunt voluptatem sunt ipsum odio optio facilis dolorem ea, distinctio, in aliquid quae animi ab numquam tempore quia eveniet reprehenderit ipsam accusamus. Nulla tenetur exercitationem neque, eum pariatur saepe. Odit totam fugiat aliquam dolorem laborum iure sunt nam voluptate nisi non officiis officia deserunt enim suscipit recusandae adipisci doloribus alias amet, repellendus delectus ipsum repudiandae commodi? Quasi?"/>
            <Review name="Abdul Azeem" position="Graphic Designer" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit modi quisquam eum! Molestiae necessitatibus non perferendis ipsam vero deserunt, eos facilis ullam quidem error libero totam impedit consequatur voluptatum tempore nihil iste voluptate illum veniam perspiciatis esse? Quam qui quo quod? Nemo incidunt voluptatem sunt ipsum odio optio facilis dolorem ea, distinctio, in aliquid quae animi ab numquam tempore quia eveniet reprehenderit ipsam accusamus. Nulla tenetur exercitationem neque, eum pariatur saepe. Odit totam fugiat aliquam dolorem laborum iure sunt nam voluptate nisi non officiis officia deserunt enim suscipit recusandae adipisci doloribus alias amet, repellendus delectus ipsum repudiandae commodi? Quasi?"/>
            <Review name="Abdul Azeem" position="Graphic Designer" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit modi quisquam eum! Molestiae necessitatibus non perferendis ipsam vero deserunt, eos facilis ullam quidem error libero totam impedit consequatur voluptatum tempore nihil iste voluptate illum veniam perspiciatis esse? Quam qui quo quod? Nemo incidunt voluptatem sunt ipsum odio optio facilis dolorem ea, distinctio, in aliquid quae animi ab numquam tempore quia eveniet reprehenderit ipsam accusamus. Nulla tenetur exercitationem neque, eum pariatur saepe. Odit totam fugiat aliquam dolorem laborum iure sunt nam voluptate nisi non officiis officia deserunt enim suscipit recusandae adipisci doloribus alias amet, repellendus delectus ipsum repudiandae commodi? Quasi?"/>
        </div>
    </div>
}

export default reviews;