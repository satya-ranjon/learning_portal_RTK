import { DeleteIcon } from "../../../constant/icon";
import EditVideo from "./EditVideo";

const VideoItem = () => {
  return (
    <tr>
      <td className="table-td">
        Lesson 4 - Explicit &amp; Union Types - TypeScript Bangla ( বাংলা )
        Tutorial Series
      </td>
      <td className="table-td">This is the 4th video of this...</td>
      <td className="table-td">
        <DeleteIcon />
      </td>
      <td>
        <EditVideo />
      </td>
    </tr>
  );
};

export default VideoItem;
