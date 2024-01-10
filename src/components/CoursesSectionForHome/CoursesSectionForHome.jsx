import React from "react";
import CourseCardData from "/src/data/CourseCardData/CourseCardData";
function CoursesSectionForHome() {
  return (
    <div>
      {/* course cards */}
      <div className="w-full mt-20 mb-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Course 1 */}

        {CourseCardData.slice(0, 8).map((item) => (
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
    </div>
  );
}

export default CoursesSectionForHome;
