import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import React from 'react'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Signin from "./Pages/Signin";
import Login from "./Pages/Login";
import Test from "./Components/Test";


const LayoutWrapper=(Component)=>{
return (
  <div>
    <Header/>
    <div className="min-h-[50vh]">
    <Component/>
    </div>
    <Footer/>
  </div>
)
}


function MainRouter() {
  return (
    <div>
    
    <Router>
    <Routes>
    <Route path="/Accueil" element={LayoutWrapper(Accueil)} />
    <Route path="/Signin" element={<Signin/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/ss" element={<Test/>} />

    </Routes>
    </Router>    
    </div>
  )
}

export default MainRouter