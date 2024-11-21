import React from "react";

const courses = [
  { title: "<HTML>", description: "short description text" },
  { title: "<HTML>", description: "short description text" },
  { title: "<HTML>", description: "short description text" },
  { title: "<HTML>", description: "short description text" },
  { title: "<HTML>", description: "short description text" },
  { title: "<HTML>", description: "short description text" },
  { title: "<HTML>", description: "short description text" },
  { title: "<HTML>", description: "short description text" },
];

const CoursesSection = () => (
  <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:w-[1000px] w-full mx-auto">
    {courses.map((course, index) => (
      <div
        key={index}
        className="p-6 border border-gray-200 flex flex-col items-center bg-gray-300 shadow-md text-center h-auto w-full"
      >
        <h2 className="text-xl font-bold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <button className="px-4 py-2 bg-black text-white border border-gray-300 rounded-sm mt-auto">
          Start Learning
        </button>
      </div>
    ))}
  </section>
);

export default CoursesSection;
