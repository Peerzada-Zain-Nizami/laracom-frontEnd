import React from "react";

const ImageGrid = () => {
  return (
    <div className="h-full w-[84.3rem] bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        <div className="bg-white shadow-md overflow-hidden">
          <img
            src="images45.jpg"
            alt="Free Courses"
            className="w-full h-32 sm:h-40 md:h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-center text-lg font-semibold">Free Courses</h2>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden">
          <img
            src="images45.jpg"
            alt="Download Resources"
            className="w-full h-32 sm:h-40 md:h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-center text-lg font-semibold">
              Download Resources
            </h2>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden">
          <img
            src="images45.jpg"
            alt="Programming"
            className="w-full h-32 sm:h-40 md:h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-center text-lg font-semibold">Programming</h2>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden">
          <img
            src="images45.jpg"
            alt="Free Certification"
            className="w-full h-32 sm:h-40 md:h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-center text-lg font-semibold">
              Free Certification
            </h2>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden">
          <img
            src="images45.jpg"
            alt="Free Certification"
            className="w-full h-32 sm:h-40 md:h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-center text-lg font-semibold">
              Free Certification
            </h2>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden">
          <img
            src="images45.jpg"
            alt="Free Certification"
            className="w-full h-32 sm:h-40 md:h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-center text-lg font-semibold">
              Free Certification
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
