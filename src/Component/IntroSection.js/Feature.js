import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
     return (
          <div className=" mt-12 w-full  flex flex-row justify-evenly flex-wrap  gap-y-8">
               <Link
                    to="/bookanappointment"
                    className=" w-[200px] h-[290px] rounded-lg overflow-hidden bg-slate-500  border-1 shadow-featureboxshadow"
               >
                    <div className=" w-full h-[180px]  bg-primary border-b-2 ">
                         <img
                              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
                              className=" w-full h-full"
                         />
                    </div>
                    <div className=" w-full h-[110px] p-2 bg-[#fff]">
                         <h2 className=" text-[20px]  ">
                              Find Doctor near you
                         </h2>
                         <p className="mt-2 text-gray-600 text-[14px] text-center">
                              Confirmed Appointments
                         </p>
                    </div>
               </Link>
               <Link
                    to="/bookanappointment"
                    className=" w-[200px] h-[290px] rounded-lg overflow-hidden bg-slate-500  border-1 shadow-featureboxshadow"
               >
                    <div className=" w-full h-[180px]   bg-primary border-b-2 ">
                         <img
                              src="https://tse3.mm.bing.net/th?id=OIP.mdrn35gJWGuwpjWJpXX9BwHaIK&pid=Api&P=0&h=180"
                              className=" w-full h-full"
                         />
                    </div>
                    <div className=" w-full h-[110px] p-2 bg-[#fff]">
                         <h2 className=" text-[20px]  ">
                              Get blood from Our Community
                         </h2>
                         <p className="mt-2 text-gray-600 text-[14px] text-center">
                              Saving life
                         </p>
                    </div>
               </Link>
               <Link
                    to="/bookanappointment"
                    className=" w-[200px] h-[290px] rounded-lg overflow-hidden bg-slate-500  border-1 shadow-featureboxshadow"
               >
                    <div className=" w-full h-[180px]   bg-primary border-b-2 ">
                         <img
                              src="https://tse2.mm.bing.net/th?id=OIP.i2RuhXH195IEsCBWGZK9WgHaE8&pid=Api&P=0&h=180"
                              className=" w-full h-full"
                         />
                    </div>
                    <div className=" w-full h-[110px] p-2 bg-[#fff]">
                         <h2 className=" text-[20px]  ">
                              Something medical Emergency 
                         </h2>
                         <p className="mt-2 text-gray-600 text-[14px] text-center">
                             Book now
                         </p>
                    </div>
               </Link>
               <Link
                    to="/bookanappointment"
                    className=" w-[200px] h-[290px] rounded-lg overflow-hidden bg-slate-500  border-1 shadow-featureboxshadow"
               >
                    <div className=" w-full h-[180px]   bg-primary border-b-2 ">
                         <img
                              src="https://tse4.mm.bing.net/th?id=OIP.xqL7BfJ9y9fdandRTjpA6AHaEK&pid=Api&P=0&h=180"
                              className=" w-full h-full"
                         />
                    </div>
                    <div className=" w-full h-[110px] p-2 bg-[#fff]">
                         <h2 className=" text-[20px]  ">
                                Community is in need of you
                         </h2>
                         <p className="mt-2 text-gray-600 text-[14px] text-center">
                             Donate blood
                         </p>
                    </div>
               </Link>
          </div>
     );
};

export default Feature;
