import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { BiChevronUp } from "react-icons/bi";
import featureSection from '../assets/featureSection.png'

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      "question": "Convenient Pickup Services",
      "answer": "We offer hassle-free, scheduled pickup services for your e-waste, ensuring that you can recycle your old electronics without leaving your home."
    },
    {
      "question": "Instant Online Valuation",
      "answer": "Quickly get an estimated value for your e-waste by entering details like the brand, model, and condition. Our online tool provides instant results."
    },
    {
      "question": "Secure Data Erasure",
      "answer": "Our process includes thorough data wiping services to ensure that all your personal information is securely removed from your devices before recycling."
    },
    {
      "question": "Real-Time Tracking",
      "answer": "Track your e-waste from pickup to final recycling. Our real-time tracking system keeps you updated on the status of your items throughout the process."
    },
    {
      "question": "Eco-Friendly Recycling",
      "answer": "Ideal for businesses, our bulk disposal services handle large quantities of e-waste efficiently, ensuring proper recycling in compliance with environmental regulations."
    },
    {
      "question": "Certified Disposal and Reward Points",
      "answer": "We adhere to all local and international standards for e-waste disposal, providing you with certification that your items have been recycled responsibly."
    },
  ];


  return (
    <div className='bg-[#EEF2E3] flex flex-col md:flex-row justify-center items-start sm:py-8 sm:px-0 sm:max-w-full'>
      <div className="max-w-full sm:w-1/2 mx-auto py-[28px]  bg-[#EEF2E3] sm:py-8"style={{ fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <h2 className="text-5xl px-4 sm:px-4 md:px-[110px] font-bold text-[#3D3D4E] mb-4 pt-4">Features</h2>
        <div className="space-y-8 px-4 sm:px-6 md:px-[110px]">
          {faqs.map((faq, index) => (
            <div key={index} className=" ">
              <button
                onClick={() => toggleFAQ(index)}
                className="sm:w-full text-4xl flex justify-between items-center p-2 sm:p-3 bg-[##EEF2E3] focus:outline-none text-left">
                <span className="text-sm sm:text-2xl font-bold">{faq.question}</span>
                <span  className={`text-xl sm:text-2xl transform transition-transform duration-700 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>{activeIndex === index ? <BiChevronUp /> : <FaAngleDown />}</span>
              </button>
              {/* {activeIndex === index && (
                            <div className="p-4 bg-[#EEF2E3]">
                                <p className="text-sm sm:w-full sm:text-2xl flex justify-between items-center border-b-2 sm:font-xs border-green-600 pb-8 px-8 leading-3  ">{faq.answer}</p>
                            </div>
                        )} */}
              <div
                className={`overflow-hidden transition-max-height duration-700 ease-in-out ${activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`}
              >
                <p className="p-4 text-sm sm:w-full sm:text-2xl border-b-2 sm:font-xs border-green-600 leading-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className='border-4 sm:ms-20  ms-8 sm:mt-10 bg-[#28735A] sm:px-6 md:px-[90px] rounded-3xl text-xs sm:text-2xl text-white p-2 sm:py-6 '>Start Selling</button>
      </div>
      <div className=" hidden ms:w-1/2   md:flex justify-center mt-8 md:mt-20 md:ml-8 sm:py-4">
        <img
          src={featureSection}
          alt="Description of the image"
          className="rounded-lg"
          style={{ width: '650px', height: '450px' }}
        />
      </div>


    </div>
  );
};

export default Features;