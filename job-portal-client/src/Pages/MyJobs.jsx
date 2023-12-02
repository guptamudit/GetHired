import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isloading, setIsLoading] = useState(true);

  // set current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  //set email id when user log in
  const [loggedin, setLoggedin] = useState("");

  //firebase authentication
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        setLoggedin(user.email);
      } else {
        setLoggedin("");
      }
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/myjobs/${loggedin}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, [searchText]);

  //user is there or not
  const [checkjobs, setCheckjobs] = useState("hidden");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCheckjobs("hidden");
      } else {
        setCheckjobs("flex");
      }
    });
  }, []);

  // pagination next and previous wala

  const indexLastItems = currentPage * itemsPerPage;
  const indexFirstItems = indexLastItems - itemsPerPage;
  const currentJobs = jobs.slice(indexFirstItems, indexLastItems);

  // next button and previous button
  const nextPage = () => {
    if (indexLastItems < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    // console.log(searchText);

    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    // console.log(filter);
    setJobs(filter);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Job Deleted Succesfully!");
        }
      });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* banner */}
      <div>
        <h1 className="text-center p-4 text-4xl font-semibold">
          All My Posted Jobs
        </h1>
        <div className="p-2 text-center mb-2 flex gap-2 justify-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue text-white font-semibold px-8 py-2 rounded mb-4"
          >
            Search
          </button>
        </div>
      </div>

      {/* table */}
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Jobs
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/post-job">
                    <button
                      className="bg-[#FF6C22] text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Post a New Job
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              {/* table head */}
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Job Title
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Company Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Salary
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Edit
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>

                {isloading ? (
                  <div className="flex items-center justify-center h-20">
                    <p className="text-xs">Loading...</p>
                  </div>
                ) : (
                  <tbody>
                    {currentJobs.map((job, index) => (
                      <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                          {index + 1}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {job.jobTitle}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {job.companyName}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          ${job.minPrice} - ${job.maxPrice}k
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button>
                            <Link to={`/edit-job/${job?._id}`}>Edit</Link>
                          </button>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button
                            onClick={() => handleDelete(job._id)}
                            className="bg-red-700 py-2 px-6 text-white rounded"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>

        {/* next and previous page button */}
        <div className="flex justify-center text-black space-x-8 mb-8">
          {currentPage > 1 && (
            <button onClick={prevPage} className="hover:underline">
              Previous Page
            </button>
          )}
          {indexLastItems < jobs.length && (
            <button onClick={nextPage} className="hover:underline">
              Next Page
            </button>
          )}
        </div>
        <div
          className={`flex justify-center text-red-600 font-semibold ${checkjobs} `}
        >
          <Link to="/login" className="mr-[3px] font-extrabold underline">
            Login
          </Link>
          to Check Posted Jobs!
        </div>
      </section>
    </div>
  );
};

export default MyJobs;
