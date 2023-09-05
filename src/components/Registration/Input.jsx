import React from "react";

const Input = ({ type, label, icon, error, value, name, getCurrentValue }) => {
  return (
    <>
      <label
        for="validationCustomUsername"
        className="form-label text-light text-uppercase mb-2 mt-2"
      >
        {label}
      </label>
      <div className="input-group has-validation">
        <span className="input-group-text" id="inputGroupPrepend">
          <i className={icon}></i>
        </span>
        <input
          type={type}
          className="form-control"
          id="validationCustomUsername"
          aria-describedby="inputGroupPrepend"
          value={value}
          name={name}
          onChange={getCurrentValue}
          autoComplete="off"
        />
        <div className="invalid-feedback ">Please choose a username.</div>
      </div>

      <div
        className={
          error
            ? "text-warning text-bg-dark opacity-75 mt-2 py-2 ps-2 rounded-1"
            : " "
        }
      >
        {error}
      </div>
    </>
  );
};

export default Input;
