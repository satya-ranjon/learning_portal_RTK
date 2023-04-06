import Table from "../../common/table/Table";
import Tbody from "../../common/table/Tbody";
import VideoItem from "./VideoItem";

const VideosList = () => {
  return (
    <div className="overflow-x-auto mt-4">
      <Table>
        <thead>
          <tr>
            <th className="table-th">Video Title</th>
            <th className="table-th">Description</th>
            <th className="table-th">Action</th>
          </tr>
        </thead>

        <Tbody>
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </Tbody>
      </Table>
    </div>
  );
};

export default VideosList;
