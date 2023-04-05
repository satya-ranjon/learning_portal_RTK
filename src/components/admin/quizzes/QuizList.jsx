import React from "react";
import Table from "../../common/table/Table";
import Tbody from "../../common/table/Tbody";
import Quiz from "./Quiz";

const QuizList = () => {
  return (
    <div className="overflow-x-auto mt-4">
      <Table>
        <thead>
          <tr>
            <th className="table-th">Question</th>
            <th className="table-th">Video</th>
            <th className="table-th justify-center">Action</th>
          </tr>
        </thead>
        <Tbody>
          <Quiz />
        </Tbody>
      </Table>
    </div>
  );
};

export default QuizList;
