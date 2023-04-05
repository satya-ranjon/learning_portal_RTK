export default function validateOption(inputValue) {
  const newArray = inputValue?.options.slice().map((item) => {
    if (item.option?.length >= 1) {
      return true;
    } else {
      return false;
    }
  });
  if (newArray?.findIndex((item) => !item) === -1) {
    return false;
  } else {
    return true;
  }
}
