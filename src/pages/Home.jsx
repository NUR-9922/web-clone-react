import React from 'react'
import Hero from '../components/Hero/Hero'
import AutoNumberSection from '../components/AutoNumberSection/AutoNumberSection.jsx'
import Footer from '../components/Footer/Footer.jsx'
import CoursesSectionForHome from '../components/CoursesSectionForHome/CoursesSectionForHome.jsx'

function Home() {
     return (
          <div className=' w-full  dark:bg-darkGray relative z-[10]'>
               <Hero />
               <AutoNumberSection />
               <CoursesSectionForHome />
          </div>
     )
}

export default Home