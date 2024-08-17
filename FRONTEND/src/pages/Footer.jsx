import React from 'react';
import logo from '../assets/logo.png';
import insta from '../assets/Behance.png';
import fb from '../assets/Dribbble.png';
import twit from '../assets/Instagram.png';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#111827] text-gray-300 py-6 text-sm ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5   gap-8  px-4 max-w-[1280px] mx-auto md:mx-[95px]">
        
        <div className="flex flex-col gap-4 text-start">
          <div className="flex items-center">
            <img src={logo} alt="logo" height={37} width={35} />
            <div className="text-[#3A86FF] pl-3 md:pl-1 md:ml-1 font-bold md:w-[135px]">E-WasteWizard</div>
          </div>
          <p className='text-[#CFD3D7] '>
            E-waste wizard is a digital agency for selling electronic waste with good prices and aims to keep the environment clean.
          </p>
          <p className='mt-4'>
            All Copyright reserved E-Waste-Wizard &copy; {currentYear}
          </p>
        </div>

        <div className="flex flex-col gap-5 w-48 ">
          <h3 className='text-[#3A86FF] font-bold  pt-3  text-left '>Get in Touch</h3>
          <div className='flex items-start gap-2 text-start mt-1 '>
            <IoLocationSharp className='text-[#3A86FF] mt-1 h-5' />
            <p className='md:w-40 w-auto'>8819 Bhubaneswar St.  South Gate, CA 90280</p>
          </div>
          <div className='flex items-center gap-2'>
            <MdOutlineMail className='text-[#3A86FF] ' />
            <p className='md:w-30 w-auto text-wrap'><a href='mailto:business@ewatewizard.com'>business@ewatewizard.com</a></p>
          </div>
          <div className='flex items-center gap-2'>
            <IoMdCall className='text-[#3A86FF]' />
            <p><a href="tel:+911123724175">+91 1234567890</a></p>
          </div>
        </div>

        <div className="flex flex-col gap-4  text-start md:ml-0   md:pl-12 ml-0">
          <h3 className='text-[#3A86FF] font-bold pt-3'>Pages</h3>
          <ul className='mt-1 flex flex-col gap-2  '>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Features">Features</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3 className='text-[#3A86FF] font-bold text-left pt-3'>Team</h3>
          <div className='mt-1 flex flex-col gap-2 text-start '>
            <p>Lokanath Panda</p>
            <p>Suryamani Patra</p>
            <p>Amitav Prusti</p>
            <p>Jagat Jyoti Dash</p>
            <p>Sumanta Kumar Polai</p>
            <p>Ramashis Kalyan Das</p>
            <p>Bisworanjan Rout</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-3">
          <div className='flex gap-3'>
            <img src={fb} alt="Facebook" height={37} width={37} />
            <img src={insta} alt="Instagram" height={37} width={37} />
            <img src={twit} alt="Twitter" height={37} width={37} />
          </div>
          <p className='mt-4 text-start'>
            Find us on the above social media platforms
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
