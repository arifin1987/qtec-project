import { useState } from "react";

import AddTaskModal from "../components/tasks/AddTaskModal";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Add Task
      </button>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Tasks;
