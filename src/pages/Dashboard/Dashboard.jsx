import React from "react";
import {
  AssignmentIcon,
  AssignmentIconMark,
  QuizIcon,
  VideoWatchIcon,
} from "../../constant/icon";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-8">
            <Link to="/admin/videos" className="dashboard-item-card">
              <VideoWatchIcon />
              <p className="text-slate-200 mt-3 ">Videos</p>
            </Link>

            <Link to="/admin/assignments" className="dashboard-item-card">
              <AssignmentIcon />
              <p className="text-slate-200 mt-3">Assignment</p>
            </Link>

            <Link to="/admin/quizzes" className="dashboard-item-card">
              <QuizIcon />
              <p className="text-slate-200 mt-3 ">Quizzes</p>
            </Link>

            <Link to="/admin/assignmentsMark" className="dashboard-item-card">
              <AssignmentIconMark />
              <p className="text-slate-200 mt-3 ">Assignment Mark</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
