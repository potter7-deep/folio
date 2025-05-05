import React from 'react';
import {useState} from 'react';


function Desktop(){
    const [isOpen, setIsOpen] = React.useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-teal-700 dark:bg-sky-300 transition ease transform duration-300`;

    return(
        <>
            <div>
                <button id="mobile-menu"
                    className="flex flex-col h-12 w-12 border-2 dark:border-black border-white rounded justify-center items-center group text-3xl md:hidden cursor-pointer text-teal-600 dark:text-sky-300"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    <div
                        className={`text-teal-700 dark:text-sky-300 ${genericHamburgerLine} ${
                        isOpen
                            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                        isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                        isOpen
                            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                </button>
            
                {/* <nav className="hidden md:block space-x-8 text-xl text-teal-600 dark:text-sky-300" arial-label="main">
                    <a href="#about" className="hover:opacity-90">About</a>
                    <a href="#services" className="hover:opacity-90">Projects</a>
                    <a href="#testimonials" className="hover:opacity-90">People's say</a>
                    <a href="#skills" className="hover:opacity-90">My skills</a>
                    <a href="#contact" className="hover:opacity-90">Contact me</a>
                    <a href="#footer" className="hover:opacity-90 pr-[10px]">Legal</a>
                </nav> */}
                 <nav
                    className={` top-16 left-0 w-full bg-white dark:bg-black p-5 shadow-lg transition-transform duration-300 md:block md:left-0 
                                ${isOpen ? "block" : "hidden"}`}
                    >
                    <ul className="space-y-4 text-teal-600 dark:text-sky-300 flex flex-col text-xl md:flex-row md:space-x-8 md:space-y-0">
                        <li><a href="#about" className="hover:opacity-90">About</a></li>
                        <li><a href="#services" className="hover:opacity-90">Projects</a></li>
                        <li><a href="#testimonials" className="hover:opacity-90">People's say</a></li>
                        <li><a href="#skills" className="hover:opacity-90">My skills</a></li>
                        <li><a href="#contact" className="hover:opacity-90">Contact me</a></li>
                        <li><a href="#footer" className="hover:opacity-90">Legal</a></li>
                    </ul>
                </nav>

            </div>
        </>
    );
}

export default Desktop;