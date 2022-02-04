import React, { useEffect,  useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navbar } from "./components/UI/Navbar/Navbar";
import { About } from "./pages/About";
import Posts from "./pages/Posts";

import './styles/app.css'


function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
