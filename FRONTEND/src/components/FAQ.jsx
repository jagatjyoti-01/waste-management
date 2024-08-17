import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { BiChevronUp } from "react-icons/bi";
import faqs from '../assets/FAQ';
import { CSSTransition } from 'react-transition-group';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-full mx-auto py-[28px] bg-[#E6EAE7] sm:py-8" style={{ fontFamily: 'Spline Sans' }}>
            <h2 className="text-2xl px-4 sm:px-6 md:text-left md:px-[110px] font-bold text-[#1B5844] mb-4">FAQ</h2>
            <div className="space-y-4 px-4 sm:px-6 md:px-[110px]">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b">
                        <div className="group">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 focus:outline-none text-left transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg`}>
                                <span className="text-sm sm:text-base transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-105">
                                    {faq.question}
                                </span>
                                <span className="text-xl sm:text-2xl">
                                    {activeIndex === index ? <BiChevronUp /> : <FaAngleDown />}
                                </span>
                            </button>
                            <CSSTransition
                                in={activeIndex === index}
                                timeout={500}
                                classNames={{
                                    enter: '',
                                    enterActive: 'max-h-0 opacity-0',
                                    enterDone: 'max-h-screen opacity-1',
                                    exit: '',
                                    exitActive: 'max-h-0 opacity-0',
                                    exitDone: 'max-h-0 opacity-0',
                                }}
                                unmountOnExit
                            >
                                <div 
                                    className="p-4 bg-gray-50 overflow-hidden transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg" 
                                    style={{ transitionProperty: 'max-height, opacity, transform', maxHeight: activeIndex === index ? '300px' : '0', opacity: activeIndex === index ? 1 : 0 }}>
                                    <p className="text-sm sm:text-base transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-105">
                                        {faq.answer}
                                    </p>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;