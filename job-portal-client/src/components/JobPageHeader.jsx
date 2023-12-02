import React from "react";

const JobPageHeader = ({ title, logo }) => {
  return (
    <section>
      <div className="bg-[#FAFAFA] mt-3 h-auto rounded flex items-center justify-center gap-8 py-[48px]">
        <div className="text-4xl font-bold">{title}</div>
        <div>
          <img src={logo} alt="comapny logo" className="w-[62px]" />
        </div>
      </div>
    </section>
  );
};

export default JobPageHeader;
