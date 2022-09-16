import { useField } from "formik";
import React from "react";

const CustomInput = ({ constants, ...props }) => {
  const [field] = useField(props);
  return (
    <div
      className="custom-component"
      style={{ marginBottom: 10, fontWeight: "bolder", width: "100%" }}
    >
      <label>{constants.label}</label>
      <br />
      <input {...field} {...props} />
      <br />
    </div>
  );
};

export default CustomInput;
