import myImage from './IMG/image.png'
import Change from './Change.jsx'
import Buttons from './Buttons.jsx';
import {Typewriter} from 'react-simple-typewriter';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


function About(){

    // let Image = '.IMG/image.png';

    return(
        <>
        <section id="about" class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 mt-13 sm:mt-0 scroll-mt-40 widescreen:section-min-height md:section-min-height">
            <article class="sm:w-1/2">
                <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    Hello, It's me, 
                </h2>
                <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-teal-600 dark:text-sky-300">
                    Dan Maina.
                </h2>
                <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    I am a <span className="text-teal-600 dark:text-sky-300">
                                <Typewriter
                                    words = {
                                        [
                                            "Fullstack developer.", 
                                            "Mobile App developer.", 
                                            "Web App developer.", 
                                            "UI/UX Developer."
                                        ]
                                    }
                                    loop={true}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={180}
                                    delaySpeed={2000}
                                    
                                />                                                         
                            </span>
                </h2>
                
                <p class="max-w-md text-xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    I am a fullstack developer with a 
                    passion for creating dynamic and 
                    responsive web applications. I have 
                    experience in both front-end and 
                    back-end development, and I am 
                    always eager to learn new 
                    technologies and improve my skills.
                    <br />
                    <br />

                <button className="bg-teal-700 dark:bg-black dark:border dark:text-sky-300 hover:bg-white hover:border-[2px] dark:hover:border-0 hover:w-54 hover:shadow-2xl hover:shadow-teal-600 hover:border-solid hover:border-teal-700 hover:text-teal-700 hover:dark:bg-sky-300 hover:dark:text-black  active:bg-cyan-400 text-white p-3 w-52 rounded-xl border dark:border-solid dark:border-sky-300 justify-center items-center text-3xl hover:cursor-pointer">
                    Download CV
                </button>
                
                    <p className='flex flex-row justify-center items-center mt-7 gap-4 text-3xl'>
                        <p className='hover:text-teal-700 dark:text-sky-300 dark:bg-black dark:border-[1px] hover:dark:border-0 hover:shadow-xl hover:shadow-teal-700 bg-teal-700 hover:dark:bg-sky-300 rounded-full hover:bg-white hover:border-[2px] hover:border-solid text-white hover:dark:text-black p-2 hover:rounded-full'>< FaInstagram /></p>
                        <p className='hover:text-teal-700 dark:text-sky-300 dark:bg-black dark:border-[1px] hover:dark:border-0 hover:shadow-xl hover:shadow-teal-700 bg-teal-700 hover:dark:bg-sky-300 rounded-full hover:bg-white hover:border-[2px] hover:border-solid text-white hover:dark:text-black p-2 hover:rounded-full'>< FaWhatsapp /></p>
                        <p className='hover:text-teal-700 dark:text-sky-300 dark:bg-black dark:border-[1px] hover:dark:border-0 hover:shadow-xl hover:shadow-teal-700 bg-teal-700 hover:dark:bg-sky-300 rounded-full hover:bg-white hover:border-[2px] hover:border-solid text-white hover:dark:text-black p-2 hover:rounded-full'>< CiLinkedin /></p>
                        <p className='hover:text-teal-700 dark:text-sky-300 dark:bg-black dark:border hover:dark:border-0 hover:shadow-xl hover:shadow-teal-700 bg-teal-700 hover:dark:bg-sky-300 rounded-full hover:bg-white hover:border-[2px] hover:border-solid text-white hover:dark:text-black p-2 hover:rounded-full'>< FaGithub /></p>
                    </p>
                </p>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                </p>
                
            </article>
            <div className="home-img">
                <div className="relative flex justify-center items-center overflow-hidden w-[35vw] h-[35vw] bg-white dark:bg-black rounded-2xl p-[7px] mix-blend-lighten">
                    <div className="img-item relative flex justify-center overflow-hidden w-full h-full bg-white dark:bg-black bg-cover z-1">
                        <img src={myImage} alt="Dan Maina's Image" className="bg-white dark:bg-black rounded-[200px] hover:cursor-pointer"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default About;