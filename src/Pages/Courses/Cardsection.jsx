import React from "react";

const courses = [
  {
    id: 1,
    title: "Course Name",
    description: "Description of Course",
    image: "card2.png",
  },
  {
    id: 2,
    title: "Course Name",
    description: "Description of Course",
    image: "Bank-Credit-Card-Process-Flow.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Description of Course",
    image: "Bank-Credit-Card-Process-Flow.png",
  },
  {
    id: 2,
    title: "Project Name",
    description: "Description of Course",
    image: "card1.jpeg",
  },
];

const project = [
  {
    id: 1,
    title: "Project Name",
    description: "Description of Course",
    image: "card1.jpeg",
  },
  {
    id: 2,
    title: "Project Name",
    description: "Description of Course",
    image: "card2.png",
  },
];

const Card = ({ title, description, image }) => (
  <div>
    <h2 className="font-semibold p-2 text-xl">{title}</h2>
    <p className="text-lg p-3 mb-4">{description}</p>
    <div className="border overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <button className="bg-black text-white px-3 py-1 text-sm">
          Add to curriculum
        </button>
      </div>
    </div>
  </div>
);

const Cardsection = () => (
  <div className="container mx-auto w-[50rem] py-14">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
      {courses.map((course, index) => (
        <Card key={index} {...course} />
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-5">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-4">
      {project.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  </div>
);

export default Cardsection;
