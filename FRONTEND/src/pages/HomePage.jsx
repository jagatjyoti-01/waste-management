// import React from 'react'

import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "./Footer";
import Gallery from "../components/Gallery";
import Impact from "../components/Impact";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import WhatSell from "../components/WhatSell";
import WhySell from "../components/WhySell";

function HomePage() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <WhySell />
      <Features />
      <WhatSell />
      <Impact />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default HomePage;