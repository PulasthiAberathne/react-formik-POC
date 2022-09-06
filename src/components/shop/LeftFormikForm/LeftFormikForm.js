import { useFormik } from "formik";
import React from "react";

const LeftFormikForm = () => {
  const formikForm1 = useFormik({
    initialValues: {
      status: "active",
      shopNumber: "3741327",
      shopNumberLegacy: "07-413-27",
      PIN: "6200",
      warehouseAccountNumber: "",
      originalSignDate: "2020-08-05",
      signUpDate: "",
      signatureDate: "",
      cancelDate: "",
      cancelReason: "",
      excludeExitInterview: false,
      GST: "894859255",
      GSTStatus: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const formikForm2 = useFormik({
    initialValues: {
      shopName: "Auto One",
      legalShopName: "",
      shopNumberLegacy: "07-413-27",
      address: "157 Baldwin Street North",
      isEditAddress: false,
      unitNumber: "",
      city: "Whitby",
      provinceSelect: "",
      postalCode: "L1M 1C3",
      POBox: "",
      provenance: "",
      RPDL: "RPDL",
      majorAccount: "",
      shopMajorAccount: "",
      newShop: "",
      contactStatus: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const options = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Abundant", value: "abundant" },
  ];

  // majorAccount
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

  // province
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
    <div>
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
            <form onSubmit={formikForm1.handleSubmit} id="form-1">
              <label style={{ marginBottom: 10 }}>
                Status
                <br />
                <select
                  style={{}}
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.status}
                  id="status"
                >
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Shop Number SAP
                <br />
                <input
                  type="text"
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.shopNumber}
                  id="shopNumber"
                  disabled
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Shop Number Legacy
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.shopNumberLegacy}
                  id="shopNumberLegacy"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                PIN Number
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.PIN}
                  id="PIN"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Warehouse Account Number
                <br />
                <input
                  type="text"
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.warehouseAccountNumber}
                  id="warehouseAccountNumber"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Original Signup Date
                <br />
                <input
                  type="date"
                  disabled
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.originalSignDate}
                  id="originalSignDate"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Signup Date
                <br />
                <input
                  type="date"
                  placeholder="2021-06-03"
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.signUpDate}
                  id="signUpDate"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Signature Date
                <br />
                <input
                  type="date"
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.signatureDate}
                  id="signatureDate"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Cancel Date
                <br />
                <input
                  type="date"
                  placeholder="2021-06-09"
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.cancelDate}
                  id="cancelDate"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Reason for Cancelation
                <br />
                <input
                  type="text"
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.cancelReason}
                  id="cancelReason"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Exclude Exit Interview
                <br />
                <input
                  type="checkbox"
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.excludeExitInterview}
                  id="excludeExitInterview"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                GST
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.GST}
                  id="GST"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                GST Status
                <br />
                <select
                  style={{}}
                  onChange={formikForm1.handleChange}
                  value={formikForm1.values.GSTStatus}
                  id="GSTStatus"
                >
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
            <form onSubmit={formikForm2.handleSubmit} id="form-2">
              <label style={{ marginBottom: 10 }}>
                Shop Name (Operation Name)
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.shopName}
                  id="shopName"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Shop Name (Legal Name)
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.legalShopName}
                  id="legalShopName"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Address{" "}
                <input
                  type="checkbox"
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.isEditAddress}
                  id="isEditAddress"
                />{" "}
                Manually Edit Address
                <br />
                {formikForm2.values.isEditAddress ? (
                  <input
                    type="text"
                    onChange={formikForm2.handleChange}
                    value={formikForm2.values.address}
                    id="address"
                  />
                ) : (
                  <input
                    type="text"
                    disabled
                    onChange={formikForm2.handleChange}
                    value={formikForm2.values.address}
                    id="address"
                  />
                )}
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Unit #
                <br />
                <input
                  type="text"
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.unitNumber}
                  id="unitNumber"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                City
                <br />
                <input
                  type="text"
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.city}
                  id="city"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Province
                <br />
                <select
                  style={{}}
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.provinceSelect}
                  id="provinceSelect"
                >
                  {province.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Postal Code (M4M 2G2)
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.postalCode}
                  id="postalCode"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                P.O. Box
                <br />
                <input
                  type="text"
                  placeholder=""
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.POBox}
                  id="POBox"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Provenance
                <br />
                <select
                  style={{ marginBottom: 10 }}
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.provenance}
                  id="provenance"
                >
                  {provenance.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <br />
                <input
                  type="text"
                  placeholder="RPDL"
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.RPDL}
                  id="RPDL"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Major Account
                <br />
                <select
                  style={{ marginBottom: 10 }}
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.majorAccount}
                  id="majorAccount"
                >
                  {majorAccount.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Shop Major Account
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.shopMajorAccount}
                  id="shopMajorAccount"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                New Shop
                <br />
                <select
                  style={{}}
                  disabled
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.newShop}
                  id="newShop"
                >
                  {yesNo.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Do Not Contact
                <br />
                <select
                  style={{}}
                  onChange={formikForm2.handleChange}
                  value={formikForm2.values.contactStatus}
                  id="contactStatus"
                >
                  {contact.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <br />
              <textarea
                value={formikForm2.values.contactStatus}
                disabled
              ></textarea>
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

      <input
        type="submit"
        form="form-1"
        style={{ marginBottom: 10, width: 200, marginLeft: 10, marginTop: 100 }}
        value="Continue Form 1"
      />

      <input
        type="submit"
        form="form-2"
        style={{ marginBottom: 10, width: 200, marginLeft: 10, marginTop: 100 }}
        value="Continue Form 2"
      />

      <input
        type="submit"
        style={{ marginBottom: 10, width: 200, marginLeft: 10, marginTop: 100 }}
        value="Continue Form 3"
      />
    </div>
  );
};

export default LeftFormikForm;
