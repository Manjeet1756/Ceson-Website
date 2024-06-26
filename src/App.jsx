import React from 'react'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/HeroSection/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import  About from "./components/HeroSection/About"
// import Services from "./components/HeroSection/Services"
// import Client from "./components/HeroSection/Client"
// import Career  from "./components/HeroSection/Career"
// import Contact from "./components/HeroSection/Contact"

const App = () => {
  return (

    <BrowserRouter>
    <Header className="header"/>
    <Routes >
   
      <Route path ="/Home"  element={<Home/>} />
      {/* <Route path ="/About"  element={<About/>} /> */}
      {/* <Route path ="/Services"  element={<Services/>} /> */}
      {/* <Route path ="/Client"  element={<Client/>} /> */}
      {/* <Route path ="/Career"  element={<Career/>} /> */}
      {/* <Route path ="/Contact"  element={<Contact/>} /> */}
    



    </Routes>
    <Footer/> 
   
    </BrowserRouter>

  
  )
}

export default App
