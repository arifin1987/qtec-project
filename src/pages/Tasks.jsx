import { useState } from "react";
import Modal from "../components/ui/Modal";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Add Task
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
    </div>
  );
};

export default Tasks;
