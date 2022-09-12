import React from "react";
import { useFormik } from "formik";

const FormikTest = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  //   const { submitForm } = useFormikContext();

  //   const handleSubmit = () => {
  //     // submitForm();
  //   };

  return (
    <div>
      <form id="my-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </form>
      <button form="my-form" type="submit">
        Submit
      </button>
    </div>
  );
};

export default FormikTest;
