import React, { useState } from "react";
import "../styles/forms.css";
import Startup from "../../public/assets/media/startup.png";
import Personal from "../../public/assets/media/personal.png";
import Portfolio from "../../public/assets/media/portfolio.png";
import Company from "../../public/assets/media/company.png";
import Blog from "../../public/assets/media/blog.png";
import Scroll from "../../public/assets/media/bg-scroll-black.png";


function Forms() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="forms" id="forms">
        <img src={Scroll} className="absolute abs-7" alt="" />
        <img src={Scroll} className="absolute abs-8" alt="" />
              
      <h1>Choose the Website you want!</h1>
      <div className="form">
        {[{ src: Startup, label: "Startup Website" },
          { src: Personal, label: "Personal Website" },
          { src: Portfolio, label: "Portfolio Website" },
          { src: Company, label: "Company/ Brand Website" },
          { src: Blog, label: "Blog Website" }]
          .map((item, index) => (
            <a href="" key={index}>
              <div
                className={`form-box ${
                  hoveredIndex !== null && hoveredIndex !== index ? "blur" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={item.src} alt="" />
                <p>{item.label}</p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default Forms;
