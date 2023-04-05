import React from "react";

const Input = ({ type = "text", cls, ...argument }) => {
  return (
    <input
      // required
      type={type}
      {...argument}
      className={`login-input ${cls}`}
    />
  );
};

export default Input;
