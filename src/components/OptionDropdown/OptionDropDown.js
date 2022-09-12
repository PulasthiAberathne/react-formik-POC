import React from "react";

const OptionDropDown = ({ constants, formik, data, value }) => {
  return (
    <label style={{ marginBottom: 10 }}>
      {constants?.label} <br />
      <select
        style={{}}
        onChange={formik?.handleChange}
        value={value}
        id={constants?.id}
      >
        {data?.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default OptionDropDown;
