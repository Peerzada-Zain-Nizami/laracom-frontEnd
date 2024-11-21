import React from "react";

const LatestArticle = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6">
      <div className="flex-1 flex justify-center md:justify-start">
        <img
          src="images45.jpg"
          alt="Take Your First Step Towards Coding"
          className="w-full max-w-[20rem] h-[15rem] md:max-w-[24rem] md:h-[20rem] object-cover"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold mb-4">First Step</h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base px-2 md:px-0">
          Take your first step Towards Coding with laraComm, the fastest growing
          online community of Laravel developers in Japan. We offer all courses
          for free and support of a huge community.
        </p>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default LatestArticle;
