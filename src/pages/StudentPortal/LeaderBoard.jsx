import TopResult from "../../components/student/leaderboard/TopResult";
import YourPosition from "../../components/student/leaderboard/YourPosition";

const LeaderBoard = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <YourPosition />
        <TopResult />
      </div>
    </section>
  );
};

export default LeaderBoard;
