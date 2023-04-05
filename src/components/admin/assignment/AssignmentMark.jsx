import React from "react";
import { TickIcon } from "../../../constant/icon";

const AssignmentMark = () => {
  return (
    <tr>
      <td className="table-td">Assignment 1 - Implement Debounce Function</td>
      <td className="table-td">10 Mar 2023 10:58:13 PM</td>
      <td className="table-td">Saad Hasan</td>
      <td className="table-td">
        https://github.com/Learn-with-Sumit/assignment-1
      </td>
      <td className="table-td input-mark">
        <input max="100" defaultValue="100" />
        <TickIcon />
      </td>
      {/* <td class="table-td">100</td> */}
    </tr>
  );
};

export default AssignmentMark;
