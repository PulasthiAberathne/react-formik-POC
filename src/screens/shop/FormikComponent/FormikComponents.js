import { Formik, Form, Field, useField } from "formik";
import React, { useState, useEffect } from "react";
import {
  CustomDataTable,
  CustomInput,
  CustomSelect,
} from "../../../components/CustomFormikComponents";
import { option, constants, row, columns } from "../../../Helpers";

const CustomAddressCheck = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <label>
      Address <input {...field} {...props} /> Manually Edit Address
    </label>
  );
};

const CustomPlainDisabled = ({ ...props }) => {
  const [field] = useField(props);
  return <input {...field} {...props} />;
};

const FormikComponents = () => {
  const [shop, setShop] = useState(true);
  const [distributionCenter, setDistributionCenter] = useState(false);
  const [member, setMember] = useState(false);
  const [dataTable, setDataTable] = useState(false);
  const [formName, setFormName] = useState("shop");

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

  const handleOnSubmit = (values, actions) => {
    console.log(values);
  };

  useEffect(() => {
    console.log(formName);
  }, [formName]);

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
            Shop
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

      <Formik
        initialValues={{
          status: "active",
          shopNumberSAP: "3741327",
          shopNumberLegacy: "07-413-27",
          PIN: "6200",
          warehouseAccountNumber: "",
          originalSignDate: "2020-08-05",
          signUpDate: "2021-06-03",
          signatureDate: "",
          cancelDate: "2021-06-09",
          cancelReason: "",
          excludeExitInterview: false,
          GST: "894859255",
          GSTStatus: "",
          shopName: "Auto One",
          legalShopName: "Test Shop",
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
          contactStatus: "You May Contact",
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
        }}
        onSubmit={(values, actions) => {
          handleOnSubmit(values, actions);
        }}
        // validationSchema={shopSchema}
      >
        {(props) =>
          shop ? (
            <Form id={formName}>
              <div
                style={{
                  paddingRight: 10,
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 25,
                  justifyContent: "left",
                  alignContent: "left",
                }}
              >
                <div className="custom-container">
                  <Field
                    name={constants.status.id}
                    constants={constants.status}
                    data={option.options}
                    as={CustomSelect}
                  />

                  <Field
                    name={constants.shopNumberSAP.id}
                    type={constants.shopNumberSAP.type}
                    value={props.values.shopNumberSAP}
                    constants={constants.shopNumberSAP}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.shopNumberLegacy.id}
                    type={constants.shopNumberLegacy.type}
                    value={props.values.shopNumberLegacy}
                    constants={constants.shopNumberLegacy}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.PIN.id}
                    type={constants.PIN.type}
                    value={props.values.PIN}
                    constants={constants.PIN}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.warehouseAccountNumber.id}
                    type={constants.warehouseAccountNumber.type}
                    value={props.values.warehouseAccountNumber}
                    constants={constants.warehouseAccountNumber}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.originalSignDate.id}
                    type={constants.originalSignDate.type}
                    value={props.values.originalSignDate}
                    constants={constants.originalSignDate}
                    as={CustomInput}
                    disabled={false}
                  />

                  <Field
                    name={constants.signUpDate.id}
                    type={constants.signUpDate.type}
                    value={props.values.signUpDate}
                    constants={constants.signUpDate}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.signatureDate.id}
                    type={constants.signatureDate.type}
                    value={props.values.signatureDate}
                    constants={constants.signatureDate}
                    as={CustomInput}
                    disabled={false}
                  />

                  <Field
                    name={constants.cancelDate.id}
                    type={constants.cancelDate.type}
                    value={props.values.cancelDate}
                    constants={constants.cancelDate}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.cancelReason.id}
                    type={constants.cancelReason.type}
                    value={props.values.cancelReason}
                    constants={constants.cancelReason}
                    as={CustomInput}
                    disabled={false}
                  />

                  <Field
                    name={constants.excludeExitInterview.id}
                    type={constants.excludeExitInterview.type}
                    value={props.values.excludeExitInterview}
                    constants={constants.excludeExitInterview}
                    as={CustomInput}
                    disabled={false}
                  />

                  <Field
                    name={constants.GST.id}
                    type={constants.GST.type}
                    value={props.values.GST}
                    constants={constants.GST}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.GSTStatus.id}
                    constants={constants.GSTStatus}
                    data={option.optionsGST}
                    as={CustomSelect}
                    disabled={true}
                  />
                </div>
                <div className="custom-container">
                  <Field
                    name={constants.shopName.id}
                    type={constants.shopName.type}
                    value={props.values.shopName}
                    constants={constants.shopName}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.legalShopName.id}
                    type={constants.legalShopName.type}
                    value={props.values.legalShopName}
                    constants={constants.legalShopName}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name="addressCheck"
                    type="checkbox"
                    checked={props.values.isEditAddress}
                    as={CustomAddressCheck}
                  />

                  {props.values.isEditAddress ? (
                    <Field
                      name={constants.address.id}
                      type={constants.address.type}
                      value={props.values.address}
                      constants={constants.address}
                      as={CustomInput}
                      disabled={false}
                    />
                  ) : (
                    <Field
                      name={constants.address.id}
                      type={constants.address.type}
                      value={props.values.address}
                      constants={constants.address}
                      as={CustomInput}
                      disabled={true}
                    />
                  )}

                  <Field
                    name={constants.unitNumber.id}
                    type={constants.unitNumber.type}
                    value={props.values.unitNumber}
                    constants={constants.unitNumber}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.city.id}
                    type={constants.city.type}
                    value={props.values.city}
                    constants={constants.city}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.provinceSelect.id}
                    constants={constants.provinceSelect}
                    data={option.province}
                    as={CustomSelect}
                  />

                  <Field
                    name={constants.postalCode.id}
                    type={constants.postalCode.type}
                    value={props.values.postalCode}
                    constants={constants.postalCode}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.POBox.id}
                    type={constants.POBox.type}
                    value={props.values.POBox}
                    constants={constants.POBox}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.provenance.id}
                    constants={constants.provenance}
                    data={option.provenance}
                    as={CustomSelect}
                  />

                  <Field
                    name="plainDisabled"
                    type="text"
                    as={CustomPlainDisabled}
                    value={props.values.RPDL}
                    disabled={true}
                  />

                  <Field
                    name={constants.newShop.id}
                    constants={constants.newShop}
                    data={option.yesNo}
                    as={CustomSelect}
                  />

                  <Field
                    name={constants.contactStatus.id}
                    constants={constants.contactStatus}
                    data={option.contact}
                    as={CustomSelect}
                  />

                  <textarea value={props.values.contactStatus} disabled />
                </div>
                <div className="custom-container">
                  <div style={{ fontWeight: "bolder" }}>
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

                  <div style={{ fontWeight: "bolder", marginTop: 10 }}>
                    <label>Number of Technicians</label>
                    <br />
                    <div
                      style={{
                        fontWeight: "bolder",
                        alignContent: "left",
                        justifyContent: "left",
                      }}
                    >
                      {props.values.numberOfTechnicians}
                    </div>
                  </div>

                  <Field
                    name={constants.serviceBays.id}
                    type={constants.serviceBays.type}
                    value={props.values.serviceBays}
                    constants={constants.serviceBays}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.doorRate.id}
                    type={constants.doorRate.type}
                    value={props.values.doorRate}
                    constants={constants.doorRate}
                    as={CustomInput}
                    disabled={true}
                  />

                  <Field
                    name={constants.KIT.id}
                    constants={constants.KIT}
                    data={option.KITStatus}
                    as={CustomSelect}
                  />

                  <Field
                    name={constants.KITDate.id}
                    type={constants.KITDate.type}
                    value={props.values.KITDate}
                    constants={constants.KITDate}
                    as={CustomInput}
                    disabled={false}
                  />

                  <textarea disabled />

                  <Field
                    name={constants.nebs.id}
                    constants={constants.nebs}
                    data={option.yesNo}
                    as={CustomSelect}
                  />

                  <Field
                    name={constants.accountType.id}
                    constants={constants.accountType}
                    data={option.accountType}
                    as={CustomSelect}
                    disabled={true}
                  />
                </div>
              </div>
            </Form>
          ) : distributionCenter ? (
            <Form id={formName}>
              <Field
                name={constants.distributionCenter.id}
                constants={constants.distributionCenter}
                data={option.province}
                as={CustomSelect}
                disabled={false}
              />

              <Field
                name={constants.FSP.id}
                constants={constants.FSP}
                data={option.nameNTitle}
                as={CustomSelect}
                disabled={false}
              />

              <Field
                name={constants.email.id}
                type={constants.email.type}
                value={props.values.email}
                constants={constants.email}
                as={CustomInput}
                disabled={true}
              />
            </Form>
          ) : member ? (
            <Form id={formName}>
              <Field
                name={constants.association.id}
                constants={constants.association}
                data={option.province}
                as={CustomSelect}
                disabled={false}
              />

              <Field
                name={constants.repName.id}
                constants={constants.repName}
                data={option.nameNTitle}
                as={CustomSelect}
                disabled={false}
              />
            </Form>
          ) : (
            <CustomDataTable
              columns={columns}
              data={row}
              highlightOnHover
              pointerOnHover
            />
          )
        }
      </Formik>

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

export default FormikComponents;
