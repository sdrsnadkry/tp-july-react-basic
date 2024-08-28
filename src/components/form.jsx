import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [errorObj, setErrorObj] = useState({});

  const handleSubmit = () => {
    const { name, email, address } = values;

    const emailContainsSymbol = email.includes("@");
    const emailContainsDomain = email.includes(".com");

    if (!name || !address || !email) {
      return setErrorObj({
        name: !name ? "Name is required" : "",
        email: !email ? "Email is required" : "",
        address: !address ? "Address is required" : "",
      });
    }

    if (!emailContainsSymbol || !emailContainsDomain) {
      return setErrorObj({
        ...errorObj,
        email: "Email is invalid",
      });
    }
    setErrorObj({
      name: "",
      email: "",
      address: "",
    });
    console.log(name, email, address);
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={(event) => {
              setValues({
                ...values,
                name: event.target.value,
              });
            }}
          />
          {errorObj.name && (
            <span style={{ color: "red" }}>{errorObj.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={(event) => {
              setValues({
                ...values,
                email: event.target.value,
              });
            }}
          />
          {errorObj.email && (
            <span style={{ color: "red" }}>{errorObj.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={values.address}
            onChange={(event) => {
              setValues({
                ...values,
                address: event.target.value,
              });
            }}
          />
          {errorObj.address && (
            <span style={{ color: "red" }}>{errorObj.address}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
