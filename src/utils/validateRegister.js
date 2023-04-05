import validateEmail from "./validateEmail";

export default function validateRegister(inputValue) {
  if (!inputValue.name) {
    return "Name is Required";
  } else if (!inputValue.email) {
    return "Email is Required";
  } else if (!validateEmail(inputValue.email)) {
    return "Email is invalid !";
  } else if (!inputValue.password) {
    return "Password is Required ";
  } else if (!(inputValue.password.length > 6)) {
    return "Password minimum 6 digit";
  } else if (!(inputValue.password === inputValue.confirmPassword)) {
    return "Password is Not Match !";
  } else {
    return;
  }
}
