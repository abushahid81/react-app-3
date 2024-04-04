import React from 'react'
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Blog from "./Component/Blog.jsx";
import Contact from "./Component/Contact.jsx";
import Navbar from "./NavBar/Navbar.jsx";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
const RouterExample = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
        {/* <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/" element={<div>About</div>}></Route>
        <Route path="/" element={<div>Contact</div>}></Route>
        <Route path="/" element={<div>Blog</div>}></Route> */}
   </Routes>
   </BrowserRouter>
  )
}

export default RouterExample
