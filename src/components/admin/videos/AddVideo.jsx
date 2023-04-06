import { useEffect, useState } from "react";
import Model from "../../common/modal/Model";
import { useLocation, useNavigate } from "react-router-dom";
import VideoForm from "../../common/videoForm/VideoForm";

const AddVideo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // handle Modal Open & Close
  const handleModalIsOpen = () => {
    setModalIsOpen((prv) => !prv);
  };
  const { search: add } = useLocation();
  const navigate = useNavigate();
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

  const handleVideoCreate = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="w-full flex">
        <button className="btn ml-auto" onClick={handleModalIsOpen}>
          Add Video
        </button>
      </div>

      {modalIsOpen && (
        <Model
          closeFun={handleModalIsOpen}
          width="700px"
          height="700px"
          top="10%">
          <h1 className="text-2xl text-bold  ">
            <span className="primary-highlighter">Video</span> Create
          </h1>
          <VideoForm videoData={handleVideoCreate} clearDate={true} />
        </Model>
      )}
    </>
  );
};

export default AddVideo;
