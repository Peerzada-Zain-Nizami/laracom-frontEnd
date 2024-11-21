import React from "react";
import Imagessection from "./imagessection";
import CoursesSection from "./CoursesSection";
import LatestArticle from "./LatestArticle";
import FeaturesSection from "./FeaturesSection";
import Herosection from "../../Components/Herosection";

function App() {
  return (
    <div>
      <Herosection />
      <LatestArticle />
      <CoursesSection />
      <FeaturesSection />
      <Imagessection />
    </div>
  );
}

export default App;
