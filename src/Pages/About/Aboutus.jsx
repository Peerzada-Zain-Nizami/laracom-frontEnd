import React from "react";

const Aboutus = () => {
  return (
    <>
      <header className="flex flex-col items-center text-center p-4 text-md">
        <p className="text-xl">laracomm.jp</p>
        <br />
        <div className="w-full max-w-2xl text-justify">
          <p>
            laracomm.jp is an initiative of Miyara web solutions to provide
            accessible and high- quality web development education to everyone,
            everywhere. We believe that learning should be free and that
            everyone should have the opportunity to acquire the skills needed to
            thrive in the digital age.
          </p>
          <br />
          <p>
            At laracomm.jp, we are committed to providing a supportive and
            inclusive learning environment where everyone feels welcome. We
            believe in the power of education to transform lives, and we are
            dedicated to making web development education accessible to all.
          </p>
          <br />
          <p className="px-5">
            Join the laracomm.jp community today and embark on your journey to
            becoming a skilled web developer.
          </p>
        </div>
        <button className="bg-black text-white py-2 px-7 mt-4">Join Now</button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-auto">
        <div className="flex flex-col items-center text-center border h-full w-full">
          <img
            src="image1.jpg"
            alt="Vision Image"
            className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
          />
          <div className="text-justify w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-2 sm:py-4 h-80 flex flex-col justify-center">
            <h1 className="font-semibold text-lg mb-4 text-center">Vision</h1>
            <p>
              We envision a world where everyone, regardless of their background
              or financial means, has the opportunity to learn web development
              and harness its power to create, innovate, and build a better
              future. We strive to be the leading platform for free,
              high-quality web development education, fostering a global
              community of learners and contributing to a more inclusive and
              technologically advanced society.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center border h-full w-full">
          <div className="text-justify w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-2 sm:py-4 h-80 flex flex-col justify-center">
            <h1 className="font-semibold text-lg mb-4 text-center">Mission</h1>
            <p>
              To democratize web development education and empower individuals
              worldwide with the skills and knowledge to thrive in the digital
              age. We are committed to providing a comprehensive and accessible
              learning platform that breaks down barriers to entry and fosters a
              passionate community of web developers.
            </p>
          </div>
          <img
            src="image2.jpg"
            alt="Mission Image"
            className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Aboutus;
