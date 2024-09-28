
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";


import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import WhySell from "./components/WhySell";
import Features from "./components/Features";
import WhatSell from "./components/WhatSell";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./pages/Footer";
import './App.css'
import { BrowserRouter,Route, Routes } from "react-router-dom"
import AuthPage from './pages/AuthPage';

function App() {


  return (
    <>
      <BrowserRouter>
      
        <Routes>
         
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element ={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/auth" element={<AuthPage/>}/>

          <Route path="/navbar" element={<Navbar />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/whysell" element={<WhySell />} />
          <Route path="/features" element={<Features />} />
          <Route path="/whatsell" element={<WhatSell />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        
      </BrowserRouter>
    </>

  )
}

export default App
