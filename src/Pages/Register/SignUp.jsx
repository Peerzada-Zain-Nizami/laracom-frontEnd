import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const data = {
    name: name,
    email: email,
    password: password,
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      nav("/login");
    }
  }, [nav]);

  const signUp = async () => {
    // Validation checks
    if (!name) {
      window.alert("Please enter your name.");
      return;
    }
    if (!email) {
      window.alert("Please enter your email.");
      return;
    }
    if (!password) {
      window.alert("Please enter your password.");
      return;
    }
    if (password.length < 6) {
      window.alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        data
      );
      console.log(response);
      setTimeout(() => {
        window.alert("Registration Successful. Go to Login Page to Continue");
        nav("/login");
      }, 1000);
    } catch (error) {
      console.error("Error during registration:", error);
      window.alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen p-4">
      <main className="flex flex-col justify-center sm:flex-row w-full max-w-lg md:max-w-2xl h-auto shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col w-full p-6 pb-6">
          <div className="gap-3 flex flex-col mx-auto w-full sm:w-[24rem]">
            <h1 className="text-center text-3xl mb-4">Sign Up</h1>

            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                placeholder="Enter Your Name"
                type="text"
                className="rounded w-full bg-[#EEE] h-[3rem] p-4 border-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                placeholder="Enter Your Email"
                type="email"
                className="rounded w-full bg-[#EEE] h-[3rem] p-4 border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Password</label>
              <input
                placeholder="Enter Your Password"
                type="password"
                className="rounded w-full bg-[#EEE] h-[3rem] p-4 border-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-[#FF9700] w-full h-[3rem] rounded-lg text-white hover:bg-[#ffb84e] mt-6"
              onClick={signUp}
            >
              Sign Up
            </button>

            <div className="flex items-center justify-center my-4">
              <p className="mx-4 text-gray-600">Or</p>
            </div>

            <Link to="/login">
              <button
                type="button"
                className="w-full h-[3rem] rounded-lg bg-white border border-gray-300 text-gray-800"
              >
                Login Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
