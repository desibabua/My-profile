import React from "react";
import CoverPageSection from "./CoverPageSection";
import AboutMeSection from "./AboutMeSection";
import ExperienceSection from "./experiences/ExperienceSection";
import Products from "./productsBuilt/Products";
import GetInTouch from "./GetInTouch";

const BodyContent: React.FC = () => {
  return (
    <>
      <CoverPageSection />
      <AboutMeSection />
      <ExperienceSection />
      <Products />
      <GetInTouch />
    </>
  );
};

export default BodyContent;
