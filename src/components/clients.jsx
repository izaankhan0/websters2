import React, { useState } from "react";
import "../styles/clients.css";
import sayebaanLogo from "../../public/assets/media/sayebaan-logo.jpeg";
import expressLogo from "../../public/assets/media/express-logo.png";
import azeemLogo from "../../public/assets/media/azeem-logo.png";
import taqseemLogo from "../../public/assets/media/taqseem-logo.png";
import Scroll from "../../public/assets/media/bg-scroll.png";

function Clients() {
  return (
    <div className="clients" id="clients">
      <img src={Scroll} className="absolute abs-5" alt="bg scroller image" />
      <img src={Scroll} className="absolute abs-6" alt="bg scroller image" />
      <h2>Our Clients</h2>
      <div className="scroller">
        <div className="intn_list">
          <div className="int_icons">
            <a href="https://taqseemfoundation.com">
              <img src={taqseemLogo} alt="client logo image" />
            </a>
            <a href="https://sayebaan.com">
              <img src={sayebaanLogo} alt="client logo image" />
            </a>
            <a href="https://izaankhan0.github.io/tqw">
              <img src={expressLogo} alt="client logo image" />
            </a>
            <a href="https://izaankhan0.github.io/azeem">
              <img src={azeemLogo} alt="client logo image" />
            </a>
          </div>
          <div className="int_icons">
            <a href="https://taqseemfoundation.com">
              <img src={taqseemLogo} alt="client logo image" />
            </a>
            <a href="https://sayebaan.com">
              <img src={sayebaanLogo} alt="client logo image" />
            </a>
            <a href="https://izaankhan0.github.io/tqw">
              <img src={expressLogo} alt="client logo image" />
            </a>
            <a href="https://izaankhan0.github.io/azeem">
              <img src={azeemLogo} alt="client logo image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
