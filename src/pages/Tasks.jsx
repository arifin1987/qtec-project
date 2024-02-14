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
      <div>
        {tasks.map((item) => (
          <TaskCard key={item.id} task={item} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
