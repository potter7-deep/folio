import image1 from './IMG/DATA.png';
import image2 from './IMG/web2.jpg';
import image3 from './IMG/web3.jpg';


function Projects() {

    return(
        <>
            <section id="services" className="p-6 my-12 scroll-mt-20">
                <h2 className="text-4xt font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    My Projects
                </h2>
            </section>

            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-sky-300 bg-white dark:bg-black py-6 px2 rounded-3xl shadow-xl">
                    <img src={image1} alt="Explore" className="w-1/2 h-1/6 mb-6 animated-box"/>
                    <h3 class="text-3xl text-center text-slate-900 dark:text-sky-300">
                        Logo tech LTD.
                    </h3>
                    <p class="hidden md:block text-xl text-center mt-2 text-slate-500 dark:text-slate-400">
                        This is a simple website for a company.
                        It is a responsive website that works on all devices.
                        It is built using HTML, CSS and JavaScript.
                    </p >
                    <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400" >
                        Affordable logo tech LTD website.
                    </p>
                </li>
                <li class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-sky-300 bg-white dark:bg-black py-6 px2 rounded-3xl shadow-xl">
                    <img src={image2} alt="Adventure" class="w-1/2 h-1/6 mb-6 animated-box"/>
                    <h3 class="text-3xl text-center text-slate-900 dark:text-sky-300">
                        Adventures ORG.
                    </h3>
                    <p class="hidden sm:block text-xl text-center mt-2 text-slate-500 dark:text-slate-400">
                        I build this responsive website for a travel agency company. 
                        It is a simple website that is easy to use.
                    </p >
                    <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400" >
                        Responsive website for Adventures ORG!
                    </p>
                </li>
                <li class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-sky-300 bg-white dark:bg-black py-6 px2 rounded-3xl shadow-xl">
                    <img src={image3} alt="Infinity" class="w-1/2 h-1/6 mb-6 animated-box"/>
                    <h3 class="text-3xl text-center text-slate-900 dark:text-sky-300">
                        Log-in page.
                    </h3>
                    <p class="hidden sm:block text-xl text-center mt-2 text-slate-500 dark:text-slate-400">
                        This is a simple log-in page that is responsive.
                        It is built using HTML, CSS and JavaScript.
                        It is a simple log-in page that works on all devices.
                    </p >
                    <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400" >
                        A neat logging in page.
                    </p>
                </li>
            </ul>
        </>
    );
}

export default Projects;