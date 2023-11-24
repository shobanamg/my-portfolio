import Image from 'next/image';
import { MapPinIcon, Github, Twitter, Figma, Mail } from 'lucide-react';

import Shobana from '/public/images/profile-main-picture.jpg';
import Typography from '@/components/general/typography';
import IconButton from '@/components/general/icon-button';

export default function Home() {
    return (
        <div className="w-full bg-gray-0 py-12 md:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 bg-gray-0 px-4 md:flex-row md:px-8">
                {/* Image */}
                <div className="flex flex-grow items-center justify-center md:order-last md:justify-end">
                    <div className="relative h-[328px] w-[258px] md:h-[368px] md:w-[298px]">
                        <Image
                            src={Shobana}
                            alt="Picture of Shobana"
                            className="absolute z-10 h-[296px] w-[226px] border-[8px] border-gray-0 md:h-[336px] md:w-[266px]"
                            style={{ objectFit: 'cover' }}
                        ></Image>
                        <div className="absolute left-12 top-12 h-[280px] w-[210px] bg-gray-200 md:h-[320px] md:w-[250px]"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex max-w-3xl flex-grow flex-col justify-center gap-6 md:order-first md:items-start md:justify-center md:gap-12">
                    <div className="flex gap-2">
                        <MapPinIcon className="stroke-gray-600" />
                        <Typography>Copenhagen, Denmark</Typography>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Typography variant="h1">
                            Hi, I’m Shobana{' '}
                            <span className="inline-block animate-waving-hand">👋</span>
                        </Typography>
                        <Typography>
                            I'm a full-stack developer skilled in React.js and Node.js. I focus on creating fast, accessible,
                            visually appealing, and responsive digital experiences. Sometimes, I also contribute to the design
                            aspects of projects, adding my creative touch to ensure a polished outcome.
                        </Typography>
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
                    <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
                        <Typography>Available for new projects</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
