import React from "react";
import Image from "./image";

const imagessection = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Unlock Your Web Development Potential with our Free Services
      </h1>
      <p className="text-center mb-8 max-w-xl">
        Laraacom.in is your one-stop platform for mastering web development,
        offering a comprehensive suite of free resources designed to take you
        from beginner to skilled developer.
      </p>
      <Image />
    </div>
  );
};

export default imagessection;
