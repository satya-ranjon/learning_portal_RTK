import { DeleteIcon, EditIcon } from "../../../constant/icon";
import EditAssignment from "./EditAssignment";

const Assignment = () => {
  return (
    <tr>
      <td className="table-td">Assignment 1 - Scoreboard Application</td>
      <td className="table-td">
        JavaScript Bangla Tutorial | JS AJAX | XMLHttp
      </td>
      <td className="table-td">100</td>
      <td className="table-td ">
        <DeleteIcon />
      </td>
      <td>
        <EditAssignment />
      </td>
    </tr>
  );
};

export default Assignment;
