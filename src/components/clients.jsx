import React, { useState } from "react";
import "../styles/clients.css";
import taqseemLogo from "../../public/assets/media/taqseem-logo.jpeg";

function clients() {
  return (
    <div className="clients" id="clients">
      <h2>Our Clients</h2>
      <div className="scroller">
        <div className="intn_list">
          <div className="int_icons">
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
          </div>
          <div className="int_icons">
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
            <img src={taqseemLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default clients;
