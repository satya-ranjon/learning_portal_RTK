import Table from "../../components/common/table/Table";
import AssignmentMark from "../../components/admin/assignment/AssignmentMark";
import Tbody from "../../components/common/table/Tbody";
const AssignmentMarks = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <ul className="assignment-status">
            <li>
              Total <span>4</span>
            </li>
            <li>
              Pending <span>3</span>
            </li>
            <li>
              Mark Sent <span>1</span>
            </li>
          </ul>
          <div className="overflow-x-auto mt-4">
            <Table>
              <thead>
                <tr>
                  <th className="table-th">Assignment</th>
                  <th className="table-th">Date</th>
                  <th className="table-th">Student Name</th>
                  <th className="table-th">Repo Link</th>
                  <th className="table-th">Mark</th>
                </tr>
              </thead>

              <Tbody>
                <AssignmentMark />
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentMarks;
