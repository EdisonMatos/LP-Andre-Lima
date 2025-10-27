import content from "../../content/content";
import { useNavigate } from "react-router-dom";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import Button from "../interactives/Button";

export default function Calculadora({ colorMode }) {
  const navigate = useNavigate();
  // Classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea id="Calculadora" className={`${bgClass}`}>
        <SectionHeader
          colorMode="dark"
          className="text-center"
          miniTitle={content.texts.calc.miniTag}
          sectionHeaderTitle={content.texts.calc.title}
          sectionHeaderSubtitle={content.texts.calc.subtitle}
          color=""
          titleColorSet={titleColor}
          subtitleColorSet={titleColor}
          miniTitleBgColor="bg-minititle"
          miniTitleTextColor="text-darker"
        />
        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp>
            <Button
              label={content.texts.calc.labelButton}
              onClick={() => window.open("/calculadora", "_blank")}
            ></Button>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
