import Thead from "./Thead";
import Table from "../../common/table/Table";

const TopResult = () => {
  return (
    <div className="my-8">
      <h3 className="text-lg font-bold">Top 20 Result</h3>
      <Table>
        <Thead />
        <tbody>
          <tr className="border-slate-600/50">
            <td className="table-td text-center">4</td>
            <td className="table-td text-center">Saad Hasan</td>
            <td className="table-td text-center">50</td>
            <td className="table-td text-center">50</td>
            <td className="table-td text-center">100</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TopResult;
