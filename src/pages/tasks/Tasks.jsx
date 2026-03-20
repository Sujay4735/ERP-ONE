import { FaFilter, FaFileAlt, FaPrint, FaCopy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../../components/pageHeader";

 
const Tasks = () => {

  const navigate = useNavigate();

  return (

      <div className="page-wrapper">

<CommonHeader title="Tasks" />
        <div className="flex flex-wrap items-center gap-3 mb-4">

          <div className="flex items-center gap-2">
            <span className="text-sm">View</span>

            <select className="border rounded px-2 py-1 bg-white text-sm">
              <option>Task Basic</option>
            </select>
          </div>

          <button className="border bg-white px-3 py-1 rounded text-sm">
            Customize View
          </button>

          <button
            className="btn-primary text-sm"
            onClick={() => navigate("/newtask")}
          >
            New Task
          </button>
        </div>

        <div className="bg-gray-200 border rounded p-2 mb-3 flex items-center gap-2 text-sm">
          <FaFilter />
          <span>Filters</span>
        </div>

        <div className="bg-white border rounded-t px-3 py-2 flex flex-wrap items-center justify-between gap-3">

          <div className="flex items-center gap-3 text-gray-600">
            <FaFileAlt />
            <FaCopy />
            <FaPrint />

            <div className="flex items-center gap-2 ml-2">
              <span className="text-sm">Edit</span>

              <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute top-[2px] left-[2px]"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span>Quick Sort</span>

            <select className="border rounded px-2 py-1 bg-white text-sm">
              <option>Due Date</option>
            </select>

            <span>Total: 0</span>
          </div>

        </div>

        <div className="bg-white border border-t-0 rounded-b p-4 overflow-x-auto">

          <table className="min-w-[700px] w-full text-sm">

            <thead className="border-b text-gray-700">

              <tr>
                <th className="text-left py-2">Edit | View</th>
                <th className="text-left">Due Date</th>
                <th className="text-left">Task Title</th>
                <th className="text-left">Company</th>
                <th className="text-left">Priority</th>
                <th className="text-left">Status</th>
                <th className="text-left">Assigned To</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td colSpan="7" className="text-center py-8 text-gray-500">
                  No records to show.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
  );
};

export default Tasks;