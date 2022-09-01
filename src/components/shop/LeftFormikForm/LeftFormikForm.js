import { useFormik } from "formik";
import React from "react";

const LeftFormikForm = () => {
  const formik = useFormik({ initialValues: { status: "" } });
  const options = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Abundant", value: "abundant" },
  ];
  return (
    <div
      style={{
        marginTop: 10,
        borderWeight: 1,
        marginLeft: 20,
        display: "flex",
        fontWeight: "bolder",
      }}
    >
      <div
        style={{
          borderWeight: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 30,
          width: "70%",
          alignContent: "left",
          justifyContent: "left",
        }}
      >
        <div style={{}}>
          {" "}
          <form>
            <label style={{}}>
              Status
              <br />
              <select style={{}}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          </form>
        </div>

        <div style={{}}>
          {" "}
          <form>
            <label style={{}}>
              Status
              <br />
              <select style={{ marginLeft: 10 }}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          </form>
        </div>

        <div style={{}}>
          <form>
            <label style={{}}>
              Status
              <br />
              <select style={{ marginLeft: 10 }}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          </form>{" "}
        </div>
      </div>
      <div style={{}}>
        <div>Shop</div>
        <div>Shop</div>
      </div>
    </div>
  );
};

export default LeftFormikForm;
