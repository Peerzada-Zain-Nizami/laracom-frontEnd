import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t text-center">
      <div className="max-w-6xl mx-auto mb-[3rem] px-4 flex flex-col md:flex-row justify-center">
        <div className="flex flex-col md:flex-row space-x-16 justify-center text-center">
          <div className="space-y-2">
            <h3 className="font-semibold">Courses</h3>
            <p className="text-sm">Community</p>
            <p className="text-sm">Download</p>
            <p className="text-sm">Useful links</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">About</h3>
            <p className="text-sm">Privacy policy</p>
            <p className="text-sm">Terms and conditions</p>
            <p className="text-sm">Contact us</p>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-10 text-center">
          <h3 className="font-semibold">Join our mailing list</h3>
          <form className="flex justify-center mt-2">
            <input
              type="email"
              placeholder="Email *"
              className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600"
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-gray-200 hover:bg-gray-300 rounded border"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 flex flex-col mb-[-3rem] md:flex-row justify-center items-center text-sm text-gray-500 text-center">
        <p>© 2024 My Website. Developed and maintained by Your Name.</p>

        <div className="flex space-x-4 mt-4 md:mt-0 md:ml-10 justify-center">
          <a href="#" className="h-10 w-16">
            <img src="x.png" alt="X Icon" className="h-full w-full" />
          </a>
          <a href="#" className="h-9 w-11">
            <img src="git.png" alt="GitHub Icon" className="h-full w-full" />
          </a>
          <a href="#" className="h-9 w-11">
            <img
              src="message.png"
              alt="Message Icon"
              className="h-full w-full"
            />
          </a>
          <a href="#" className="h-9 w-14">
            <img
              src="facebook.webp"
              alt="Facebook Icon"
              className="h-full w-full"
            />
          </a>
          <a href="#" className="h-9 w-14">
            <img src="you.png" alt="YouTube Icon" className="h-full w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
