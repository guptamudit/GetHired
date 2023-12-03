import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Looking for <span className="text-[#FF9209]">New Job?</span>
      </h1>
      <p className="text-lg text-black/70 ">
        Thousands of jobs in the Engineering, Technology sector are waiting for
        you.
      </p>
      <p className="text-lg text-black/70 mb-8">
        <span className="text-[#FF9209]">What are you waiting for?</span> Apply
        now from the jobs appearing below!
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-1 gap-4">
          <div className="flex md:rounded-e-md rounded ring-1 ring-inset  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="Job Title"
              placeholder="What you are looking for?"
              id="title"
              onChange={handleInputChange}
              value={query}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
