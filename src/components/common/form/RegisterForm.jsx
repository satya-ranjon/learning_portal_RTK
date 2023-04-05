import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import validateRegister from "../../../utils/validateRegister";
import Messages from "../message";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };

const RegisterForm = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isError = validateRegister(inputValue);
    setError(isError);
    if (!isError) {
      console.log(inputValue);
      // navigate("/ ")
    }
  };
  return (
    <>
      {error && <Messages cls="danger" message={error} />}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            name="name"
            placeholder="Student Name"
            onChange={handleInputChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleInputChange}
          />
          <Input
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
        </div>

        <Button type="submit">Create Account</Button>
      </form>
    </>
  );
};

export default RegisterForm;
