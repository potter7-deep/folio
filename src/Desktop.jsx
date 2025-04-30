


function Desktop(){
    return(
        <>
            <div>
                <button id="mobile-button" className="text-3xl md:hidden cursor-pointer text-teal-300 dark:text-sky-300">
                    &#9776;
                </button>
                <nav className="hidden md:block space-x-8 text-xl text-teal-300 dark:text-sky-300" arial-label="main">
                    <a href="#about" className="hover:opacity-90">About</a>
                    <a href="#services" className="hover:opacity-90">projects</a>
                    <a href="#testimonials" className="hover:opacity-90">People's say</a>
                    <a href="#skills" className="hover:opacity-90">My skills</a>
                    <a href="#contact" className="hover:opacity-90">Contact me</a>
                    <a href="#footer" className="hover:opacity-90">Legal</a>
                </nav>
            </div>
        </>
    );
}

export default Desktop;