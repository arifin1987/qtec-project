import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="qtec project">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Description
            </label>
            <input
              className="w-full rounded-md"
              type="text"
              id="description"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Deadline
            </label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register("date")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Assign to
            </label>
            <select
              className="w-full rounded-md"
              id="assignedTo"
              {...register("assignedTo")}
            >
              <option value="Shohidul Arfin">Shohidul Arifin</option>
              <option value="Kamal Khan">Kamal Khan</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Priority
            </label>
            <select
              className="w-full rounded-md"
              id="priority"
              {...register("priority")}
            >
              <option defaultValue value="high">
                High
              </option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              onClick={() => onCancel()}
              type="button"
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
