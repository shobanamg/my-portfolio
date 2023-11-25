'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { mergeClasses } from '@/lib/utils';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import Button from '@/components/general/button';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerClose,
} from '@/components/navigation/drawer';
import { NAV_LINKS } from '@/lib/data';
import { useWindowSize } from '@/hooks/use-window-size';

const Logo = () => (
    <p className="text-2xl font-bold leading-none text-gray-900 md:text-3xl">
        {'<SM />'}
    </p>
);

const Header = () => {
    const scrolled = useScroll(40);
    const [isOpen, setIsOpen] = useState(false);
    const size = useWindowSize();

    useEffect(() => {
        if (size?.width && size?.width > 767 && isOpen) {
            setIsOpen(false);
        }
    }, [size, isOpen]);

    return (
        <header
            className={mergeClasses(
                'sticky top-0 z-30 w-full border-b border-transparent bg-gray-0 transition-all ease-in max-md:border-gray-100',
                scrolled ? 'bg-gray-0/50 backdrop-blur-xl md:border-gray-100' : ''
            )}
        >
            <div className="mx-auto w-full max-w-7xl flex items-center justify-between p-4 md:px-8">
                <Link href="/" noCustomization>
                        <Logo />
                    </Link>
                    <div className="hidden items-center gap-6 md:flex">
                        <ul className="flex list-none items-center gap-6">
                            {NAV_LINKS.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="h-6 w-0.5 bg-gray-100"></div>
                        <div className="flex items-center gap-4">
                            <ThemeSwitcher />
                            <Button>Download CV</Button>
                        </div>
                    </div>

                    <Drawer open={isOpen} onOpenChange={setIsOpen}>
                        <DrawerTrigger asChild className="flex md:hidden">
                            <IconButton>
                                <Menu />
                            </IconButton>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="flex items-center justify-between border-b border-gray-100 p-4">
                                <Logo />
                                <DrawerClose asChild>
                                    <IconButton>
                                        <X />
                                    </IconButton>
                                </DrawerClose>
                            </div>
                            <div className="border-b border-gray-100 p-4">
                                <ul className="flex list-none flex-col gap-4">
                                    {NAV_LINKS.map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4 p-4">
                                <div className="flex items-center justify-between">
                                    <p>Switch Theme</p>
                                    <ThemeSwitcher />
                                </div>
                                <Button>Download CV</Button>
                            </div>
                        </DrawerContent>
                    </Drawer>
            </div>
        </header>
    );
};

export default Header;
