import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
import Swal from "sweetalert2";

const NewLetter = () => {
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
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email Me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Email me for landing in your dream company with good pay.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            name="submit"
            id="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue text-white cursor-pointer rounded font-semibold"
          />
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Get noticed by top recruiters fast and be one step ahead of everyone.
        </p>
        <div className="w-full space-y-4">
          <input
            onClick={handleApply}
            type="submit"
            name="submit"
            id="submit"
            value={"Upload Your Resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue text-white cursor-pointer rounded font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
