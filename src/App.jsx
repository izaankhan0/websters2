import React, { useState } from 'react'
import './styles/App.css'
import Hero from "./components/hero"
import Why from "./components/why"
import Clients from "./components/clients"
import Forms from "./components/forms"
import Process from "./components/process"
import Reviews from "./components/reviews"
import Contact from "./components/contacts"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Startup from "./pages/startup.jsx"
import Personal from "./pages/personal.jsx"
import Portfolio from "./pages/portfolio.jsx"
import Brand from "./pages/brand.jsx"
import Blog from "./pages/blog.jsx"

function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <>
          <Hero />
  <Why />
  <Clients />
  <Forms />
  <Process />
  <Reviews />
  <Contact />
        </>
      },
      {
        path: "/startup",
        element: <Startup />
      },
      {
        path: "/personal",
        element: <Personal />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/brand",
        element: <Brand />
      },
      {
        path: "/blog",
        element: <Blog />
      },
  ])

  return <div className="container">

  <RouterProvider router={router}></RouterProvider>
  

</div>
  
}

export default App
