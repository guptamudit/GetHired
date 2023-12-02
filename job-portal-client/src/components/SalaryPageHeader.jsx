import React from "react";

const SalaryPageHeader = ({ title, path }) => {
  return (
    <div className="py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center">
      <div>
        <h2 className="text-4xl text-blue font-bold mb-1 text-center">
          {title}
        </h2>
        <p className="text-sm text-center">
          <a href="/" className="hover:text-blue hover:underline">
            Home
          </a>{" "}
          / {path}
        </p>
      </div>
    </div>
  );
};

export default SalaryPageHeader;
