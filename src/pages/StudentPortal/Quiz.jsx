import React from "react";
import QuizList from "../../components/student/quiz/QuizList";

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
const Quiz = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Quizzes for "Debounce Function in JavaScript - JavaScript Job
            Interview question"
          </h1>
          <p className="text-sm text-slate-200">
            Each question contains 5 Mark
          </p>
        </div>
        <QuizList />
      </div>
    </section>
  );
};

export default Quiz;
