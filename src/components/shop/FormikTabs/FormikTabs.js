import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import data from "../../../Helpers/dataSources.json";
import DataTableComponent from "../../DataTable/DataTableComponent";

const FormikTabs = () => {
  const [shop, setShop] = useState(true);
  const [distributionCenter, setDistributionCenter] = useState(false);
  const [member, setMember] = useState(false);
  const [dataTable, setDataTable] = useState(false);
  const [formName, setFormName] = useState("shop");

  const dropDownData = data.data;

  useEffect(() => {
    console.log(formName);
  }, [formName]);

  const handleClick = (value) => {
    setShop(false);
    setDistributionCenter(false);
    setMember(false);
    setDataTable(false);

    switch (value) {
      case "shop":
        setShop(true);
        setFormName("shop");
        break;

      case "distributionCenter":
        setDistributionCenter(true);
        setFormName("distributionCenter");
        break;

      case "member":
        setMember(true);
        setFormName("member");
        break;

      case "dataTable":
        setDataTable(true);
        setFormName("dataTable");
        break;

      default:
        setShop(true);
        setFormName("shop");
        break;
    }
  };

  const formikForm = useFormik({
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
      shopName: "Auto One",
      legalShopName: "",
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
      numberOfTechnicians: "3",
      serviceBays: "2",
      doorRate: "0.00",
      KIT: "dash",
      KITDate: "",
      nebs: "yes",
      accountType: "shop",
      distributionCenter: "manitoba",
      FSP: "Mr. Danny Leblanc",
      email: "daleblanc@uniselect.com",
      association: "manitoba",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div
        style={{
          backgroundColor: "#3F3D50",
          color: "white",
          fontWeight: "bolder",
          display: "flex",
          flexDirection: "row",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 15,
          height: 30,
          alignItems: "center",
        }}
      >
        <div>
          <button
            style={{
              backgroundColor: "#3F3D50",
              color: "white",
              fontWeight: "bolder",
              width: 200,
            }}
            onClick={() => {
              handleClick("shop");
            }}
          >
            General
          </button>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#3F3D50",
              color: "white",
              fontWeight: "bolder",
              width: 200,
            }}
            onClick={() => {
              handleClick("distributionCenter");
            }}
          >
            Distribution Center
          </button>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#3F3D50",
              color: "white",
              fontWeight: "bolder",
              width: 200,
            }}
            onClick={() => {
              handleClick("member");
            }}
          >
            Membership
          </button>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#3F3D50",
              color: "white",
              fontWeight: "bolder",
              width: 200,
            }}
            onClick={() => {
              handleClick("dataTable");
            }}
          >
            {" "}
            Table
          </button>
        </div>
      </div>
      {shop ? (
        <form id={formName} onSubmit={formikForm.handleSubmit}>
          <div
            style={{
              marginTop: 10,
              borderWeight: 1,
              marginLeft: 20,
              fontWeight: "bolder",
              alignContent: "left",
              justifyContent: "left",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: 10,
              width: "100%",
            }}
          >
            <div>
              <label style={{ marginBottom: 10 }}>
                Status
                <br />
                <select
                  style={{}}
                  onChange={formikForm.handleChange}
                  value={formikForm.values.status}
                  id="status"
                >
                  {dropDownData.options.map((option) => (
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.shopNumber}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.shopNumberLegacy}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.PIN}
                  id="PIN"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Warehouse Account Number
                <br />
                <input
                  type="text"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.warehouseAccountNumber}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.originalSignDate}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.signUpDate}
                  id="signUpDate"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Signature Date
                <br />
                <input
                  type="date"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.signatureDate}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.cancelDate}
                  id="cancelDate"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Reason for Cancelation
                <br />
                <input
                  type="text"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.cancelReason}
                  id="cancelReason"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Exclude Exit Interview
                <br />
                <input
                  type="checkbox"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.excludeExitInterview}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.GST}
                  id="GST"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                GST Status
                <br />
                <select
                  style={{}}
                  onChange={formikForm.handleChange}
                  value={formikForm.values.GSTStatus}
                  id="GSTStatus"
                >
                  {dropDownData.optionsGST.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <br />
            </div>
            <div>
              <label style={{ marginBottom: 10 }}>
                Shop Name (Operation Name)
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm.handleChange}
                  value={formikForm.values.shopName}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.legalShopName}
                  id="legalShopName"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Address{" "}
                <input
                  type="checkbox"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.isEditAddress}
                  id="isEditAddress"
                />{" "}
                Manually Edit Address
                <br />
                {formikForm.values.isEditAddress ? (
                  <input
                    type="text"
                    onChange={formikForm.handleChange}
                    value={formikForm.values.address}
                    id="address"
                  />
                ) : (
                  <input
                    type="text"
                    disabled
                    onChange={formikForm.handleChange}
                    value={formikForm.values.address}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.unitNumber}
                  id="unitNumber"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                City
                <br />
                <input
                  type="text"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.city}
                  id="city"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Province
                <br />
                <select
                  style={{}}
                  onChange={formikForm.handleChange}
                  value={formikForm.values.provinceSelect}
                  id="provinceSelect"
                >
                  {dropDownData.province.map((option) => (
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.postalCode}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.POBox}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.provenance}
                  id="provenance"
                >
                  {dropDownData.provenance.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <br />
                <input
                  type="text"
                  placeholder="RPDL"
                  disabled
                  onChange={formikForm.handleChange}
                  value={formikForm.values.RPDL}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.majorAccount}
                  id="majorAccount"
                >
                  {dropDownData.province.map((option) => (
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.shopMajorAccount}
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.newShop}
                  id="newShop"
                >
                  {dropDownData.yesNo.map((option) => (
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
                  onChange={formikForm.handleChange}
                  value={formikForm.values.contactStatus}
                  id="contactStatus"
                >
                  {dropDownData.contact.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <br />
              <textarea
                value={formikForm.values.contactStatus}
                disabled
              ></textarea>
            </div>
            <div>
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
              <label style={{ marginBottom: 10 }}>
                Number of Technicians
                <br />
                {formikForm.values.numberOfTechnicians}
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Number of Service Bays
                <br />
                <input
                  type="text"
                  disabled
                  onChange={formikForm.handleChange}
                  value={formikForm.values.serviceBays}
                  id="serviceBays"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                Door Rate
                <br />
                <input
                  type="text"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.doorRate}
                  id="doorRate"
                  disabled
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                KIT STATUS
                <br />
                <select
                  style={{ marginLeft: 10 }}
                  onChange={formikForm.handleChange}
                  value={formikForm.values.KIT}
                  id="KIT"
                >
                  {dropDownData.KITStatus.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                KIT Date
                <br />
                <input
                  type="date"
                  onChange={formikForm.handleChange}
                  value={formikForm.values.KITDate}
                  id="KITDate"
                />
              </label>
              <br />

              <label style={{ marginBottom: 10 }}>
                <textarea disabled></textarea>
              </label>
              <br />

              <label style={{}}>
                Nebs
                <br />
                <select
                  style={{ marginLeft: 10 }}
                  onChange={formikForm.handleChange}
                  value={formikForm.values.nebs}
                  id="nebs"
                >
                  {dropDownData.yesNo.map((option) => (
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
                <select
                  style={{ marginLeft: 10 }}
                  onChange={formikForm.handleChange}
                  value={formikForm.values.accountType}
                  id="accountType"
                >
                  {dropDownData.accountType.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </form>
      ) : distributionCenter ? (
        <form id={formName} onSubmit={formikForm.handleSubmit}>
          <label style={{ marginBottom: 10, marginTop: 30 }}>
            Distribution Centre
            <br />
            <select
              style={{ marginLeft: 10 }}
              onChange={formikForm.handleChange}
              value={formikForm.values.distributionCenter}
              id="distributionCenter"
            >
              {dropDownData.province.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <br />

          <label style={{ marginBottom: 10 }}>
            FSP Title, Name
            <br />
            <select
              style={{ marginLeft: 10 }}
              onChange={formikForm.handleChange}
              value={formikForm.values.FSP}
              id="FSP"
            >
              {dropDownData.nameNTitle.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <br />

          <label style={{ marginBottom: 10 }}>
            Email
            <br />
            <input
              type="email"
              disabled
              onChange={formikForm.handleChange}
              value={formikForm.values.email}
              id="email"
            />
          </label>
          <br />
        </form>
      ) : member ? (
        <form id={formName} onSubmit={formikForm.handleSubmit}>
          <label style={{ marginBottom: 10, marginTop: 30 }}>
            Member Association
            <br />
            <select
              style={{ marginLeft: 10 }}
              onChange={formikForm.handleChange}
              value={formikForm.values.association}
              id="association"
            >
              {dropDownData.province.map((option) => (
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
            <select
              style={{ marginLeft: 10, width: 300 }}
              onChange={formikForm.handleChange}
              value={formikForm.values.FSB}
              id="repName"
            >
              {dropDownData.nameNTitle.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <br />
        </form>
      ) : (
        <form
          id={formName}
          style={{ marginLeft: 60, marginTop: 10, marginRight: 60 }}
        >
          <DataTableComponent />
        </form>
      )}

      {!dataTable ? (
        <input
          type="submit"
          form={formName}
          style={{
            marginBottom: 10,
            width: 200,
            marginLeft: 20,
            marginTop: 100,
            fontWeight: "bolder",
          }}
          value="Continue"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FormikTabs;
