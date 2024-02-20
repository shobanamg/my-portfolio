import Container from "@/components/layout/container";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import { TECHNOLOGIES } from "@/lib/data";
import TechDetails from "@/components/data-display/tech-details";

const SkillsSection = () => {
  return (
    <Container id="skills" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-6 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
