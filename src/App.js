import React from "react";
import Navbar from "./components/Navbar";


import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Flowers from "./pages/flowers/Flowers";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import Plans from "./pages/plans/Plans";
function App() {
  return (
   <>
<Navbar></Navbar>
<h1>hello </h1>
<h1>hello </h1>
  <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact"  element={<Contact></Contact>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/plans" element={<Plans></Plans>}></Route>
        <Route path="/flowers" element={<Flowers></Flowers>}></Route>
        
      </Routes> 
    
   </>
  );
}

export default App;
