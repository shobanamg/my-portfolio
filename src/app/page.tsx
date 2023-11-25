import Image from 'next/image';
import { MapPinIcon, Github, Twitter, Figma, Mail } from 'lucide-react';

import ProfileMain from '/public/images/profile-main-picture.jpg';
import ProfileCasual from '/public/images/profile-casual-picture.jpg';
import Typography from '@/components/general/typography';
import IconButton from '@/components/general/icon-button';
import Tag from '@/components/data-display/tag';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="w-full bg-gray-0 py-12 md:py-20 2xl:py-32">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 bg-gray-0 px-4 md:flex-row md:px-8">
                    {/* Image */}
                    <div className="flex flex-grow items-center justify-center md:order-last md:justify-end">
                        <div className="relative h-[328px] w-[258px] md:h-[368px] md:w-[298px]">
                            <Image
                                src={ProfileMain}
                                alt="Picture of Shobana"
                                className="absolute z-10 h-[296px] w-[226px] border-[8px] border-gray-0 md:h-[336px] md:w-[266px]"
                                style={{ objectFit: 'cover' }}
                            ></Image>
                            <div className="absolute left-12 top-12 h-[280px] w-[210px] bg-gray-200 md:h-[320px] md:w-[250px]"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex max-w-3xl flex-grow flex-col justify-center gap-6 md:order-first md:items-start md:justify-center md:gap-8 2xl:gap-12">
                        <div className="flex flex-col gap-2">
                            <Typography variant="h1">
                                Hi, I&apos;m Shobana{' '}
                                <span className="inline-block animate-waving-hand">👋</span>
                            </Typography>
                            <Typography>
                                I&apos;m a full-stack developer skilled in React.js and Node.js. I focus on creating fast, accessible,
                                visually appealing, and responsive digital experiences. Sometimes, I also contribute to the design
                                aspects of projects, adding my creative touch to ensure a polished outcome.
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
            </div>

            {/* About Me Section */}
            <div className="w-full bg-gray-50 py-12 md:py-20 2xl:py-32">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 md:px-8">
                    <div className="self-center">
                        <Tag label="About me" />
                    </div>

                    <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
                        {/* Image */}
                        <div className="flex justify-center md:order-first md:justify-end">
                            <div className="relative h-[540px] w-[444px]">
                                <Image
                                    src={ProfileCasual}
                                    alt="Fullpose of Shobana"
                                    className="absolute right-0 top-0 z-10 h-[488px] w-[392px] border-[8px] border-gray-50"
                                    style={{ objectFit: 'cover' }}
                                ></Image>
                                <div className="absolute bottom-0 h-[480px] w-[384px] bg-gray-200"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex max-w-xl flex-col gap-6">
                            <Typography variant="h3">
                                Curious about me? Here you have it:
                            </Typography>
                            <Typography>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                viverra ipsum non neque ultricies, eget ultricies nisl
                                ultricies. Sed euismod, nisl eget aliquam ultricies, nisl
                                libero ultricies nisl, eget ultricies nisl ultricies nisl.
                                Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia curae; Donec euismod, nisl eget aliquam ultricies, nisl
                                libero ultricies nisl, eget ultricies nisl ultricies nisl.
                            </Typography>
                            <Typography>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                viverra ipsum non neque ultricies, eget ultricies nisl
                                ultricies. Sed euismod, nisl eget aliquam ultricies, nisl
                                libero ultricies nisl, eget ultricies nisl ultricies nisl.
                                Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia curae; Donec euismod, nisl eget aliquam ultricies, nisl
                                libero ultricies nisl, eget ultricies nisl ultricies nisl.
                            </Typography>
                            <Typography>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                viverra ipsum non neque ultricies, eget ultricies nisl
                                ultricies. Sed euismod, nisl eget aliquam ultricies, nisl
                                libero ultricies nisl, eget ultricies nisl ultricies nisl.
                                Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia curae; Donec euismod, nisl eget aliquam ultricies, nisl
                                libero ultricies nisl, eget ultricies nisl ultricies nisl.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
