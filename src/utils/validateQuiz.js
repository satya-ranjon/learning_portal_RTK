import validateOption from "./validateOptions";

export default function validateQuiz(inputValue) {
  if (!inputValue.question) {
    return "Quiz Question is Required";
  } else if (!inputValue.video_id && !inputValue.video_title) {
    return "Select Video is Required";
  } else if (!(inputValue.options?.length >= 2)) {
    return "Minimum Two Options Provide";
  } else if (validateOption(inputValue)) {
    return "Provide Correct Options";
  } else if (
    inputValue.options?.slice()?.findIndex((i) => i.isCorrect) === -1
  ) {
    return "Minimum One Correct Options Provide";
  } else {
    return;
  }
}
