import React from 'react'
import CountUp from 'react-countup';
import { MdCastForEducation } from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";
import { FaDiscourse } from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa";

function AutoNumberSection() {
  return (
    <>
      <div className='w-full flex-col md:flex-row  dark:bg-[#0e0e0e] md:gap-5 text-white bg-indigo-600 flex md:justify-center md:items-center '>
        <div className='w-72 h-40 flex justify-around items-center group'>
          {/* left  */}
          <div className="flex relative w-20">
            <GrCloudComputer className=' z-[1] text-[55px] group-hover:text-[60px] transitionAll' />
            <div className='bg-blue-400 w-10 top-5 left-9 group-hover:w-12 group-hover:h-12  h-10 absolute rounded-full transitionAll'></div>
           
          </div>
          {/* right  */}
          <div className=" ml-2 relative">
            <h2 className='font-extrabold text-3xl'> <CountUp end={15000}  enableScrollSpy="true" />+</h2>
            <p>Course & videos</p>
          </div>
        </div>
        <div className='w-72 h-40  flex justify-around items-center group'>
          {/* left  */}
          <div className="flex relative w-20">
            <MdCastForEducation className=' z-[1] text-[55px] group-hover:text-[60px] transitionAll' />
            <div className='bg-blue-400 w-10 top-5 left-9 group-hover:w-12 group-hover:h-12  h-10 absolute rounded-full transitionAll'></div>
          </div>
          {/* right  */}
          <div className=" ml-2 relative">
            <h2 className='font-extrabold text-3xl'><CountUp end={5000} enableScrollSpy="true" />+</h2>
            <p>Courses Includes</p>
          </div>
        </div>
        <div className='w-72 h-40  flex justify-around items-center group'>
          {/* left  */}
          <div className="flex relative w-20">
            <FaDiscourse className=' z-[1] text-[55px] group-hover:text-[60px] transitionAll' />
            <div className='bg-blue-400 w-10 top-5 left-9 group-hover:w-12 group-hover:h-12  h-10 absolute rounded-full transitionAll'></div>
          </div>
          {/* right  */}
          <div className=" ml-2 relative">
            <h2 className='font-extrabold text-3xl'><CountUp end={10000} enableScrollSpy="true" />+</h2>
            <p>Course & videos</p>
          </div>
        </div>
        <div className='w-72 h-40  flex justify-around items-center group'>
          {/* left  */}
          <div className="flex relative w-20">
            <FaHandPointer className=' z-[1] text-[55px] group-hover:text-[60px] transitionAll' />
            <div className='bg-blue-400 w-10 top-5 left-9 group-hover:w-12 group-hover:h-12  h-10 absolute rounded-full transitionAll'></div>
          </div>
          {/* right  */}
          <div className=" ml-2 relative">
            <h2 className='font-extrabold text-3xl'><CountUp end={1500} enableScrollSpy="true" />+</h2>
            <p>100% safe </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default AutoNumberSection