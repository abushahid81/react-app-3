import React from 'react'
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Blog from "./Component/Blog.jsx";
import Contact from "./Component/Contact.jsx";
import Navbar from "./Navbar.jsx";
import { BrowserRouter, Routes , Route } from 'react-router-dom'



const RouterExample = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
        <Route path="/Logo" element={<div>Logo</div>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Log  o" element={<div>Login</div>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default RouterExample
