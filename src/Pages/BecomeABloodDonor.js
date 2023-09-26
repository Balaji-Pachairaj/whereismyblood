import React from "react";

const optionarr = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BecomeABloodDonor = () => {
     return (
          <div className="  w-full h-min flex flex-row justify-center mb-[300px]">
               <div className="mt-[40px] flex flex-col items-center lg:w-[60%]  w-[90%]  rounded-xl border-2 overflow-hidden p-5 pb-[100px]">
                    <h1 className=" font-montserrat text-[24px] font-bold ">
                         Become a{" "}
                         <span className=" text-[red]">Blood donor</span>
                    </h1>
                    <p className=" text-[12px] mt-[20px]">
                         {` Just let’s us know that you’re willing to save
                              lives. We’ll send you blood requests in your
                              locality through Whatsapp. `}
                    </p>
                    <div className=" w-full mt-[40px] flex flex-col items-center gap-4">
                         <input
                              type="text"
                              placeholder="Your Name"
                              className=" w-[90%] h-[55px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                         />
                         <div className=" flex flex-row w-[90%] items-center justify-between ps-4 pe-4 gap-8">
                              <p className=" text-[18px] text-[#8E8E8E]">
                                   Date Of Birth :
                              </p>
                              <input
                                   type="Date"
                                   placeholder="Your Name"
                                   className=" flex-1 h-[55px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                              />
                         </div>
                         <select className=" w-[90%] h-[55px]  border-b-2 p-4">
                              <option
                                   value="defalut"
                                   className=" text-[#8E8E8E]"
                              >
                                   Your Blood Group
                              </option>

                              {optionarr.map((group) => {
                                   return (
                                        <option
                                             value={group}
                                             className=" text-[#8E8E8E]"
                                        >
                                             {group}
                                        </option>
                                   );
                              })}
                         </select>

                         <input
                              type="text"
                              placeholder="Street"
                              className=" w-[90%] h-[55px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                         />

                         <div className=" w-[90%] flex flex-row justify-between">
                              <input
                                   type="text"
                                   placeholder="City"
                                   className=" w-[60%] h-[55px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                              />{" "}
                              <input
                                   type="text"
                                   placeholder="Postal code"
                                   className=" w-[30%] h-[55px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                              />
                         </div>

                         <input
                              type="text"
                              placeholder="Contact No"
                              className=" w-[90%] h-[55px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                         />
                         <input
                              type="text"
                              placeholder="Email"
                              className=" w-[90%] h-[55px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                         />

                         <input
                              type="text"
                              placeholder="About yourself"
                              className=" w-[90%] h-[55px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                         />

                         <div className="  flex flex-col w-[90%] item-start gap-4 ps-4 border-b-2 pb-4">
                              <p className=" text-[16px] mt-[20px]">
                                   {`Have you ever tested positive for HIV?  `}
                              </p>
                              <div className=" flex flex-row items-center gap-8">
                                   <input
                                        type="checkbox"
                                        className=" w-[15px] h-[15px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                                   />
                                   <p>Yes</p>
                              </div>
                              <div className=" flex flex-row items-center gap-8">
                                   <input
                                        type="checkbox"
                                        className=" w-[15px] h-[15px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                                   />
                                   <p>No</p>
                              </div>
                         </div>
                         <div className="  flex flex-col w-[90%] item-start gap-4 ps-4 mt-4">
                              <div className=" flex flex-row items-center gap-8">
                                   <input
                                        type="checkbox"
                                        className=" w-[15px] h-[15px] p-4 border-3 text-[18px] border-b-2 border-[#Grey_line] placeholder:text-[#8E8E8E] "
                                   />
                                   <p>
                                        I have read and agree the Terms &
                                        Service and Privacy Policy
                                   </p>
                              </div>
                         </div>

                         <div className="  flex flex-col items-center w-[90%] item-start gap-4 ps-4 mt-8">
                              <button className=" w-[90%] h-[60px] text-[18px] bg-red-600 rounded-lg font-bold text-white">
                                   Become a Blood Donor
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default BecomeABloodDonor;
