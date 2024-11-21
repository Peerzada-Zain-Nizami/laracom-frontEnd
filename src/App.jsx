import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from "./Components/TopMenu";
import Home from "./Pages/HomePage/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
import Courses from "./Pages/Courses/Courses";
import News from "./Pages/News/News";
import Community from "./Pages/Community/Community";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Register/SignUp";
import CodeEditor from "./Components/CodeEditor"

function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CodeEditor" element={<CodeEditor />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/news" element={<News />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
