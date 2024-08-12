import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { BiChevronUp } from "react-icons/bi";
import faqs from '../assets/FAQ';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    return (
        <div className="max-w-full mx-auto py-[28px] bg-[#E6EAE7] sm:py-8" style={{ fontFamily: 'Spline Sans' }}>
            <h2 className="text-2xl px-4  sm:px-6 md:text-left md:px-[110px] font-bold text-[#1B5844] mb-4">FAQ</h2>
            <div className="space-y-4 px-4 sm:px-6 md:px-[110px]">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 focus:outline-none text-left">
                            <span className="text-sm sm:text-base">{faq.question}</span>
                            <span className="text-xl sm:text-2xl">{activeIndex === index ? <BiChevronUp /> : <FaAngleDown />}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 bg-gray-50">
                                <p className="text-sm sm:text-base">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;