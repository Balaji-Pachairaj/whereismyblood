import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/403e684b-862f-444c-a587-8e2ef289ddae.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
     const [isListOpen, setIsListOpen] = useState(false);

     const openList = () => {
          setIsListOpen(true);
     };
     const closeList = () => {
          setIsListOpen(false);
     };

     return (
          <>
               <div className="w-full flex flex-row h-[100px] bg-primary">
                    <div className="  lg:w-1/3 w-2/3  h-full flex flex-row justify-center items-center gap-8">
                         <div className=" w-[80px] h-[80px] ">
                              <img src={logo} className=" w-full h-full"  alt="feature" />
                         </div>
                         <h1 className=" text-[#fff] font-bold font-roboto text-[28px]">
                              Health  opti Pro
                         </h1>
                    </div>

                    <div className=" lg:w-2/3  h-full hidden lg:flex flex-row  justify-evenly items-center">
                         <Link
                              to="/onlineconsult"
                              className="text-[#fff] font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat  hover:scale-105 duration-50"
                         >
                              Book an Appointment
                         </Link>
                         <Link
                              to="/aboutus"
                              className="text-[#fff] font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat  hover:scale-105 duration-50"
                         >
                              Find Blood
                         </Link>
                         <Link
                              to="/becomeablooddonor"
                              className="text-[#fff] font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat  hover:scale-105 duration-50"
                         >
                              Became a Blood donor
                         </Link>
                         <Link
                              to="/aboutus"
                              className="text-[#fff] font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat  hover:scale-105 duration-50"
                         >
                              About Us
                         </Link>
                         <div className=" flex flex-row gap-3">
                              <Link
                                   to="/findblood"
                                   className=" border-2 p-2 rounded-xl text-black bg-[#fff] font-bold font-montserrat text-[14px] hover:cursor-pointer     hover:scale-105 duration-50"
                              >
                                   Sign up
                              </Link>
                              <Link
                                   to="/findblood"
                                   className=" border-2 p-2 rounded-xl text-[#fff] font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat   hover:scale-105 duration-50"
                              >
                                   Log in
                              </Link>
                         </div>
                    </div>
                    <div className=" lg:hidden flex flex-row justify-center items-center  w-1/3 ">
                         {isListOpen ? (
                              <button
                                   onClick={closeList}
                                   className="border-2 p-1 rounded-lg text-[32px] hover:cursor-pointer"
                              >
                                   <AiOutlineClose color={"white"} />
                              </button>
                         ) : (
                              <button
                                   onClick={openList}
                                   className=" border-2 p-1 rounded-lg text-[32px] hover:cursor-pointer"
                              >
                                   <GiHamburgerMenu color={"white"} />
                              </button>
                         )}
                    </div>
               </div>
               {isListOpen && (
                    <div className=" lg:hidden flex flex-col  w-full h-max ">
                         <div className=" border-b-2 border-[#B4B4B3] ps-4 w-full h-[60px] bg-opacity-40 bg-[#B4B4B3] flex flex-col justify-center">
                              <Link
                                   to="/bookanappointment"
                                   className="text-black font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat  hover:underline duration-50"
                              >
                                   Book an Appointment
                              </Link>
                         </div>
                         <div className=" border-b-2 border-[#B4B4B3] ps-4 w-full h-[60px] bg-opacity-40 bg-[#B4B4B3] flex flex-col justify-center">
                              <Link
                                   to="/becomeadonor"
                                   className="text-black font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat  hover:underline duration-50"
                              >
                                   Find Blood
                              </Link>
                         </div>
                         <div className=" border-b-2 border-[#B4B4B3] ps-4 w-full h-[60px] bg-opacity-40 bg-[#B4B4B3] flex flex-col justify-center">
                              <Link
                                   to="/becomeadonor"
                                   className="text-black font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat  hover:underline duration-50"
                              >
                                   Become a Blood donor
                              </Link>
                         </div>
                         <div className=" border-b-2 border-[#B4B4B3] ps-4 w-full h-[60px] bg-opacity-40 bg-[#B4B4B3] flex flex-col justify-center">
                              <Link
                                   to="/aboutus"
                                   className="text-black font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat  hover:underline duration-50"
                              >
                                   About Us
                              </Link>
                         </div>

                         <div className=" border-b-2 border-[#B4B4B3] ps-4 w-full h-[60px] bg-opacity-40 bg-[#B4B4B3] flex flex-col justify-center">
                              <Link
                                   to="/findblood"
                                   className=" text-center w-[100px] border-2 p-2 rounded-xl text-black bg-[#fff] font-bold font-montserrat text-[14px] hover:cursor-pointer     hover:scale-105 duration-50"
                              >
                                   Sign up
                              </Link>
                         </div>
                         <div className=" border-b-2 border-[#B4B4B3] ps-4 w-full h-[60px] bg-opacity-40 bg-[#B4B4B3] flex flex-col justify-center">
                              <Link
                                   to="/findblood"
                                   className=" text-center w-[100px] border-2 border-black p-2 rounded-xl text-[#000] font-bold font-montserrat text-[14px] hover:cursor-pointer  hover:text-differenat   hover:scale-105 duration-50"
                              >
                                   Log in
                              </Link>
                         </div>
                    </div>
               )}
          </>
     );
};

export default NavBar;
