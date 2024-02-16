import Image from "next/image";
import { MapPin } from "lucide-react";

import { EXPERIENCES, PROJECTS, TECHNOLOGIES } from "@/lib/data";
import ProfileMain from "/public/images/profile-main-picture.jpg";
import ProfileCasual from "/public/images/profile-casual-picture.jpg";
import Typography from "@/components/general/typography";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import TechDetails from "@/components/data-display/tech-details";
import ExperienceDetails from "@/components/data-display/experience-details";
import SocialIcons from "@/components/data-display/social-icons";
import ProjectDetails from "@/components/data-display/project-details";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container id="hero">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Image */}
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <Image
                src={ProfileMain}
                alt="Picture of Shobana"
                className="absolute z-10 h-[280px] w-[240px] border-8 border-gray-0 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: "cover" }}
              ></Image>
              <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <Typography variant="h1">
                Hi, I&apos;m Shobana{" "}
                <span className="inline-block animate-waving-hand">👋</span>
              </Typography>
              <Typography>
                I&apos;m a full-stack developer skilled in React.js and Node.js.
                I focus on creating fast, accessible, visually appealing, and
                responsive digital experiences. Sometimes, I also contribute to
                the design aspects of projects, adding my creative touch to
                ensure a polished outcome.
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPin className="stroke-gray-600" />
                <Typography>Copenhagen, Denmark</Typography>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <Typography>Available for new projects</Typography>
              </div>
            </div>
            <SocialIcons />
          </div>
        </div>
      </Container>

      {/* About Me Section */}
      <Container className="bg-gray-50" id="about">
        <div className="self-center">
          <Tag label="About me" />
        </div>
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          {/* Image */}
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative h-[380px] w-[320px] md:h-[520px] md:w-[440px]">
              <Image
                src={ProfileCasual}
                alt="Fullpose of Shobana"
                className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[480px] md:w-[400px]"
                style={{ objectFit: "cover" }}
              ></Image>
              <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[480px] md:w-[400px]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex max-w-xl flex-col gap-6">
            <Typography variant="h3">
              Curious about me? Here you have it:
            </Typography>
            <Typography>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra ipsum non neque ultricies, eget ultricies nisl ultricies.
              Sed euismod, nisl eget aliquam ultricies, nisl libero ultricies
              nisl, eget ultricies nisl ultricies nisl. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Donec euismod, nisl eget aliquam ultricies, nisl libero ultricies
              nisl, eget ultricies nisl ultricies nisl.
            </Typography>
            <Typography>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra ipsum non neque ultricies, eget ultricies nisl ultricies.
              Sed euismod, nisl eget aliquam ultricies, nisl libero ultricies
              nisl, eget ultricies nisl ultricies nisl. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Donec euismod, nisl eget aliquam ultricies, nisl libero ultricies
              nisl, eget ultricies nisl ultricies nisl.
            </Typography>
            <Typography>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra ipsum non neque ultricies, eget ultricies nisl ultricies.
              Sed euismod, nisl eget aliquam ultricies, nisl libero ultricies
              nisl, eget ultricies nisl ultricies nisl. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Donec euismod, nisl eget aliquam ultricies, nisl libero ultricies
              nisl, eget ultricies nisl ultricies nisl.
            </Typography>
          </div>
        </div>
      </Container>

      {/* Skills Section */}
      <Container id="skills">
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
      {/* Experience Section */}
      <Container className="bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Experience" />
          </div>{" "}
          <Typography variant="subtitle">
            Here is a quick summary of my most recent experiences:
          </Typography>
        </div>

        {EXPERIENCES?.map((experience, index) => (
          <ExperienceDetails {...experience} key={index} />
        ))}
      </Container>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
