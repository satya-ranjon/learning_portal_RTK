import { VideoIcon } from "../../../constant/icon";

const VideoListItem = () => {
  return (
    <div className="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3">
      <VideoIcon />
      <div clas="flex flex-col w-full">
        <a href="#">
          <p className="text-slate-50 text-sm font-medium">
            Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS
            SoftExpo 2023
          </p>
        </a>
        <div>
          <span className="text-gray-400 text-xs mt-1">34.5 Mins</span>
          <span className="text-gray-400 text-xs mt-1"> | </span>
          <span className="text-gray-400 text-xs mt-1">241K views</span>
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;
