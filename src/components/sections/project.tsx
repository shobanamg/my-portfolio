import Container from "@/components/layout/container";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/project-details";

const ProjectSection = () => {
  return (
    <Container id="projects">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Projects" />
        </div>
        <Typography variant="subtitle">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
};

export default ProjectSection;
