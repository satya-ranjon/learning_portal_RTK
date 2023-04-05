import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import validateLogin from "../../../utils/validateLogin";
import Messages from "../message";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isError = validateLogin(inputValue);
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
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleInputChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center justify-end">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-violet-600 hover:text-violet-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <Button type="submit">Sign in</Button>
      </form>
    </>
  );
};

export default LoginForm;
