import './Skills.css';
import { FaBeer } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiVitess } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaSwift } from "react-icons/fa6";
import { SiKotlin } from "react-icons/si";


function Skills(){
    // const openTab = (event, tabName) => {
        // Get all tab links and tab contents
    //     const tabLinks = document.querySelectorAll(".tab-links");
    //     const tabContents = document.querySelectorAll(".tab-contents");

    //     // Remove "active-link" class from all tab links
    //     tabLinks.forEach((tabLink) => tabLink.classList.remove("active-link"));

    //     // Remove "active-content" class from all tab contents
    //     tabContents.forEach((tabContent) =>
    //         tabContent.classList.remove("active-content")
    //     );

    //     // Add "active-link" to the clicked tab and "active-content" to the corresponding content
    //     event.currentTarget.classList.add("active-link");
    //     document.getElementById(tabName).classList.add("active-content");
    // };

    return(
        <>
        <h3> Lets go for a <FaBeer />? </h3>
        <main className="">
            <section id="skills" className="p-6 my-12 scroll-mt-20">
                <h2 className="text-4xt font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    My Skills
                </h2>
            </section>

            <section className="text-white flex flex-col lg:flex-row items-center justify-center gap-4 mb-12">
                <div className="bg-teal-600 dark:bg-black backdrop-blur-md pl-14 pr-8 py-12 rounded-3xl relative hover:shadow-2xl md:w-5/6 lg:w-1/4 sm:w-5/6 dark:border dark:border-solid dark:border-sky-300 hover:cursor-pointer">
                    <h1 className="text-5xl">01</h1>
                    <h2 className="text-white dark:text-sky-300 text-3xl">
                        Fullstack developer.
                    </h2>
                    <h4 class="hidden md:block text-xl mt-2 text-white dark:text-slate-500">
                        I am a Fullstack developer capable of building neat and responsive websites
                        on time and at agreeable prices. I am able to work both with a team and 
                        on my own.
                    </h4>
                </div>
                <div className="bg-teal-600 dark:bg-black backdrop-blur-md pl-14 pr-8 py-12 rounded-3xl relative hover:shadow-2xl md:w-5/6 lg:w-1/4 sm:w-5/6 dark:border dark:border-solid dark:border-sky-300 hover:cursor-pointer">
                    <h1 className="text-5xl">02</h1>
                    <h2 className="text-white dark:text-sky-300 text-3xl">
                        Mobile app developer.
                    </h2>
                    <h3 class="hidden md:block text-xl mt-2 text-white dark:text-slate-500">
                    I have a variety of knowledge in programming languages,frameworks 
                    and libraries. Enabling me to create simple, complex and attractive 
                    mobile applications.
                    </h3>
                </div>
                <div className="bg-teal-600 dark:bg-black backdrop-blur-md pl-14 pr-8 py-12 rounded-3xl relative hover:shadow-2xl md:w-5/6 lg:w-1/4 sm:w-5/6 dark:border dark:border-solid dark:border-sky-300 hover:cursor-pointer">
                    <h1 className="text-5xl">03</h1>
                    <h2 className="text-white dark:text-sky-300 text-3xl">
                        Web app developer.
                    </h2>
                    <h3 class="hidden md:block text-xl mt-2 text-white dark:text-slate-500">
                        From the experience I have acquired from various projects I have 
                        created, I can create web applications as specified by the client 
                        and satisfy their wants in it.
                    </h3>
                </div>
                <div className="bg-teal-600 dark:bg-black backdrop-blur-md pl-14 pr-8 py-12 rounded-3xl relative hover:shadow-2xl lg:w-1/4 md:w-5/6 sm:w-5/6 dark:border dark:border-solid dark:border-sky-300 hover:cursor-pointer">
                    <h1 className="text-5xl">04</h1>
                    <h2 className="text-white dark:text-sky-300 text-3xl">
                        UI/UX developer.
                    </h2>
                    <h3 class="hidden md:block text-xl mt-2 text-white dark:text-slate-500">
                        I can create user interfaces that are responsive and clean. 
                        I'm equipped with variety of skills acquired from the projects I've 
                        created.
                    </h3>
                </div>
            </section>

            <section className="dark:text-slate-500">
            <div className="flex sm:flex-row justify-center gap-9 sm:gap-16 text-3xl">
                <div className=''>
                <p className="dark:slate-700 px-4 py-2 dark:border-solid mb-7 rounded hover:border-0 hover:dark:bg-sky-300 dark:hover:text-black hover:dark:shadow-teal-300 hover:cursor-pointer w-40 active-link bg-teal-500 text-white hover:shadow-xl dark:bg-sky-300 dark:text-black">
                    Education
                </p>
                    <div className="active-content text-xl mb-6" id="education">
                        <ul>
                            <li className="list-king"><p className="dark:text-sky-300 text-slate-500 text-2xl">2024 - Current</p><p>Dedan Kimathi University of Technology.</p></li>
                            <li className="list-king"><p className="dark:text-sky-300 text-slate-500 text-2xl">2020 - 2023</p><p>Kapenguria School.</p></li>
                            <li className="list-king"><p className="dark:text-sky-300 text-slate-500 text-2xl">2008 - 2019</p><p>S.T Stephen's ACK Primary School.</p></li>
                        </ul>
                    </div>
                </div>
                <div>
                <p className="dark:slate-700 px-4 py-2 dark:border-solid mb-7 rounded hover:shadow-xl hover:border-0 hover:dark:bg-sky-300 dark:hover:text-black hover:dark:shadow-teal-300 relative hover:cursor-pointer active-link w-43 bg-teal-500 text-white dark:bg-sky-300 dark:text-black" onclick="{()=>openTab('experience')}">
                    Experience
                </p>
                    <div className="flex justify-center items-center text-xl mb-6" id="experience">
                        <ul>
                            <li className="list-king"><p className="dark:text-sky-300 text-slate-500 text-2xl">2024 - Current</p><p>Student Computer Science.</p></li>
                        </ul>
                    </div>
                
                </div>
            </div>
            
            </section>

            <section className="flex justify-center items-center gap-4 mt-16 text-5xl flex-col sm:flex-row">
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaHtml5 /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaCss3 /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><SiTailwindcss /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaNodeJs /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaJs /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaReact/></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaPython /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><SiVitess /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaC /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'>< SiDjango /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><SiMongodb /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaJava /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><FaSwift /></h1>
                </div>
                <div>
                    <h1 className='text-teal-700 dark:text-sky-300 items-center hover:cursor-pointer hover:bg-teal-700 hover:text-white hover:dark:bg-sky-300 hover:dark:text-black rounded-full p-2 hover:shadow-xl hover:shadow-teal-600'><SiKotlin /></h1>
                </div>
            </section>
        </main>
        </>
    )
}

export default Skills