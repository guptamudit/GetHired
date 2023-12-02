import React from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Job Type</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any
        </label>

        <InputField
          handleChange={handleChange}
          value="Intership"
          title="Internship"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work Remotely"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
