import React, { useEffect, useState } from "react";
import Input from "../Input";
import Messages from "../message";
import Button from "../Button";
import validateVideo from "../../../utils/validateVideo";

const initialState = {
  title: "",
  description: "",
  url: "",
  views: "",
  duration: "",
  createdAt: "",
};

/**
 * @param {boolean} create  // (boolean) default is true
 * @param {boolean} clearDate  // (boolean) default is false / define true = The input value will be cleared when the form is submitted
 * @param {function} videoData  // (function)  return video update  data
 * @param {json} initialData  // (JSON) If you have any previous information then you can give it here / Your given data format like  : { title: "",description: "", url: "", views: "",}
 * @returns JSX & video data
 */

const VideoForm = ({
  create = true,
  videoData = () => {},
  initialData,
  clearDate = false,
}) => {
  const [inputValue, setInputValue] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { title, description, url, views, duration } = initialData || {};
  // handleInitial Data
  useEffect(() => {
    if (initialData?.id) {
      setInputValue({
        ...inputValue,
        title,
        description,
        url,
        views,
        duration,
      });
    }
  }, []);

  // handle Input Value Change State
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // Handle Create Video Submit
  const handleCreateVideo = (e) => {
    e.preventDefault();
    const isError = validateVideo(inputValue);
    setError(isError);
    if (isError) {
      setSuccess("");
    }
    if (!isError) {
      videoData({ ...inputValue, createdAt: new Date().toLocaleString() });
      setError("");
      setSuccess(`Video ${create ? "Create" : " Update"} Successfully`);
      if (clearDate) {
        setInputValue(initialState);
      }
    }
  };
  return (
    <>
      {error && (
        <Messages style={{ width: "55%" }} cls="danger fixed" message={error} />
      )}
      {success && (
        <Messages
          style={{ width: "55%" }}
          cls="success fixed"
          message={success}
        />
      )}
      <form onSubmit={handleCreateVideo}>
        <h1 className=" mt-4 text-sm leading-[1.7142857] text-slate-400">
          Video Title
        </h1>
        <Input
          cls="mt-4 "
          placeholder="Video Title"
          name="title"
          value={inputValue.title}
          onChange={handleInputChange}
        />
        <h1 className=" mt-4 text-sm leading-[1.7142857] text-slate-400">
          Video Description
        </h1>
        <Input
          cls="mt-4 "
          placeholder="Video Title"
          name="description"
          value={inputValue.description}
          onChange={handleInputChange}
        />
        <h1 className=" mt-4 text-sm leading-[1.7142857] text-slate-400">
          Video Url
        </h1>
        <Input
          cls="mt-4 "
          placeholder="Video Title"
          name="url"
          value={inputValue.url}
          onChange={handleInputChange}
        />
        <h1 className=" mt-4 text-sm leading-[1.7142857] text-slate-400">
          Video Views
        </h1>
        <Input
          cls="mt-4 "
          placeholder="Video Title"
          name="views"
          value={inputValue.views}
          onChange={handleInputChange}
        />
        <h1 className=" mt-4 text-sm leading-[1.7142857] text-slate-400">
          Video Duration
        </h1>
        <Input
          cls="mt-4 "
          placeholder="Video Title"
          name="duration"
          value={inputValue.duration}
          onChange={handleInputChange}
        />
        <Button type="submit" cls="mt-8">
          {create ? "Create" : "Update"} Video
        </Button>
      </form>
    </>
  );
};

export default VideoForm;
