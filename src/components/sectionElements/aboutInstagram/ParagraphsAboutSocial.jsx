import Paragraphs from "../Paragraphs";
import React, { useState } from "react";
import content from "../../../content/content";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

function ParagraphsAboutSocial() {
  return (
    <MotionDivDownToUp>
      <Paragraphs className="text-white text-opacity-80 mb-[48px]">
        {content.texts.about.aboutSocial.subtitle}
      </Paragraphs>
    </MotionDivDownToUp>
  );
}

export default ParagraphsAboutSocial;
