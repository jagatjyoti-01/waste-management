import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Impact = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const impactSectionRef = useRef(null);

  const impactData = [
    { id: 1, end: 2, suffix: "M+", label: "earned by users" },
    { id: 2, end: 1, suffix: "M+", label: "tons of landfills cleaned" },
    { id: 3, end: 100, suffix: "K+", label: "electronics devices recycled" },
    { id: 4, end: 300, suffix: "+", label: "jobs created" },
  ];

  
  useEffect(() => {
    const handleReset = () => {
      setResetKey(prevKey => prevKey + 1);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleReset();
        }
      },
      { threshold: 0.1 } 
    );

    observer.observe(impactSectionRef.current);

    window.addEventListener("focus", handleReset);

    return () => {
      observer.disconnect();
      window.removeEventListener("focus", handleReset);
    };
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div
      className="bg-[#292D2A] py-10"
      style={{ fontFamily: 'Spline Sans' }}
      ref={impactSectionRef}
    >
      <div className="max-w-full lg:mx-[110px] px-4 sm:px-6 md:px-8">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 text-center py-6">
          {impactData.map((data) => (
            <div
              key={data.id}
              onMouseEnter={() => handleMouseEnter(data.id)}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col items-center justify-center p-6 bg-[#111827] text-white rounded-2xl shadow-lg transition transform hover:scale-105 duration-400"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <CountUp
                  key={hoveredId === data.id ? Math.random() : resetKey}
                  end={data.end}
                  duration={2}
                  separator=","
                  suffix={data.suffix}
                  start={hoveredId === data.id ? 0 : undefined}
                />
              </div>
              <p className="mt-2 text-center text-base sm:text-lg lg:text-xl whitespace-normal">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;