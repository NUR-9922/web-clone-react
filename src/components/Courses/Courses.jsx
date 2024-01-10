import React, { useState } from "react";
import CourseCardData from "/src/data/CourseCardData/CourseCardData";
import headerCategoriesData from "/src/data/headerCategoriesData/headerCategoriesData";


const Courses = () => {
     const [selectedOption, setSelectedOption] = useState(false);
     // searching logic 
     const [searchTerm, setSearchTerm] = useState("");
     const filterData = CourseCardData.filter((course) => {
          return course.courseType.toLowerCase().includes(searchTerm.toLowerCase());
     })

     const handleSearch = () => {
          // setCurrentPage(1);
     };
     // pagination logic 
     const itemsPerPage = 8;
     const [currentPage, setCurrentPage] = useState(1);
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const totalPages = Math.ceil(filterData.length / itemsPerPage);
     const handlePageChange = (newPage) => {
          setCurrentPage(newPage);
     };

     const scrollTop = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
     }

     return (
          <div className="w-full  px-14 dark:bg-darkGray  pb-10">
               <div className="flex justify-between items-center pt-20 flex-col md:flex-row">
                    <p className="text-gray-700  font-semibold text-base dark:text-white">
                         We found{" "}
                         <span className="text-blue-400">{CourseCardData.length}</span>{" "}
                         courses available for you
                    </p>

                    <div className="flex mt-5 md:mt-0 items-center  relative ">
                         <input
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-72  shadow-xl h-10 outline-none rounded-l-lg px-2"
                              placeholder="Search Course"
                              type="text"
                         />
                         <button
                              onClick={handleSearch}
                              className="w-20 shadow-xl h-10 rounded-r-lg  px-2 bg-blue-400 text-white"
                         >
                              <span></span> Search{" "}
                         </button>
                         {/* search results will be shown here */}
                         <div className="absolute top-12 left-0 w-full bg-gray-100 rounded-lg"></div>
                    </div>
               </div>

               {/* course cards */}
               <div className="w-full mt-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Course 1 */}

                    {filterData.slice(startIndex, endIndex).map((item) => (
                         <div className="pb-5 hover:mt-[-5px] transitionAll  h-96 shadow-xl dark:bg-black cursor-pointer overflow-hidden rounded-sm">
                              <div className="w-full h-1/2">
                                   <img
                                        className="w-full h-full object-cover"
                                        src={item?.courseImageUrl}
                                        alt=""
                                   />
                              </div>
                              <div className="flex justify-between px-4 pt-3 ">
                                   {/* Course type */}
                                   <div className="min-w-[4rem] px-2 h-7 text-[10px] bg-[#e6f6fc] dark:bg-[#0e1e24] text-blue-400 flex flex-col justify-center items-center capitalize">
                                        {item?.courseType}
                                   </div>
                                   {/* course price  */}
                                   <div className="  text-blue-400 flex flex-col justify-center items-center font-bold">
                                        {item?.coursePrice}
                                   </div>
                              </div>
                              {/* course heading  */}
                              <div className="px-4 pt-3 transitionAll hover:text-blue-400">
                                   <h1 className="text-base dark:text-white font-bold">
                                        {item?.courseHeading}
                                   </h1>
                              </div>
                              {/* course duration and lectures */}
                              <div className="flex justify-between px-4 pt-3">
                                   <div className="text-sm text-gray-500 dark:text-white flex gap-2">
                                        {" "}
                                        <span className="text-blue-400">
                                             <i class="ri-time-line"></i>
                                        </span>{" "}
                                        {item?.courseDuration}
                                   </div>
                                   <div className="text-sm text-gray-500 dark:text-white flex gap-2">
                                        {" "}
                                        <span className="text-blue-400">
                                             <i class="ri-vidicon-line"></i>
                                        </span>
                                        {item?.courseLectures}
                                   </div>
                              </div>
                              {/* rating and shopimg batten */}
                              <div className="flex justify-between px-4 pt-3">
                                   <div className="flex items-center gap-2">
                                        <div className="text-sm text-gray-500 dark:text-white">
                                             {" "}
                                             <span className="text-blue-400">
                                                  <i class="ri-star-fill"></i>
                                             </span>{" "}
                                             {item?.courseRating}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-white">
                                             {" "}
                                             <span className="text-blue-400">
                                                  <i class="ri-user-line"></i>
                                             </span>{" "}
                                             {item?.totalCourseSelling}
                                        </div>
                                        {/* by naw btn  */}
                                   </div>
                                   <button className="text-sm text-white bg-blue-400 w-24 gap-2 rounded-sm h-10 flex justify-center items-center dark:text-white">
                                        {" "}
                                        Bye Naw{" "}
                                        <span>
                                             <i class="ri-shopping-cart-line"></i>
                                        </span>
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>
               {/* pagination will be shown here */}
               <div className="w-full flex gap-2 justify-center h-20 mt-20 text-gray-700 font-bold dark:text-white">
                    <div
                         onClick={() => [
                              handlePageChange(Math.max(1, currentPage - 1)),
                              scrollTop()
                         ]}
                         className={`w-10 h-10 rounded-full border-2 flex justify-center items-center cursor-pointer ${currentPage === 1 && 'opacity-50 cursor-not-allowed'
                              }`}
                    >
                         <i className="ri-arrow-left-s-line"></i>
                    </div>
                    {[...Array(totalPages).keys()].map((page) => (
                         <div
                              key={page}
                              onClick={() => {
                                   handlePageChange(page + 1)
                                   scrollTop()
                              }}
                              className={`w-10 h-10 rounded-full border-2 flex justify-center items-center cursor-pointer ${currentPage === page + 1 && "bg-blue-400 text-white"
                                   }`}
                         >
                              {page + 1}
                         </div>
                    ))}
                    <div
                         onClick={() => {
                              scrollTop(), handlePageChange(Math.min(currentPage + 1, totalPages))
                         }}
                         className={`w-10 h-10 rounded-full border-2 flex justify-center items-center cursor-pointer ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'
                              }`}
                    >
                         <i className="ri-arrow-right-s-line"></i>
                    </div>
               </div>
          </div>
     );
};

export default Courses;
