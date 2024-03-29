import { useDispatch } from "react-redux";
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  removeTask,
  updateStatus,
} from "../../redux/features/tasks/tasksSlice";

const TaskCard = ({ task }) => {
  const { title, description, assignedTo, date } = task;

  const dispatch = useDispatch();

  let updatedStatus;

  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus = "complete";
  } else {
    updatedStatus = "archive";
  }
  return (
    <div className="bg-purple-300 rounded-md p-8 mb-4">
      <h1
        className={`text-2xl mb-4 ${
          task.priority === "high" ? "text-red-700" : ""
        }
      ${task.priority === "medium" ? "text-yellow-700" : ""}
      ${task.priority === "low" ? "text-green-700" : ""}
      
      
      
      `}
      >
        {title}
      </h1>
      <p>{description}</p>
      <p>{assignedTo}</p>
      <p>{date}</p>
      <div className="flex gap-4">
        <button title="Delete" onClick={() => dispatch(removeTask(task.id))}>
          <TrashIcon className="h-8 w-8 text-red-600" />
        </button>
        <button
          // eslint-disable-next-line react/prop-types
          onClick={() =>
            dispatch(updateStatus({ id: task.id, status: updatedStatus }))
          }
          title="Update Status"
        >
          <ArrowRightIcon className="h-8 w-8 text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
