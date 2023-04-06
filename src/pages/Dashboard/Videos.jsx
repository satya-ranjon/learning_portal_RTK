import AddVideo from "../../components/admin/videos/AddVideo";
import VideosList from "../../components/admin/videos/videosList";

const Videos = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <AddVideo />
          <VideosList />
        </div>
      </div>
    </section>
  );
};

export default Videos;
