import React, { useState } from "react";
import { Link } from "react-router-dom";
import Model from "../../common/modal/Model";
import Assignment from "./Assignment";
import SubmitAssignment from "./SubmitAssignment";
import dateFormatter from "../../../utils/dateFormatter";

const VideoDescription = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleModelIsOpen = () => {
    setIsModelOpen((prv) => !prv);
  };

  console.log(dateFormatter(new Date()));
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-100">
        Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS
        SoftExpo 2023
      </h1>
      <h2 className="pb-4 text-sm leading-[1.7142857] text-slate-400">
        Uploaded on 23 February 2020
      </h2>

      <div className="flex gap-4">
        <button
          onClick={handleModelIsOpen}
          className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
          এসাইনমেন্ট
        </button>

        <Link
          to="/quiz"
          className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
          কুইজে অংশগ্রহণ করুন
        </Link>
      </div>
      <p className="mt-4 text-sm  pb-4  text-slate-400 leading-6">
        আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন,
        তারা রিয়্যাক্ট এর বেশ কিছু কনসেপ্ট ঠিক মতো আয়ত্ত না করতে পারার কারণে
        বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ পর্যন্ত বুঝতে না পেরে হতাশ হয়ে
        পড়েন। তাদের জন্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে
        ধরেছি যেগুলো বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিডিওটি
        দেখলে আপনাদের এই সমস্যাগুলো নিয়ে আর কনফিউশন থাকবেনা।
      </p>
      <Assignment />
      {isModelOpen && (
        <Model
          closeFun={handleModelIsOpen}
          width="600px"
          height="400px"
          top="20%">
          <SubmitAssignment />
        </Model>
      )}
    </div>
  );
};

export default VideoDescription;
