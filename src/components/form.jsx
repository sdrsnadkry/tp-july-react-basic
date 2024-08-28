import React, { useState } from "react";

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const phoneNumber = "9840012345";

// [9,8,4,0,0,1,2,3,4,5,a,c]
const pArr = phoneNumber.split("");

//check if every element of pArr is inside number array
const isValidNumber= pArr.every((element) => {
  return number.includes(Number(element))
})


console.log(isValidNumber);

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [errorObj, setErrorObj] = useState({});

  const handleSubmit = () => {
    const { name, email, address, phone } = values;

    const emailContainsSymbol = email.includes("@");
    const emailContainsDomain = email.includes(".com");
    // const isValidPhoneNumber = phone.length === 10 && ;

    if (!name || !address || !email || !phone) {
      return setErrorObj({
        name: !name ? "Name is required" : "",
        email: !email ? "Email is required" : "",
        address: !address ? "Address is required" : "",
        phone: !phone ? "Phone no is required" : "",
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
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={(event) => {
              setValues({
                ...values,
                phone: event.target.value,
              });
            }}
          />
          {errorObj.phone && (
            <span style={{ color: "red" }}>{errorObj.phone}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
