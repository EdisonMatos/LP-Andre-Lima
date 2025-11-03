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
    default: "bg-black",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea id="Calculadora" className={`${bgClass}`} paddingtop={false}>
        <SectionWrapper className="flex justify-center">
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
          <MotionDivDownToUp>
            <Button
              label={content.texts.calc.labelButton}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calculator-icon lucide-calculator"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <line x1="8" x2="16" y1="6" y2="6" />
                  <line x1="16" x2="16" y1="14" y2="18" />
                  <path d="M16 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M8 14h.01" />
                  <path d="M12 18h.01" />
                  <path d="M8 18h.01" />
                </svg>
              }
              onClick={() => window.open("/calculadora", "_blank")}
            ></Button>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
