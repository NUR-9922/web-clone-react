import React from 'react'
import footerData from "../../data/footerData";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footer() {
     return (
       <div className="flex flex-col md:flex-row overflow-hidden relative text-white gap-10 w-full pb-20 dark:bg-[#1d1d1d] bg-indigo-600  px-4 pt-10">
         {/* First Column */}
         <div className="mb-10 md:mb-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
           <div className="w-full md:w-72 h-auto md:h-60">
             <div className="w-32">
               <img
                 className="w-full"
                 src="/public/assets/asset 1.png"
                 alt=""
               />
             </div>
             <p className="text-sm mt-5 tracking-wide">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod
               tempor incididunt labore dolore magna aliqua consectetur
               adipiscing elit sed do labor.
             </p>
             <div className="flex items-center gap-3 mt-6">
               <h2 className="font-semibold">Follow US</h2>
               <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                 {" "}
                 <GrFacebookOption size={20} className="text-blue-400" />{" "}
               </div>
               <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                 {" "}
                 <FaTwitter size={20} className="text-blue-400" />{" "}
               </div>
               <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                 {" "}
                 <FaInstagram size={20} className="text-blue-400" />{" "}
               </div>
             </div>
           </div>
         </div>
         <div className="flex flex-col md:flex-row md:w-full lg:w-2/3">
           <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
             <h2 className="text-2xl font-bold">
               {footerData[0]?.headingName}
               <div className="w-20 h-1 bg-[#4d4e7f] mt-2">
                 {" "}
                 <div className="w-[50%] h-full bg-blue-400"></div>
               </div>
             </h2>
             {footerData[0]?.list.map((item) => (
               <NavLink to={item.path}>
                 <div className="mt-5 flex items-center gap-2 text-base transitionAll hover:tracking-wide cursor-pointer hover:text-blue-400 ">
                   <div className="w-2 h-2 bg-blue-400"></div>
                   {item.listName}
                 </div>
               </NavLink>
             ))}
           </div>
           <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
             <h2 className="text-2xl font-bold">
               {footerData[1]?.headingName}
               <div className="w-20 h-1 bg-[#4d4e7f] mt-2">
                 {" "}
                 <div className="w-[50%] h-full bg-blue-400"></div>
               </div>
             </h2>
             {footerData[1]?.list.map((item) => (
               <NavLink to={item.path}>
                 <div className="mt-5 flex items-center gap-2 text-base transitionAll hover:tracking-wide cursor-pointer hover:text-blue-400 ">
                   <div className="w-2 h-2 bg-blue-400"></div>
                   {item.listName}
                 </div>
               </NavLink>
             ))}
           </div>
           <div className="w-full md:w-1/2 lg:w-1/3">
             <h2 className="text-2xl font-bold">
               {footerData[2]?.headingName}
               <div className="w-20 h-1 bg-[#4d4e7f] mt-2">
                 {" "}
                 <div className="w-[50%] h-full bg-blue-400"></div>
               </div>
             </h2>
             <div className="mt-5 flex items-center gap-2 text-base transitionAll hover:tracking-wide cursor-pointer hover:text-blue-400 ">
               <div className="w-2 h-2 bg-blue-400"></div>
               <div>Location</div>
             </div>
             <p className="text-sm">{footerData[2]?.list[0].subHeading}</p>
             <div className="mt-5 flex items-center gap-2 text-base transitionAll hover:tracking-wide cursor-pointer hover:text-blue-400 ">
               <div className="w-2 h-2 bg-blue-400"></div>
               <div>Email</div>
             </div>
             <p className="text-sm">{footerData[2]?.list[1].subHeading}</p>
             <div className="mt-5 flex items-center gap-2 text-base transitionAll hover:tracking-wide cursor-pointer hover:text-blue-400 ">
               <div className="w-2 h-2 bg-blue-400"></div>
               <div>Number</div>
             </div>
             <p className="text-sm">{footerData[2]?.list[2].subHeading}</p>
           </div>
         </div>

         <h1 className="absolute bottom-5 text-center w-full">
           Copyright @2024 Nuralam mondal{" "}
         </h1>
       </div>
     );
}

export default Footer