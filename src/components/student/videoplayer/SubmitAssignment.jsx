const SubmitAssignment = () => {
  return (
    <>
      {" "}
      <h1 className="text-2xl text-bold pb-4 ">
        <span className="primary-highlighter">এসাইনমেন্ট</span> জমা দিন
      </h1>
      <p className="pb-4 text-sm leading-[1.7142857] text-slate-400">
        গিটহাব রিপোসিটরি লিঙ্ক *
      </p>
      <form>
        <input required className="login-input rounded-md" />
        <button className="px-4 py-2 rounded-full text-bold bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95">
          এসাইনমেন্ট জমা দিন
        </button>
      </form>
    </>
  );
};

export default SubmitAssignment;
