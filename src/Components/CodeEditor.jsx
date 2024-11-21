import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme, change to "prism.css" for light theme
import "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup"; // For HTML (Prism refers to it as "markup")
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-php";

import { FaMoon, FaSun } from "react-icons/fa";
import axios from "axios"; // Import axios for API calls

const App = () => {
  const [code, setCode] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("html"); // Default language

  useEffect(() => {
    Prism.highlightAll(); // Highlight the code whenever it changes
  }, [code, language]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const runCode = async () => {
    const previewContainer = document.getElementById("preview-container");
    previewContainer.innerHTML = ""; // Clear previous output

    if (language === "php" || code.includes("<?php ")) {
      
      try {
        const response = await axios.post(
          "http://localhost:8000/api/execute-code",
          {
            language: "php",
            code,
          }
        );
        console.log(response)   
        const output = response.data.output || "No output";
        
        previewContainer.innerHTML = `<pre>${output}</pre>`;
      } catch (error) {
        const errorMessage = error.response?.data?.error || "An error occurred";
        previewContainer.innerHTML = `<pre style="color: red;">${errorMessage}</pre>`;
      }
    } else {
    
      const iframe = document.createElement("iframe");
      iframe.srcdoc = code;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.sandbox = "allow-scripts";
      previewContainer.appendChild(iframe);
    }
  };

  return (
    <div
      className={`flex h-screen flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between p-4 ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <button
          onClick={runCode}
          className={`px-4 py-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"
          }`}
        >
          Run
        </button>
        <button
          onClick={toggleTheme}
          className={`ml-4 px-4 py-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"
          }`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Language Selector */}
      <div className="p-4">
        <label className="mr-2">Select Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`px-2 py-1 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-900"
          }`}
        >
          <option value="html">HTML</option>
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
        </select>
      </div>

      {/* Code Editor and Preview */}
      <div className="flex flex-1">
        <div
          className={`basis-1/2 border-r p-2 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-200 border-gray-300"
          }`}
        >
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-transparent text-sm outline-none resize-none"
            placeholder="Write your code here..."
          />
        </div>

        <div
          id="preview-container"
          className={`basis-1/2 p-2 ${
            darkMode ? "bg-gray-100 text-gray-900" : "bg-white text-black"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default App;
