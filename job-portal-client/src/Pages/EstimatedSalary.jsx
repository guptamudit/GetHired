import React, { useEffect, useState } from "react";
import SalaryPageHeader from "../components/SalaryPageHeader";

const EstimatedSalary = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    fetch(`https://get-hired-eta.vercel.app/all-jobs`)
      .then((res) => res.json())
      .then((data) => setSalary(data));
  }, [searchText]);
  // console.log(searchText);
  const handleSearch = () => {
    const filter = salary.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    // console.log(filter);
    setSalary(filter);
    // console.log(filter);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* imported from components */}
      <SalaryPageHeader title={"Estimated Salary"} path={"Salary"} />
      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2 flex gap-4 justify-center">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue text-white font-semibold px-8 py-2 rounded mb-4"
          >
            Search
          </button>
        </div>
      </div>

      {/* salary display card */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-12 my-12 items-center">
        {salary.map((data) => (
          <div key={data._id} className="shadow px-4 py-8 ">
            <h4 className="font-semibold text-xl">
              {data.jobTitle} @
              <span className="text-[#6B240C]">{data.companyName}</span>
            </h4>
            <p className="my-2 font-medium text-blue text-lg">
              Estimated Salary ${data.minPrice}k - ${data.maxPrice}k per year
            </p>
            <div className="flex  flex-wrap gap-4 ">
              <a href="/" className="underline">
                Job Openings
              </a>
              <a href="/" className="underline">
                Skills
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstimatedSalary;
