import { useState } from "react";
import Modal from "../../common/modal/Model";
import { EditIcon } from "../../../constant/icon";

const EditQuiz = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalIsOpen = () => {
    setModalIsOpen((prv) => !prv);
  };
  return (
    <>
      <EditIcon onClick={handleModalIsOpen} />
      {modalIsOpen && (
        <Modal closeFun={handleModalIsOpen} maxWidth="700px"></Modal>
      )}
    </>
  );
};

export default EditQuiz;
