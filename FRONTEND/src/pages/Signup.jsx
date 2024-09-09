import React, { useState } from "react";
import Login from "../components/authcomponents/Login";
import SignUp from "../components/authcomponents/SignUp";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat flex-col"
      style={{ backgroundImage: "url(/assets/Cycling.png)" }}
    >
      <div className="flex justify-center  gap-8  p-4 md:top-14 top-2 font-semibold md:w-96 w-80 fixed">
        <div
          className={`w-1/2 border-b-2  ${
            isLogin
              ? "border-[#28735A] text-bold  text-[#28735A]"
              : "border-gray-400 text-xl text-bold text-gray-400"
          } text-center cursor-pointer`}
          onClick={handleToggle}
        >
          LogIn
        </div>
        <div
          className={`w-1/2 border-b-2 ${
            isLogin
              ? "border-gray-400 text-xl text-bold text-gray-400 	"
              : "border-[#28735A] text-bold   text-[#28735A]"
          } text-center cursor-pointer`}
          onClick={handleToggle}
        >
          Create Account
        </div>
      </div>

      <div className="bg-transparent shadow-none p-4">
        {isLogin ? <Login /> : <SignUp />}
      </div>
      <div className="text-center   ">
        <div className="flex items-center justify-center text-[#746283] mb-2">
          <div className="flex-1 border-b-2 border-gray-400 mr-2"></div>
          <div className="font-bold whitespace-nowrap">or Sign Up With</div>
          <div className="flex-1 border-b-2 border-gray-400 ml-2"></div>
        </div>
        <div className="flex justify-center gap-14 md:mt-8">
          <img src="/assets/Group.png" alt="Logo 1" className="md:w-12 w-7 md:h-12 h-7 " />
          <img
            src="/assets/apple-black 1.png"
           
            alt="Logo 2"
            className="md:w-12 w-7 md:h-12 h-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
