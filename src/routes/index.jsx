import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../pages/StudentPortal/Quiz";
import PublicRoutes from "./public";
import PrivateRoute from "./private";
import LeaderBoard from "../pages/StudentPortal/LeaderBoard";
import CoursePlayer from "../pages/StudentPortal/CoursePlayer";
import RegisterStudent from "../pages/StudentPortal/RegisterStudent";
import AdminPrivateRoutes from "./private/AdminPrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import AssignmentMarks from "../pages/Dashboard/AssignmentMarks";
import Quizzes from "../pages/Dashboard/Quizzes";
import Videos from "../pages/Dashboard/Videos";
import LoginAdmin from "../pages/Dashboard/LoginAdmin";
import Navbar from "../components/common/navbar/Navbar";
import LoginStudent from "../pages/StudentPortal/LoginStudent";
import Assignments from "../pages/Dashboard/Assignments";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<CoursePlayer />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
        <Route path="/admin" element={<AdminPrivateRoutes />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/assignments" element={<Assignments />} />
          <Route path="/admin/assignmentsMark" element={<AssignmentMarks />} />
          <Route path="/admin/quizzes" element={<Quizzes />} />
          <Route path="/admin/videos" element={<Videos />} />
        </Route>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/login" element={<LoginStudent />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
        </Route>
        <Route path="*" element={<h1>Nothing ... </h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
