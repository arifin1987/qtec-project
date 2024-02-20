import { useState } from "react";

import AddTaskModal from "../components/tasks/AddTaskModal";
import { useSelector } from "react-redux";
import TaskCard from "../components/tasks/TaskCard";
import MyTasks from "../components/tasks/MyTasks";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useSelector((state) => state.tasksSlice);
  const pendingTasks = tasks.filter((item) => item.status === "pending");
  const runningTasks = tasks.filter((item) => item.status === "running");
  const completedTasks = tasks.filter((item) => item.status === "complete");
  console.log(tasks);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Add Task
      </button>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex  justify-between p-8  ">
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div>
            <h1 className="bg-purple-600 p-4 rounded-md mb-2 font-bold">
              Pending
            </h1>
            <p className="bg-blue-400 text-white w-12 h-8 rounded-md grid place-content-center mb-2 mx-auto">
              {pendingTasks.length}
            </p>
            {pendingTasks.map((item) => (
              <TaskCard key={item.id} task={item} />
            ))}
          </div>
          <div>
            <h1 className="bg-purple-600 p-4 rounded-md mb-2 font-bold">
              In Progress
            </h1>
            <p className="bg-blue-500 text-white w-12 h-8 rounded-md grid place-content-center mb-2 mx-auto">
              {runningTasks.length}
            </p>
            {runningTasks.map((item) => (
              <TaskCard key={item.id} task={item} />
            ))}
          </div>
          <div>
            <h1 className="bg-purple-600 p-4 rounded-md mb-2 font-bold">
              Complete
            </h1>
            <p className="bg-blue-500 text-white w-12 h-8 rounded-md grid place-content-center mb-2 mx-auto">
              {completedTasks.length}
            </p>
            {completedTasks.map((item) => (
              <TaskCard key={item.id} task={item} />
            ))}
          </div>
        </div>
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;
