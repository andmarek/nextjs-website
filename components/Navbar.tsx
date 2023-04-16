import Link from 'next/link'
import React, {useState} from 'react';

import NavItem from './NavItem'
interface NavBarProps {
    onChangeColorScheme: any
}

const MENU_LIST = [
    {
        text: "Home",
        href: "/",
        active: true
    },
    {
        text: "About",
        href: "/",
        active: true
    }
]

const Navbar = (props: NavBarProps) => {
    const [scheme, setScheme] = useState("")
    function handleChange(event: any) {
        props.onChangeColorScheme(event.target.value)

    }

    return (
        <header className="ctp-mocha">

            <nav className="nav text-ctp-pink">
                <Link href={"/"}>


                </Link>
                <div className='nav__menu-bar '>
                </div>
                <div className='nav__menu-list space-x-4 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
                    { MENU_LIST.map((menu, idx) => {
                        return (

                            <div key={menu.text}>
                                <NavItem {...menu} />
                            </div>
                        )
                    })}
                    <select className="text-red" onChange={handleChange}>
                        <option value="none">theme</option>
                        <option value="ctp">catppuccin</option>
                        <option value="nord">nord</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
