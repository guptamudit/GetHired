import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobPageHeader from "../components/JobPageHeader";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "Resume URL",
      inputPlaceholder: "Enter Your resume URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container xl:px-24 px-4 mx-auto">
        <JobPageHeader title={job.companyName} logo={job.companyLogo} />
      </div>
      <div className="max-w-screen-2xl px-4 xl:px-24 mx-auto">
        <div className="mt-4 md:flex-col flex-col flex itmes-center justify-center gap-4">
          <div>
            <h1 className="font-bold text-2xl text-blue">About the Company:</h1>
            <h4 className="md:w-1/2 w-full">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              id, rem magnam optio ad quis eligendi rerum dolore eum iusto vel
              reiciendis? Nulla, minima soluta numquam fugiat accusantium
              placeat ad, praesentium corrupti voluptatibus exercitationem
              aperiam maiores aut cumque saepe unde! Adipisci voluptate ipsam
              quos delectus modi consequuntur eaque repellendus eligendi.
            </h4>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-blue">About the Job:</h1>
            <h4 className="md:w-1/2 w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              perspiciatis labore minus dolorum et repudiandae! Fugit quia et
              officia recusandae asperiores dolores voluptas, sapiente, corporis
              ipsam eveniet expedita ad soluta, enim architecto quis iusto minus
              id debitis fuga aliquam molestiae dolor itaque tenetur laboriosam!
              Sed iste quam consequuntur possimus accusantium.{" "}
            </h4>
          </div>
        </div>
      </div>
      <div className=" mt-10 max-w-screen-2xl px-4 xl:px-24 mx-auto">
        <button
          onClick={handleApply}
          className="px-8 py-2 bg-blue text-white rounded mb-4"
        >
          Apply Now
        </button>
      </div>
    </>
  );
};

export default JobDetails;
