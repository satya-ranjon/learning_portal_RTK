import { DeleteIcon, EditIcon } from "../../../constant/icon";
import EditQuiz from "./EditQuiz";

const Quiz = () => {
  return (
    <tr>
      <td className="table-td">Quiz 1 - JavaScript Interview Questions</td>
      <td className="table-td">
        Debounce Function in JavaScript - JavaScript Job...
      </td>
      <td className="table-td">
        <DeleteIcon />
      </td>
      <td>
        <EditQuiz />
      </td>
    </tr>
  );
};

export default Quiz;
