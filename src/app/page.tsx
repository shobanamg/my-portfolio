import Image from "next/image";
import { MapPinIcon, Github, Twitter, Figma, Mail } from "lucide-react";

import ProfileMain from "/public/images/profile-main-picture.jpg";
import ProfileCasual from "/public/images/profile-casual-picture.jpg";
import Typography from "@/components/general/typography";
import IconButton from "@/components/general/icon-button";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container>
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Image */}
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <div className="relative md:h-[360px] md:w-[320px]">
              <Image
                src={ProfileMain}
                alt="Picture of Shobana"
                className="absolute z-10 border-8 border-gray-0 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: "cover" }}
              ></Image>
              <div className="absolute border-8 border-transparent bg-gray-200 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
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
                <MapPinIcon className="stroke-gray-600" />
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
            <div className="flex gap-1">
              <IconButton>
                <Github />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Figma />
              </IconButton>
              <IconButton>
                <Mail />
              </IconButton>
            </div>
          </div>
        </div>
      </Container>

      {/* About Me Section */}
      <Container className="bg-gray-50">
        <div className="self-center">
          <Tag label="About me" />
        </div>
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          {/* Image */}
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative md:h-[520px] md:w-[440px]">
              <Image
                src={ProfileCasual}
                alt="Fullpose of Shobana"
                className="absolute z-10 border-8 border-gray-50 md:right-0 md:top-0 md:h-[480px] md:w-[400px]"
                style={{ objectFit: "cover" }}
              ></Image>
              <div className="absolute border-8 border-transparent bg-gray-200 md:bottom-0 md:left-0 md:h-[480px] md:w-[400px]"></div>{" "}
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
    </>
  );
}
