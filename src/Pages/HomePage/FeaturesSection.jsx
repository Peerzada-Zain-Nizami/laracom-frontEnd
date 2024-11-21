import React from "react";

const FeaturseSection = () => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-around items-center bg-cover bg-center h-64 text-black font-bold text-xl sm:text-2xl"
      style={{
        backgroundImage: "url('blank.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-75 px-6 py-3 rounded mb-4 sm:mb-0">
        Assignments
      </div>
      <div className="bg-white bg-opacity-75 px-6 py-3 rounded">Quizzes</div>
    </div>
  );
};

export default FeaturseSection;
