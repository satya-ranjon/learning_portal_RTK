import styles from "./style.module.css";
import { vidoes } from "./data";
import { useEffect, useState } from "react";
import { DownArrow, Loader } from "../../../constant/icon";

const SelectVideo = ({
  isLoading = false,
  selectedData,
  clearSelect = false,
}) => {
  const [videoSelect, setVideoSelect] = useState(false);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");

  const handleVideoSelect = () => {
    setVideoSelect((prv) => !prv);
  };

  // filter videos start
  const [filterVideo, setFilterVideo] = useState("");
  let videos = vidoes;
  if (filterVideo) {
    videos = vidoes.filter((item) =>
      item.title.toLowerCase().includes(filterVideo.toLowerCase())
    );
  }
  // filter videos end

  const handleSelectedVideo = (video) => {
    selectedData(video);
    setSelectedVideoTitle(video?.title);
    setFilterVideo("");
    setVideoSelect(false);
  };

  useEffect(() => {
    if (!videoSelect) {
      setFilterVideo("");
    }
  }, [videoSelect]);

  useEffect(() => {
    if (clearSelect) {
      setSelectedVideoTitle("");
    }
  }, [clearSelect]);

  return (
    <div
      className={styles.select_item}
      style={{ minHeight: videoSelect && "20rem" }}>
      <div className={styles.select} onClick={handleVideoSelect}>
        <span className=" text-xl font-semibold tracking-tight text-slate-100 ">
          {selectedVideoTitle || "Select Video"}
        </span>
        <DownArrow />
      </div>

      {videoSelect && (
        <>
          <input
            required
            className="login-input mt-4 mb-4"
            placeholder="Video Name"
            onChange={(e) => setFilterVideo(e.target.value)}
          />
          {/* <Loader /> */}
          {videos?.length === 0 && (
            <h1 className=" text-xl font-semibold mt-9 tracking-tight text-center text-slate-100 ">
              .. Not Found !
            </h1>
          )}
          {!isLoading && (
            <div
              className={styles.item_list}
              style={{ overflowY: videos?.length > 5 && "scroll" }}>
              {videos?.map((item, index) => (
                <li onClick={() => handleSelectedVideo(item)} key={item.id}>
                  {index + 1} - {item.title}
                </li>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SelectVideo;
