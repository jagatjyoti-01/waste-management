import React from "react";
import CountUp from "react-countup";

const Impact = () => {
  const impactData = [
    { id: 1, end: 2, suffix: "M+", label: "earned by users" },
    { id: 2, end: 1, suffix: "M+", label: "tons of landfills cleaned" },
    { id: 3, end: 100, suffix: "K+", label: "numbers of electronics devise recycled" },
    { id: 4, end: 300, suffix: "+", label: "jobs created" },
  ];

  return (
    <div className="bg-[#292D2A] py-10" style={{ fontFamily: 'Spline Sans' }}>
      <div className="max-w-full lg:mx-[110px] px-4 sm:px-6 md:px-8">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 text-center py-6">
          {impactData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center p-6 bg-[#111827] text-white rounded-2xl shadow-lg transition transform hover:scale-105 duration-400"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <CountUp end={data.end} duration={2} separator="," suffix={data.suffix} />
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
