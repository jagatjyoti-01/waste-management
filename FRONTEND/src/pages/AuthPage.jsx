import React, { useState } from 'react';
import Login from '../components/authcomponents/Login';
import SignUp from '../components/authcomponents/SignUp';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="w-full h-100vh flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
                {/* Left section */}
                <div className="hidden sm:block relative bg-green-600 bg-cover bg-center px-8 py-16">
                    <div className="absolute text-[white] top-8 left-24 text-4xl font-bold font-vollkorn">
                      E-Waste
                    </div>
                    <div className="flex flex-col items-center justify-center h-full text-white "  >
                        {isLogin ? (
                            <>
                                <h1 className="text-2xl md:text-6xl font-bold mb-10">E-Waste</h1>
                                <h2 className="text-xs md:text-3xl">Transforming E-Waste into a Sustainable Future</h2>
                            </>
                        ) : (
                            <>
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">Reducing E-Waste for a </h1>
                                <h2 className="text-2xl md:text-4xl"> Greener Tomorrow</h2>
                            </>
                        )}
                    </div>
                    {/* Background shapes */}
                    <img src="/assets/Polygon.png" alt="Polygon" className="absolute top-8 right-8 w-56 h-56" />
                    <img src="/assets/Polygon.png" alt="Polygon" className="absolute top-48 left-36 w-24 h-24" />
                    <img src="/assets/Ellipse 9.png" alt="Ellipse" className="absolute bottom-22 left-48 w-96 h-64" />
                    <img src="/assets/Ellipse 9.png" alt="Ellipse" className="absolute bottom-52 left-72 w-24 h-24" />
                    <img src="/assets/Ellipse 9.png" alt="Ellipse" className="absolute bottom-32 left-[650px] w-16 h-16" />
                </div>

                {/* Right section */}
                <div className="flex items-center justify-center py-16">
                    <div className="w-full max-w-md">
                        <div className="flex justify-center mb-8 font-semibold">
                            <span 
                                className={`w-1/2 border-b-2 pb-2 text-center cursor-pointer ${isLogin ? 'border-[#1A5542] text-green-600' : 'border-gray-500 text-gray-500'}`} 
                                onClick={handleToggle}
                            >
                                Create Account
                            </span>
                            <span 
                                className={`w-1/2 border-b-2 pb-2 text-center cursor-pointer ${isLogin ? 'border-gray-500 text-gray-500' : 'border-[#1A5542] text-green-600'}`} 
                                onClick={handleToggle}
                            >
                                Log In
                            </span>
                        </div>
                        <div className="bg-transparent">
                            {isLogin ?<SignUp />  :<Login /> }
                        </div>
                        <div className="text-center mt-24">
                            <div className="flex items-center justify-center text-gray-400 mb-4">
                                <div className="w-full border-b-2 border-gray-500 mr-0"></div>
                                <span className="font-semibold text-xs w-80">or Sign Up With</span>
                                <div className="w-full border-b-2 border-gray-500 ml-0"></div>
                            </div>
                            <div className="flex justify-center space-x-28">
                                <img src="/assets/Group.png" alt="Logo 1" className="w-16 h-16" />
                                <img src="/assets/apple-black 1.png" alt="Logo 2" className="w-16 h-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
