import React from "react";
import CoverPageSection from "./CoverPageSection";
import AboutMeSection from "./AboutMeSection";
import ExperienceSection from "./ExperienceSection";

const BodyContent: React.FC = () => {
  return (
    <>
      <CoverPageSection />
      <AboutMeSection />
      <ExperienceSection />
    </>
  );
};

export default BodyContent;
