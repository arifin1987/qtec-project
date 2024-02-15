import { useState } from "react";

import AddTaskModal from "../components/tasks/AddTaskModal";
import { useSelector } from "react-redux";
import TaskCard from "../components/tasks/TaskCard";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useSelector((state) => state.tasksSlice);
  console.log(tasks);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Add Task
      </button>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="grid grid-cols-3 gap-3 mt-12">
        <div>
          <h1 className="bg-purple-600 p-4 rounded-md mb-2 font-bold">
            Pending
          </h1>
          {tasks.map((item) => (
            <TaskCard key={item.id} task={item} />
          ))}
        </div>
        <div>
          <h1 className="bg-purple-600 p-4 rounded-md mb-2 font-bold">
            In Progress
          </h1>
          {tasks.map((item) => (
            <TaskCard key={item.id} task={item} />
          ))}
        </div>
        <div>
          <h1 className="bg-purple-600 p-4 rounded-md mb-2 font-bold">
            Complete
          </h1>
          {tasks.map((item) => (
            <TaskCard key={item.id} task={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
