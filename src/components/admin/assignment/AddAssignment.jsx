import { useState, useEffect } from "react";
import Modal from "../../common/modal/Model";
import { useLocation, useNavigate } from "react-router-dom";
import SelectVideo from "../../common/selectVideo/SelectVideo";
import Button from "../../common/Button";
import Input from "../../common/Input";

const initialState = {
  title: "",
  video_id: null,
  video_title: "",
  totalMark: "100",
};

const AddAssignment = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(initialState);
  const [selectVideo, setSelectVideo] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clearSelect, setClearSelect] = useState(false);
  const navigate = useNavigate();

  // handle Modal Open & Close
  const handleModalIsOpen = () => {
    setModalIsOpen((prv) => !prv);
    setInputValue(initialState);
    setSelectVideo(null);
  };
  const { search: add } = useLocation();

  useEffect(() => {
    if (add.endsWith("add=true")) {
      setModalIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      navigate("?add=true");
    } else navigate("?add=false");
  }, [modalIsOpen]);

  // handle input value assignment form data
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const selectedData = (item) => {
    setSelectVideo(item);
  };

  useEffect(() => {
    if (selectVideo?.id && selectVideo?.title) {
      setInputValue({
        ...inputValue,
        video_id: selectVideo?.id,
        video_title: selectVideo?.title,
      });
    }
    setClearSelect(false);
  }, [selectVideo]);

  useEffect(() => {
    if (inputValue.video_id && inputValue.video_title) {
      setDisabled(false);
    } else setDisabled(true);
  }, [inputValue]);

  // handle Create Submit

  const createAssignment = (e) => {
    e.preventDefault();
    if (inputValue.title && inputValue.video_id && inputValue.video_title) {
      console.log(inputValue);
      setInputValue(initialState);
      setSelectVideo(null);
      setClearSelect(true);
    }
  };

  return (
    <>
      <div className="w-full flex">
        <button onClick={handleModalIsOpen} className="btn ml-auto">
          Add Assignment
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          closeFun={handleModalIsOpen}
          width="700px"
          height="500px"
          top="10%">
          <h1 className="text-2xl text-bold  ">
            <span className="primary-highlighter">Assignment</span> Create
          </h1>
          <form onSubmit={createAssignment}>
            <h1 className=" mt-4 text-sm leading-[1.7142857] text-slate-400">
              Assignment Name
            </h1>
            <Input
              required
              cls="mt-4 "
              placeholder="Assignment Name "
              name="title"
              value={inputValue.title}
              onChange={handleInputChange}
            />
            <h1 className="pb-4  mt-4 text-sm leading-[1.7142857] text-slate-400">
              Select Video
            </h1>
            <SelectVideo
              selectedData={selectedData}
              clearSelect={clearSelect}
            />
            <h1 className=" text-sm leading-[1.7142857] text-slate-400 mt-9">
              Total Mark
            </h1>
            <Input
              required
              cls="mt-4 "
              placeholder="Assignment Name "
              name="totalMark"
              value={inputValue.totalMark}
              onChange={handleInputChange}
            />
            <Button disabled={disabled} cls="mt-4">
              Create
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddAssignment;
