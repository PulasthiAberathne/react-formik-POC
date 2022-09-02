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
        alignContent: "left",
        justifyContent: "left",
      }}
    >
      <div
        style={{
          borderWeight: 1,
          display: "flex",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 30,
          width: "70%",
          alignContent: "left",
          justifyContent: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "left",
            justifyContent: "left",
          }}
        >
          {" "}
          <form>
            <label style={{ marginBottom: 10 }}>
              Status
              <br />
              <select style={{}}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Shop Number SAP
              <br />
              <input type="text" value="3741327" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Shop Number Legacy
              <br />
              <input type="text" value="07-413-27" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              PIN Number
              <br />
              <input type="text" value="6200" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Warehouse Account Number
              <br />
              <input type="text" value="" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Original Signup Date
              <br />
              <input type="date" value="2020-08-05" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Signup Date
              <br />
              <input type="date" value="" />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Signature Date
              <br />
              <input type="date" value="" />
            </label>
            <br />
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
