export default function validateLogin(inputValue) {
  if (!inputValue.email) {
    return "Email is Required !";
  } else if (!validateEmail(inputValue.email)) {
    return "Email is invalid !";
  } else if (!inputValue.password) {
    return "Password is Required !";
  } else {
    return;
  }
}
