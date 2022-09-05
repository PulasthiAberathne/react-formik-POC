import { useFormik } from "formik";
import React from "react";

const LeftFormikForm = () => {
  const formik = useFormik({ initialValues: { status: "" } });
  const options = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Abundant", value: "abundant" },
  ];

  const optionsGST = [
    { label: "Validated", value: "validated" },
    { label: "Not Validated", value: "notValidated" },
    { label: "Abundant", value: "abundant" },
  ];

  const province = [
    { label: "Alberta", value: "alberta" },
    { label: "British Columbia", value: "bc" },
    { label: "Manitoba", value: "manitoba" },
    { label: "New Brunswick", value: "nb" },
    { label: "Newfoundland and Labrador", value: "nl" },
    { label: "Northwest Territories", value: "nt" },
    { label: "Nova Scotia", value: "ns" },
    { label: "Nunavut", value: "nunavut" },
    { label: "Ontario", value: "ontario" },
    { label: "Prince Edward Island", value: "pi" },
    { label: "Quebec", value: "quebec" },
    { label: "Saskatchewan", value: "saskatchewan" },
    { label: "Yukon", value: "yukon" },
  ];

  const distributionCenters = [
    { label: "Moncton", value: "moncton" },
    { label: "Alberta", value: "alberta" },
    { label: "British Columbia", value: "bc" },
    { label: "Manitoba", value: "manitoba" },
    { label: "New Brunswick", value: "nb" },
    { label: "Newfoundland and Labrador", value: "nl" },
    { label: "Northwest Territories", value: "nt" },
    { label: "Nova Scotia", value: "ns" },
    { label: "Nunavut", value: "nunavut" },
    { label: "Ontario", value: "ontario" },
    { label: "Prince Edward Island", value: "pi" },
    { label: "Quebec", value: "quebec" },
    { label: "Saskatchewan", value: "saskatchewan" },
    { label: "Yukon", value: "yukon" },
  ];

  const provenance = [
    { label: "Other", value: "Other" },
    { label: "Validated", value: "validated" },
    { label: "Not Validated", value: "notValidated" },
  ];

  const majorAccount = [
    { label: "None", value: "none" },
    { label: "Validated", value: "validated" },
    { label: "Not Validated", value: "notValidated" },
  ];

  const yesNo = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const contact = [
    { label: "You May Contact", value: "yes" },
    { label: "You May Not Contact", value: "no" },
  ];

  const accountType = [
    { label: "Shop", value: "shop" },
    { label: "Not Shop", value: "no" },
  ];

  const KITstatus = [
    { label: "-", value: "dash" },
    { label: "Not Shop", value: "no" },
  ];

  const nameNTitle = [
    { label: "Mr. Danny Leblanc", value: "danny" },
    { label: "Mr. Charles Leclare", value: "lec" },
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
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 10,
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
              <input type="date" value="" placeholder="2021-06-03" />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Signature Date
              <br />
              <input type="date" value="" />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Cancel Date
              <br />
              <input type="date" value="" placeholder="2021-06-09" />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Reason for Cancelation
              <br />
              <input type="text" value="" />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Exclude Exit Interview
              <br />
              <input type="checkbox" value="" />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              GST
              <br />
              <input type="text" value="894859255" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              GST Status
              <br />
              <select style={{}}>
                {optionsGST.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <br />
          </form>
        </div>

        <div style={{}}>
          {" "}
          <form>
            <label style={{ marginBottom: 10 }}>
              Shop Name (Operation Name)
              <br />
              <input type="text" value="Auto One" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Shop Name (Legal Name)
              <br />
              <input type="text" value="1BT" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Address <input type="checkbox" checked disabled /> Manually Edit
              Address
              <br />
              <input type="text" value="157 Baldwin Street North" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Unit #
              <br />
              <input type="text" value="" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              City
              <br />
              <input type="text" value="Whitby" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Province
              <br />
              <select style={{}} disabled>
                {province.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Postal Code (M4M 2G2)
              <br />
              <input type="text" value="L1M 1C3" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              P.O. Box
              <br />
              <input type="text" value="" placeholder="" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Provenance
              <br />
              <select style={{ marginBottom: 10 }} disabled>
                {provenance.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              <br />
              <input type="text" value="" placeholder="RPDL" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Major Account
              <br />
              <select style={{ marginBottom: 10 }} disabled>
                {majorAccount.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Shop Major Account
              <br />
              <input type="text" value="" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              New Shop
              <br />
              <select style={{}} disabled>
                {yesNo.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Do Not Contact
              <br />
              <select style={{}} disabled>
                {contact.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <br />
            <textarea value="DO NOT CONTACT" disabled></textarea>
          </form>
        </div>

        <div style={{}}>
          <div>
            <label>Shop Program</label>
            <br />
            <label>SAX</label>
            <br />
            <img
              src={require("../../../assets/images/shopImage.png")}
              alt="shop-logo"
              style={{
                width: 150,
                height: 75,
              }}
            />
          </div>
          <form>
            <label style={{ marginBottom: 10 }}>
              Number of Technicians
              <br />3
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Number of Service Bays
              <br />
              <input type="text" value="2" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Door Rate
              <br />
              <input type="text" value="0.00" disabled />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              KIT STATUS
              <br />
              <select style={{ marginLeft: 10 }}>
                {KITstatus.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              Door Rate
              <br />
              <input type="date" value="" />
            </label>
            <br />

            <label style={{ marginBottom: 10 }}>
              <textarea disabled></textarea>
            </label>
            <br />

            <label style={{}}>
              Nebs
              <br />
              <select style={{ marginLeft: 10 }}>
                {yesNo.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>

            <div>
              <label>Major Accounts</label>
              <br />
              <img
                src={require("../../../assets/images/shopImage.png")}
                alt="none"
                style={{
                  width: 150,
                  height: 75,
                }}
              />
            </div>

            <label style={{}}>
              Account Type
              <br />
              <select style={{ marginLeft: 10 }}>
                {accountType.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          </form>{" "}
        </div>
      </div>
      <div style={{}}>
        <div>
          <div
            style={{
              backgroundColor: "#3F3D50",
              color: "white",
              fontWeight: "bolder",
              display: "flex",
              paddingLeft: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 15,
              height: 30,
              width: "100%",
              alignItems: "center",
            }}
          >
            Distribution Centre
          </div>
          <label style={{ marginBottom: 10 }}>
            Distribution Centre
            <br />
            <select style={{ marginLeft: 10 }}>
              {distributionCenters.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <br />

          <label style={{ marginBottom: 10 }}>
            FSP Title, Name
            <br />
            <select style={{ marginLeft: 10 }}>
              {nameNTitle.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <br />

          <label style={{ marginBottom: 10 }}>
            Email
            <br />
            <input type="email" value="daleblanc@uniselect.com" disabled />
          </label>
          <br />
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#3F3D50",
              color: "white",
              fontWeight: "bolder",
              display: "flex",
              paddingLeft: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 15,
              height: 30,
              width: "100%",
              alignItems: "center",
            }}
          >
            Member
          </div>

          <label style={{ marginBottom: 10 }}>
            Member Association
            <br />
            <select style={{ marginLeft: 10 }}>
              {distributionCenters.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <button style={{ marginLeft: 10 }}>
              <img
                src={require("../../../assets/images/rightGreen.png")}
                alt="gree-arrow"
                className="arrow"
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 10,
                }}
              />
              Open New Tab
            </button>
          </label>
          <br />

          <label style={{ marginBottom: 10 }}>
            Rep Name
            <br />
            <select style={{ marginLeft: 10, width: 300 }}>
              {nameNTitle.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <br />
        </div>
      </div>
    </div>
  );
};

export default LeftFormikForm;
