import Modal from "../ui/Modal";

// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="qtec project">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          cumque.
        </p>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
