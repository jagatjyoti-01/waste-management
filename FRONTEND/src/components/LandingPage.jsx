import React, { useState, useEffect } from 'react';
import Rectangle1 from '../assets/Rectangle1.png';
import Rectangle2 from '../assets/Rectangle2.png';

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    <img src={Rectangle1} alt="" key="image1" className="w-full h-auto" />,
    <img src={Rectangle2} alt="" key="image2" className="w-full h-auto" />,
  ];
  const buttons = ['Become a Vender', 'Become a Sellor'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      console.log(Image.length)
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="bg-[#D9D9D9]">
      <div className="container mx-auto ms:py-16 py-10 sm:px-24 px-10" style={{ fontFamily: 'Spline Sans Mono' }}>
        <div className="flex items-center">
          <div className="sm:w-1/2 w-full text-left sm:pr-8">
            <h1 className="sm:text-5xl text-xl font-bold mb-4 text-[#3D3D4E] tracking-wider">Transforming <span className='text-[#28735A]'>E-waste</span> <br /> into environmental <br /> Impact</h1>
            <p className="text-[#3D3D4E] mb-4 sm:text-2xl text-sm font-semibold tracking-widest  sm:mt-12 ">Turn your old gadgets into green earn, recycle, and
            contribute to a sustainable future</p>
            <button className="border-4 sm:ms-20  ms-28 sm:mt-8 bg-[#28735A] sm:px-6 md:px-[90px] rounded-xl text-xs sm:text-2xl text-white p-2 sm:py-6">
              {buttons[currentIndex]}
            </button>
            
          </div>
          <div className="sm:w-1/2 hidden md:flex  ">
            {images[currentIndex]}
            <div className="mt-4 text-center">
             
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
         {images.map((_, index) => (
                <span
                  key={index}
                  className={`  items-center inline-block sm:w-3 sm:h-3 w-2 h-2 mt-4 rounded-full mr-2 ${index === currentIndex ? 'bg-[#28735A]' : 'bg-gray-500'}`}
                ></span>
              ))}
              </div>
      </div>
    </div>
  );
}

export default LandingPage;
