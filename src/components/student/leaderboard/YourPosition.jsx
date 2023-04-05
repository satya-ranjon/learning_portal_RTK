import Table from "../../common/table/Table";
import Thead from "./Thead";

const YourPosition = () => {
  return (
    <>
      <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
      <Table>
        <Thead />
        <tbody>
          <tr className="border-2 border-cyan">
            <td className="table-td text-center font-bold">4</td>
            <td className="table-td text-center font-bold">Saad Hasan</td>
            <td className="table-td text-center font-bold">50</td>
            <td className="table-td text-center font-bold">50</td>
            <td className="table-td text-center font-bold">100</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default YourPosition;
