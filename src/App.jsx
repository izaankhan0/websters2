import React, { useState } from 'react'
import './styles/App.css'
import Hero from "./components/hero"
import Why from "./components/why"
import Clients from "./components/clients"
// import About from "./components/about"
import Forms from "./components/forms"
import Process from "./components/process"
// import Reviews from "./components/reviews"
// import Contact from "./components/contact"

function App() {
  return <div className="container">


  <Hero />
  <Why />
  <Clients />
  <Forms />
  <Process />

</div>
  
}

export default App
