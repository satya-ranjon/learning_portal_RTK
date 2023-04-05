import React from "react";
import VideoPlayer from "../../components/student/videoplayer/VideoPlayer";
import VideoList from "../../components/student/videos/VideoList";

const CoursePlayer = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <VideoPlayer />
          <VideoList />
        </div>
      </div>
    </section>
  );
};

export default CoursePlayer;
