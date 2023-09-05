import React from "react";
// Components
import Form from "../components/Registration/Form";
//assets
import background from "../assets/images/background.jpg";

const Registration = () => {
  return (
    <>
      <div
        className="container-fluid bg-danger d-flex justify-content-center align-items-center"
        style={{
          height: "100vh ",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Form />
      </div>
    </>
  );
};

export default Registration;
