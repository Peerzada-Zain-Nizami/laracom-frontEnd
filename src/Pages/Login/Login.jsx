import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      nav("/");
    }
  }, [nav]);

  const logIn = async () => {
    if (!email) {
      window.alert("Please enter your email.");
      return;
    }

    if (!password) {
      window.alert("Please enter your password.");
     return;
    }

    const data = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        data
      );
      const LoginToken = response.data.token;
      const userName = response.data.user.name;
      const userEmail = response.data.user.email;
      sessionStorage.setItem("token", LoginToken);
      sessionStorage.setItem("name", userName);
      sessionStorage.setItem("email", userEmail);

      setTimeout(() => {
        window.alert("Login Successful. Redirecting to Home Page");
        nav("/");
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data.message) {
        window.alert(error.response.data.message);
      } else {
        window.alert("Login failed: " + error.message);
      }
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="h-screen w-screen flex font-Poppins bg-gradient-to-r justify-center items-center p-4">
      <section className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 lg:p-12 flex flex-col justify-center items-center shadow-xl rounded-md bg-white">
        <div className="w-full">
          <h1 className="font-bold text-3xl mb-6 text-center">Log In</h1>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Email ID</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="rounded w-full h-[3rem] p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="rounded w-full h-[3rem] p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            className="bg-[#FF9700] w-full h-[3rem] rounded-lg text-white hover:bg-[#ffb84e] transition-all duration-300"
            onClick={logIn}
          >
            Login Now
          </button>

          {/* Sign Up Button */}
          <button
            className="w-full h-[3rem] rounded-lg border border-gray-300 mt-4 text-blue-950 hover:bg-gray-100 transition-all duration-300"
            onClick={ () => nav( "/register" ) }
          >
            Sign Up
          </button>
        </div>
      </section>
    </main>
  );
};

export default Login;
