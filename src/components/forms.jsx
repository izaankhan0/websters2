import React, { useState } from "react";
import "../styles/forms.css";
import Startup from "../../public/assets/media/startup.png";
import Personal from "../../public/assets/media/personal.png";
import Portfolio from "../../public/assets/media/portfolio.png";
import Company from "../../public/assets/media/company.png";
import Blog from "../../public/assets/media/blog.png";
import Scroll from "../../public/assets/media/bg-scroll-black.png";
import { Link } from "react-router-dom";

function Forms() {

  

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Define the links for each form box
  const links = [
    "/startup", // Link for Startup Website
    "/personal", // Link for Personal Website
    "/portfolio", // Link for Portfolio Website
    "/brand",   // Link for Company/Brand Website
    "/blog"       // Link for Blog Website
  ];

  return (
    <div className="forms" id="forms">
      <img src={Scroll} className="absolute abs-7" alt="bg image scroller" />
      <img src={Scroll} className="absolute abs-8" alt="bg image scroller" />
              
      <h1>Choose the Website you want!</h1>
      <div className="form">
        {[{ src: Startup, label: "Startup Website" },
          { src: Personal, label: "Personal Website" },
          { src: Portfolio, label: "Portfolio Website" },
          { src: Company, label: "Company/ Brand Website" },
          { src: Blog, label: "Blog Website" }]
          .map((item, index) => (
            <Link to={links[index]} key={index}>
              <div
                className={`form-box ${
                  hoveredIndex !== null && hoveredIndex !== index ? "blur" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={item.src} alt="forms logo" />
                <p>{item.label}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Forms;