import React from "react";
import { Link } from "react-router-dom";

const Online = () => {
     return (
          <div className=" w-full  mt-[150px] pt-[100px]  bg-videoPrimary ">
               <div className=" w-full ps-4 pe-4">
                    <h1 className=" font-roboto md:text-[36px] text-[24px] font-bold text-center text-white">
                         Consult top doctors online for any health concern
                    </h1>
                    <p className=" md:text-[18px] text-[14px] text-center text-white">
                         Private online consultations with verified doctors in
                         all specialists
                    </p>
               </div>

               <div className=" flex flex-row justify-evenly w-full mt-[120px] ps-8 pe-8 flex-wrap gap-y-8 ">
                    <div className=" w-[100px]">
                         <div className=" w-[100px] h-[100px] bg-black rounded-[50px] overflow-hidden">
                              <img
                                   src="https://tse3.mm.bing.net/th?id=OIP.EuF8K6ObEaT_HIA_eAj7xQHaHa&pid=Api&P=0&h=180"
                                   className=" w-full h-full"
                                   alt="feature"
                              />
                         </div>
                         <div className="w-full text-center">
                              <p className=" text-[16px] text-white">
                                   Pregnancy doubts
                              </p>
                              <Link
                                   className="text-[16px] text-[#614BC3] font-bold hover:underline"
                                   to="onlineconsult"
                              >
                                   Consult Now
                              </Link>
                         </div>
                    </div>
                    <div className=" w-[100px]">
                         <div className=" w-[100px] h-[100px] bg-black rounded-[50px] overflow-hidden">
                              <img
                                   src="https://tse2.mm.bing.net/th?id=OIP.vqbtEf0PEEPfVjNjLFa_agHaGM&pid=Api&P=0&h=180"
                                   className=" w-full h-full"
                                   alt="feature"
                              />
                         </div>
                         <div className="w-full text-center">
                              <p className=" text-[16px] text-white">
                                   Acne, pimple or skin issues
                              </p>
                              <Link
                                   className="text-[16px] text-[#614BC3] font-bold hover:underline"
                                   to="onlineconsult"
                              >
                                   Consult Now
                              </Link>
                         </div>
                    </div>
                    <div className=" w-[100px]">
                         <div className=" w-[100px] h-[100px] bg-black rounded-[50px] overflow-hidden">
                              <img
                                   src="https://tse1.mm.bing.net/th?id=OIP.AH57s5CkPYptBPF5atfGugHaE1&pid=Api&P=0&h=180"
                                   className=" w-full h-full"
                                   alt="feature"
                              />
                         </div>
                         <div className="w-full text-center">
                              <p className=" text-[16px] text-white">
                                   Cold, cough or fever
                              </p>
                              <Link
                                   className="text-[16px] text-[#614BC3] font-bold hover:underline"
                                   to="onlineconsult"
                              >
                                   Consult Now
                              </Link>
                         </div>
                    </div>
                    <div className=" w-[100px]">
                         <div className=" w-[100px] h-[100px] bg-black rounded-[50px] overflow-hidden">
                              <img
                                   src="https://tse2.mm.bing.net/th?id=OIP.7Oo7KhdrAmqSZslEVF1xwAHaFV&pid=Api&P=0&h=180"
                                   className=" w-full h-full"
                                   alt="feature"
                              />
                         </div>
                         <div className="w-full text-center">
                              <p className=" text-[16px] text-white">
                                   Child not feeling well
                              </p>
                              <Link
                                   className="text-[16px] text-[#614BC3] font-bold hover:underline"
                                   to="onlineconsult"
                              >
                                   Consult Now
                              </Link>
                         </div>
                    </div>
                    <div className=" w-[100px]">
                         <div className=" w-[100px] h-[100px] bg-black rounded-[50px] overflow-hidden">
                              <img
                                   src="https://tse3.mm.bing.net/th?id=OIP.tguN_tJTWxx5MyuM8LhbdQAAAA&pid=Api&P=0&h=180"
                                   className=" w-full h-full"
                                   alt="feature"
                              />
                         </div>
                         <div className="w-full text-center">
                              <p className=" text-[16px] text-white">
                                   Depression or anxiety
                              </p>
                              <Link
                                   className="text-[16px] text-[#614BC3] font-bold hover:underline"
                                   to="onlineconsult"
                              >
                                   Consult Now
                              </Link>
                         </div>
                    </div>
               </div>

               <div className=" w-full flex flex-row justify-center mt-[50px] pb-[50px]">
                    <button className=" border-2 border-white hover:border-videoPrimary hover:bg-white hover:text-videoPrimary duration-500 text-white p-2 rounded-lg ">
                         View All specialists
                    </button>
               </div>
          </div>
     );
};

export default Online;

// Period doubts or Pregnancy
// Period doubts or Pregnancy
// CONSULT NOW
// Acne, pimple or skin issues
// Acne, pimple or skin issues
// CONSULT NOW
// Performance issues in bed
// Performance issues in bed
// CONSULT NOW
// Cold, cough or fever
// Cold, cough or fever
// CONSULT NOW
// Child not feeling well
// Child not feeling well
// CONSULT NOW
// Depression or anxiety
// Depression or anxiety
// CONSULT NOW
// Book an appoi
