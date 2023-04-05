import React from "react";
import Table from "../../common/table/Table";
import Tbody from "../../common/table/Tbody";
import Assignment from "./Assignment";

const AssignmentList = () => {
  return (
    <div className="overflow-x-auto mt-4">
      <Table>
        <thead>
          <tr>
            <th className="table-th">Title</th>
            <th className="table-th">Video Title</th>
            <th className="table-th">Mark</th>
            <th className="table-th">Action</th>
          </tr>
        </thead>
        <Tbody>
          <Assignment />
          <Assignment />
          <Assignment />
          <Assignment />
        </Tbody>
      </Table>
    </div>
  );
};

export default AssignmentList;
