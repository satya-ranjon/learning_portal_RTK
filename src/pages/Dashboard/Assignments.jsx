import React from "react";
import AssignmentList from "../../components/admin/assignment/AssignmentList";
import AddAssignment from "../../components/admin/assignment/AddAssignment";

const Assignments = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <AddAssignment />
          <AssignmentList />
        </div>
      </div>
    </section>
  );
};

export default Assignments;
