import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contentData from "../data/homePageData.json"; 

function LandingPage() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % contentData.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-[#E6EAE7]">
      <div className="container mx-auto sm:py-20 py-10 sm:px-20 px-10">
        {/* Use flex-col on small screens and flex-row on larger screens */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 w-full text-left md:pr-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="sm:text-5xl text-xl font-bold mb-4 text-[#3D3D4E] tracking-wider">
                  {contentData[currentPage].heading.split(contentData[currentPage].highlight)[0]}
                  <span className="text-[#28735A]">{contentData[currentPage].highlight}</span>
                  {contentData[currentPage].heading.split(contentData[currentPage].highlight)[1]}
                </h1>
                <p className="text-[#3D3D4E] mb-4 sm:text-2xl text-sm font-semibold tracking-widest sm:mt-12">
                  {contentData[currentPage].description}
                </p>
                <button className="bg-[#28735A] text-white px-20 py-5 mb-4 sm:mb-0 rounded-md sm:text-2xl font-semibold">
                  {contentData[currentPage].buttonText}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPage}
                src={contentData[currentPage].image}
                alt=""
                className="w-full h-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
        {/* Dots navigation */}
        <div className="flex items-center justify-center">
          {contentData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`cursor-pointer items-center inline-block sm:w-3 sm:h-3 w-3 h-3 mt-4 rounded-full mr-2 ${
                index === currentPage
                  ? "bg-[#28735A] sm:w-4 sm:h-4"
                  : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
