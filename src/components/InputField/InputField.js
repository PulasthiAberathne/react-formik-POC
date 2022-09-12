import React from "react";

const InputField = ({ formik, constants, isDisabled, value, placeholder }) => {
  return (
    <label style={{ marginBottom: 10 }}>
      {constants.label}
      <br />
      <input
        type={constants.type}
        onChange={formik.handleChange}
        placeholder={placeholder ? placeholder : ""}
        value={value ? value : ""}
        id={constants.id}
        disabled={isDisabled ? true : false}
      />
    </label>
  );
};

export default InputField;
