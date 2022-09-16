import { useField } from "formik";
import React from "react";

const CustomSelect = ({ constants, data, ...props }) => {
  const [field] = useField(props);
  return (
    <div
      className="custom-component"
      style={{ marginBottom: 10, fontWeight: "bolder", width: "100%" }}
    >
      <label>{constants.label}</label>
      <br />
      <select {...field} {...props}>
        {data?.map((option) => (
          <option
            value={option.value}
            key={option.value}
            style={{ width: "100%" }}
          >
            {option.label}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default CustomSelect;
