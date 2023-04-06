import { useEffect, useState } from "react";
import Model from "../../common/modal/Model";
import VideoForm from "../../common/videoForm/VideoForm";
import { EditIcon } from "../../../constant/icon";

const initialState = {
  id: 1,
  title: "a",
  description: "a",
  url: "a",
  views: "a",
  duration: "a",
  createdAt: "a",
};

const EditVideo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // handle Modal Open & Close
  const handleModalIsOpen = () => {
    setModalIsOpen((prv) => !prv);
  };

  const handleVideoUpdate = (value) => {
    console.log(value);
  };

  return (
    <>
      <EditIcon onClick={handleModalIsOpen} />

      {modalIsOpen && (
        <Model
          closeFun={handleModalIsOpen}
          width="700px"
          height="700px"
          top="10%">
          <h1 className="text-2xl text-bold  ">
            <span className="primary-highlighter">Video</span> Update
          </h1>
          <VideoForm
            create={false}
            initialData={initialState}
            videoData={handleVideoUpdate}
          />
        </Model>
      )}
    </>
  );
};

export default EditVideo;
