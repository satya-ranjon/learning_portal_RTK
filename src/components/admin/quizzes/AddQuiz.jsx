import { useState } from "react";
import Modal from "../../common/modal/Model";
import Input from "../../common/Input";
import SelectVideo from "../../common/selectVideo/SelectVideo";
import { useEffect } from "react";
import Button from "../../common/Button";
import AddOption from "../../common/addoption/AddOption";
import Messages from "../../common/message";
import validateQuiz from "../../../utils/validateQuiz";
import { useLocation, useNavigate } from "react-router-dom";

const initialState = {
  question: "",
  video_id: null,
  video_title: "",
  options: [],
};

const AddQuiz = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [clearSelectVideoData, setClearSelectVideo] = useState(false);
  const [addedQuizOption, setAddedQuizOption] = useState([]);
  const [clearOptionData, setClearOption] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(initialState);

  const handleModalIsOpen = () => {
    setModalIsOpen((prv) => !prv);
    setInputValue(initialState);
    setSelectedVideo({});
    setAddedQuizOption([]);
    setClearSelectVideo(true);
    setClearOption(true);
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

  const handleInputValueChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // Handle Selected Video ID & Title
  const selectedVideoData = (item) => {
    setSelectedVideo(item);
  };

  useEffect(() => {
    if (selectedVideo?.id && selectedVideo?.title) {
      setInputValue({
        ...inputValue,
        video_id: selectedVideo?.id,
        video_title: selectedVideo.title,
      });
    }
    setClearSelectVideo(false);
  }, [selectedVideo]);

  // Handle Quiz Option
  const optionData = (data) => {
    setAddedQuizOption(data);
  };

  useEffect(() => {
    if (addedQuizOption?.length !== 0) {
      setInputValue({ ...inputValue, options: [...addedQuizOption] });
    }
    setClearOption(false);
  }, [addedQuizOption]);

  const handleCreateQuiz = (e) => {
    e.preventDefault();
    const isError = validateQuiz(inputValue);
    setError(isError);
    if (!isError) {
      setInputValue(initialState);
      setSelectedVideo({});
      setClearSelectVideo(true);
      setClearOption(true);
      setError("");
      console.log(inputValue);
    }
  };

  return (
    <>
      <div className="w-full flex">
        <button onClick={handleModalIsOpen} className="btn ml-auto">
          Add Quiz
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          closeFun={handleModalIsOpen}
          width="900px"
          height="720px"
          top="10%">
          {error && <Messages cls="danger fixed" message={error} />}
          <h1 className="text-2xl text-bold  ">
            <span className="primary-highlighter">Quiz</span> Create
          </h1>
          <form onSubmit={handleCreateQuiz}>
            <h1 className=" mt-4 text-sm leading-[1.7142857] text-slate-400">
              Question
            </h1>
            <Input
              // required
              cls="mt-4"
              placeholder="Question"
              name="question"
              value={inputValue.question}
              onChange={handleInputValueChange}
            />
            <h1 className="pb-4  mt-4 text-sm leading-[1.7142857] text-slate-400">
              Select Video
            </h1>
            <SelectVideo
              selectedData={selectedVideoData}
              clearSelect={clearSelectVideoData}
            />
            <h1 className=" text-sm leading-[1.7142857] text-slate-400 mt-9">
              Add Options
            </h1>
            <AddOption
              limit="4"
              optionsFun={optionData}
              clearOption={clearOptionData}
            />
            <Button cls="mt-8">Create Quiz</Button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddQuiz;
