'use client';
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@heroui/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBrain } from 'react-icons/fa';

const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    type Colors = "foreground" | "primary" | "secondary" | "success" | "warning" | "danger"

    const navbarLinks = [
        {
            name: 'Home',
            href: '/',
            color: "foreground"
        },
        {
            name: 'About',
            href: '#',
            color: "foreground"
        },
    ]

    return (
        <div className='w-full'>
            <Navbar onMenuOpenChange={setIsMenuOpen} isBordered={pathname === '/game'}>
                <NavbarBrand>
                    <FaBrain size={24} color="#F85455" />
                    <p className="ml-2 font-bold">TriviaLink</p>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden"
                />
                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    {navbarLinks.map(({ name, href, color }) => (
                        <NavbarItem key={name}>
                            <Link color={color as Colors} href={href}>
                                {name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarMenu>
                    {navbarLinks.map(({ name, href, color }) => (
                        <NavbarMenuItem key={name}>
                        <Link
                            className="w-full"
                            color={color as Colors}
                            href={href}
                            size="lg"
                        >
                            {name}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
};

export default MainNavbar;
