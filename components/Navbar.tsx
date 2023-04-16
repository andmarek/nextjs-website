import Link from 'next/link'
import React from 'react'

import NavItem from './NavItem'

const MENU_LIST = [
    {
        text: "Home",
        href: "/",
        active: true
    }
]

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <Link href={"/"}>
                    <a>
                        <h1> hello </h1>
                    </a>
                </Link>

                <div className='nav__menu-bar'>
                    <div>first-dev</div>
                </div>
                <div className='nav__menu-list'>
                    { MENU_LIST.map((menu, idx) => {
                        return (
                            <div key={menu.text}>
                                <NavItem {...menu} />
                            </div>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
