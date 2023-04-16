import Link from 'next/link'
import React from 'react'

interface NavItemProps {
    href: string;
    text: string;
    active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, active }) => {
    return (
        <Link legacyBehavior href={href}>
            <a
                className={`
                    nav__link ${active ? "active" : ""}
                `}
            >
                {text}
            </a>

        </Link>
    );
};

export default NavItem;