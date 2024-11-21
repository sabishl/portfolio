import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

   return <header className="flex justify-between px-5 py-3 bg_primar font-hero-font">
    <a className="font-bold text-black" href="#">SABISH L</a>
    <nav className="hidden md:block">
    <ul className="flex text-black">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>
    {isMenuOpen && <nav className="block md:hidden ">
    <ul onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col text-white mobile-nav font-hero-font">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>}
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='block md:hidden'><Bars3Icon className='text-black h-5'/></button>
   </header>
}