import React from "react";
const x = [
  {
    id: 1,
    question: "What is a Debounce function in JavaScript?",
    video_id: 1,
    video_title:
      "Debounce Function in JavaScript - JavaScript Job Interview question",
    options: [
      {
        id: "1",
        option: "A function that is called after a certain time interval",
        isCorrect: true,
      },
      {
        id: "2",
        option: "A function that is called after a certain time interval",
        isCorrect: false,
      },
      {
        id: 3,
        option: "A function that is called after a certain time interval",
        isCorrect: false,
      },
      {
        id: 4,
        option: "A function that is called after a certain time interval",
        isCorrect: false,
      },
    ],
  },
];
const QuizList = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="quiz">
          <h4 className="question">
            Quiz 1 - What is a Debounce function in JavaScript?
          </h4>
          <form className="quizOptions">
            {/* <!-- Option 1 --> */}
            <label htmlFor="option1_q1">
              <input type="checkbox" id="option1_q1" />A function that is called
              after a certain time interval
            </label>

            {/* <!-- Option 2 --> */}
            <label htmlFor="option2_q1">
              <input type="checkbox" id="option2_q1" />A function that is called
              after a certain time interval
            </label>

            {/* <!-- Option 3 --> */}
            <label htmlFor="option3_q1">
              <input type="checkbox" id="option3_q1" />A function that is called
              after a certain time interval
            </label>

            {/* <!-- Option 4 --> */}
            <label htmlFor="option4_q1">
              <input type="checkbox" id="option4_q1" />A function that is called
              after a certain time interval
            </label>
          </form>
        </div>
      </div>
      <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95">
        Submit
      </button>
    </>
  );
};

export default QuizList;
