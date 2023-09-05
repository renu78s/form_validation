import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  //*state to store input values
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  //*state to store error
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //*state to store action when to send the data (when all true send data)
  const [userData, setUserData] = useState(false);
  const [emailData, setEmailData] = useState(false);
  const [passwordData, setPasswordData] = useState(false);

  //*send data
  // const [send,setSend] = useState(false);

  //*email validation format
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  //onSubmit event - function to send data
  const send = (event) => {
    event.preventDefault();
    if (userData == true && emailData == true && passwordData == true) {
      alert(
        `data stored 
          name  :  ${details.username} ,
          email : ${details.email} , 
          password : ${details.password}`
      );
      setDetails({
        username: "",
        email: "",
        password: "",
      });
      setUserData(false);
      setEmailData(false);
      setPasswordData(false);
    }
  };
  //onMousedown event on submit button -  function to  validation
  const validate = () => {
    let name = details.username;
    let email = details.email;
    let password = details.password;

    // on submit if filed is empty show error msg

    //username
    if (name == "") {
      setUserError("please fill your name");
      setUserData(false);
    } else {
      setUserError("");
      if (name.length < 3) {
        setUserError("name should contain atleast 3 letters");
        setUserData(false);
      } else {
        setUserError("");
        setUserData(true);
      }
    }

    //email
    if (email == "") {
      setEmailError("please fill your email");
      setEmailData(false);
    } else {
      setEmailError("");
      if (!isEmail(email)) {
        setEmailError("please use correct syntax for email");
        setEmailData(false);
      } else {
        setEmailError("");
        setEmailData(true);
      }
    }

    //password
    if (password == "") {
      setPasswordError("please fill your password");
      setPasswordData(false);
    } else {
      setPasswordError("");
      setPasswordData(true);
    }

    //send data and empty field
  };

  //*onChange event function
  const getCurrentValue = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setDetails({ ...details, [name]: value });

    // remove error msg

    let name2 = details.username;
    let email = details.email;
    let password = details.password;

    //username
    if (name2 !== "" && name2.length >= 3) {
      setUserError("");
    }

    //email
    if (email !== "" && isEmail(email)) {
      setEmailError("");
    }
    //password
    if (password !== "") {
      setPasswordError("");
    }
  };

  //*style css
  const styles = {
    backgroundColor: "rgba(231, 228, 234, 0.137)",
  };
  return (
    <>
      <form
        className="form row g-3 needs-validation p-5 rounded-3"
        style={styles}
        noValidate
        onSubmit={send}
      >
        <div className="col-md-12 col-lg-12 ">
          <h1 className="text-light text-capitalize">Registration form</h1>
          <Input
            type="text"
            label="username"
            icon="bi bi-person-fill"
            error={userError}
            value={details.username}
            name="username"
            getCurrentValue={getCurrentValue}
          />
          <Input
            type="email"
            label="email"
            icon="bi bi-envelope-fill"
            error={emailError}
            value={details.email}
            name="email"
            getCurrentValue={getCurrentValue}
          />
          <Input
            type="password"
            label="password"
            icon="bi bi-key-fill"
            error={passwordError}
            value={details.password}
            name="password"
            getCurrentValue={getCurrentValue}
          />{" "}
        </div>

        <div className="col-12">
          <button
            className="btn  btn-dark pb-2 border-1 border-light text-light"
            type="submit"
            onMouseDown={validate}
          >
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
