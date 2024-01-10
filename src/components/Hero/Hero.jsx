import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function Hero() {
     return (
          <div className=' flex-col lg:flex-row w-full dark:bg-darkGray bg-gray-100 flex relative overflow-hidden'>
               {/* hero left  */}
               <div className='w-full lg:w-1/2 h-full px-4 pt-9 flex flex-col '>
                    <div className="heroLeftBackground"><img src="/public/assets/asset 9.png" alt="" /></div>
                    <p className='text-blue-400'>FOR A BETTER FUTURE</p>
                    <h2 className='text-[2rem] leading-[2.5rem] md:text-[4.5vw] md:leading-[4rem] pt-4 font-extrabold dark:text-white text-indigo-600'>Discover the most <br />
                      exciting online courses
                     </h2>
                     <p className='dark:text-white pt-4 text-gray-700'>Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The Ellen
                      can offer you to enjoy the beauty of eLearning!
                     </p>
                     {/* search box  */}
                     <div className='flex w-full'>
                         <input className=' w-[70%] md:w-[70%] p-3 mt-7 outline-none border-none'  type="text" name="" id="" placeholder=' Search'/>
                         {/* search btn  */}
                         <div className=' w-[30%] md:w-[20%]'><button className='bg-blue-400 text-white w-full p-3 mt-7 flex justify-center items-center gap-2'> <CiSearch size={20}  className='font-extrabold'/> Search</button></div>
                     </div>
                     {/* popular search */}
                     <div className='flex pt-4 gap-2 dark:text-white items-center flex-wrap'>
                       <div className='text-[1rem] md:text-xl word   '>  <p className='text-indigo-600 dark:text-white'>Popular search:</p></div>
                         <Link to={""}>
                         <p className='underline hover:tracking-wide hover:text-blue-400 transition-all duration-200 ease-linear'> Design,</p>
                         </Link>
                         <Link to={""}>
                         <p className='underline hover:tracking-wide hover:text-blue-400 transition-all duration-200 ease-linear'> Development, </p>
                         </Link>
                         <Link to={""}>
                         <p className='underline hover:tracking-wide hover:text-blue-400 transition-all duration-200 ease-linear'> Marketing, </p>
                         </Link>
                         <Link to={""}>
                         <p className='underline hover:tracking-wide hover:text-blue-400 transition-all duration-200 ease-linear'> Affiliate</p>
                         </Link>

                     </div>
               </div>
               {/* hero right part  */}
               <div className='w-full lg:w-1/2 relative h-full flex justify-center items-center'>
                    {/* background image parts for hero right part  */}
                    <div className='absolute left-0 md:left-10 top-10'><img src="/public/assets/asset 7.png" alt="" /></div>
                    <div className='absolute  top-24 w-[70%] '><img src="/public/assets/asset 5.png" alt="" /></div>
                    <div className='absolute right-10 top-10'><img src="/public/assets/asset 8.png" alt="" /></div>
                    <div className='w-[80%] h-full  relative '><img src="/public/assets/asset 4.png" alt="" /></div>
               </div>
          </div>
     )
}

export default Hero