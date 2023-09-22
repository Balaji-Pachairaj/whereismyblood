import React from "react";

const obj = {
     imageUrl:
          "https://tse2.mm.bing.net/th?id=OIP.t6VxhHnL4XdyJaJhzQLPywHaEt&pid=Api&P=0&h=180",
     text: "Quality Doctors",
};




const ConsultDoctor = () => {
     return (
          <div className=" w-full flex flex-row justify-center mt-8">
               <div className=" flex lg:flex-row flex-col lg:w-[70%]  w-[90%]  border-2 border-primary rounded-xl shadow-featureboxshadow overflow-hidden">
                    <div className=" lg:w-1/2 w-full  p-6 border-r-2 border-primary">
                         <div className=" w-full ">
                              <h1 className=" text-[32px] font-roboto font-bold">
                                   Consult with a Doctor
                              </h1>
                         </div>
                         <div className=" w-full mt-8 flex flex-col gap-4">
                              <div className=" flex flex-col">
                                   <p className=" text-[18px]">
                                        Patient name :
                                   </p>
                                   <input
                                        type="text"
                                        placeholder="Enter name for prescriptions"
                                        className="mt-4 ps-3 w-[90%] border-2 h-[52px] rounded-lg"
                                
                                   />
                              </div>
                              <div className=" flex flex-col">
                                   <p className=" text-[18px]">Phone no :</p>
                                   <input
                                        type="text"
                                        placeholder="Enter mobile number "
                                        className="mt-4 ps-3 w-[90%] border-2 h-[52px] rounded-lg"
                                   />
                              </div>
                              <div className=" flex flex-col">
                                   <p className=" text-[18px]">
                                        Verification Code will be sent to mobile
                                        no :
                                   </p>
                                   <input
                                        type="text"
                                        placeholder="Enter OTP that sent to mobile number "
                                        className="mt-4 ps-3 w-[90%] border-2 h-[52px] rounded-lg"
                                   />
                              </div>
                         </div>
                         <div className=" w-full mt-8">
                              <button className=" w-[150px] border-2 border-grey h-[52px] text-[18px] font-montserrat font-bold text-gray-500 rounded-lg cursor-not-allowed">
                                   Continue
                              </button>
                         </div>
                    </div>
                    <div className=" lg:w-1/2 w-full h-full lg:flex flex-row justify-center items-center hidden  ">
                         <div className=" flex flex-col">
                              <div className=" w-[200px] h-[200px] ">
                                   <img
                                        src={obj.imageUrl}
                                        className=" w-full h-full" 
                                        alt="feature consult"
                                   />
                              </div>
                              <p className=" text-[18px] mt-5 text-center">
                                   {obj.text}
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ConsultDoctor;
