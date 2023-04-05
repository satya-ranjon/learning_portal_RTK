import AddQuiz from "../../components/admin/quizzes/AddQuiz";
import QuizList from "../../components/admin/quizzes/QuizList";

const Quizzes = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <AddQuiz />
          <QuizList />
        </div>
      </div>
    </section>
  );
};

export default Quizzes;
