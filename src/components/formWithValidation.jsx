import React from "react";

import { useFormik } from "formik";

import { object, string } from "yup";
import { countryCode } from "../data/countryCode";
import { Link } from "react-router-dom";

const userSchema = object({
  name: string().required("Please enter name"),
  email: string()
    .required("Please enter email")
    .email("Please enter valid email address"),
  address: string().required("Please enter address"),
  phone: string()
    .required("Please enter phone")
    .min(10, "Please enter valid phone"),
  countryCode: string().required("Please enter phone"),
});

const FormWithValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      countryCode: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik);

  return (
    <div>
      <h1>Contact Form</h1>

      <Link to={"/random-slider"} >Move to slider Slider</Link>


      <form
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.address && (
            <span style={{ color: "red" }}>{formik.errors.address}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Code</label>
          <select
            name="countryCode"
            id=""
            value={formik.values.countryCode}
            onChange={formik.handleChange}
            // onChange={(event) => {
            //   formik.setFieldValue("countryCode", event.target.value);
            // }}
          >
            {countryCode.map((cc) => (
              <option value={cc.code} key={cc.code}>
                +{cc.code} - {cc.country}
              </option>
            ))}
          </select>

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && (
            <span style={{ color: "red" }}>{formik.errors.phone}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormWithValidation;
