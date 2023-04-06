import validateUrl from "./validateUrl";

export default function (inputValue) {
  if (!(inputValue?.title?.length >= 1)) {
    return "Video Title is Required";
  } else if (!(inputValue?.description?.length >= 1)) {
    return "Video Description is Required";
  } else if (!validateUrl(inputValue?.url)) {
    return "Valid Youtube Video Url is Required";
  } else if (!(inputValue?.views?.length >= 1)) {
    return "Video Views is Required";
  } else if (!(inputValue?.duration?.length >= 1)) {
    return "Video Duration is Required";
  } else {
    return;
  }
}
