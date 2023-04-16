import React, {useState} from 'react';
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import AboutMe from '@/components/About'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'

export default function Home() {
    const [colorScheme, setColorScheme] = useState("");

    function handleColorScheme(opt: string) {
        setColorScheme(opt)
    }

    return (
        <main className={`bg-${colorScheme}-base `}>
            <Navbar 
                onChangeColorScheme={handleColorScheme}
            />
            <Intro colorScheme={colorScheme}/>
            <AboutMe />
            <Experience colorScheme={colorScheme} />
        </main>
    )
}
