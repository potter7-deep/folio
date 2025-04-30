


function Ending(){
    return(
        <>
            <footer id="footer" class="backdrop-blur-md text-white text-xl">
                <section class="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between text-slate-400">
                    <address>
                        <h2 class="text-4xt font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                            Dan Maina.
                        </h2>
                        
                        <div class="text-left sm:text-center">
                            <p class="text-left sm:text-center">Dedan Kimathi University of <br/>Technology, Nyeri </p>
                            <p>P.O BOX 657-10100<br/></p>
                            Email: <a href="mailto:dm549153@gmail.com">Inquires@DanMaina.com</a><br/>
                            Phone: <a href="tel:+254714740470">0714 740 470 </a> 
                            or <a href="tel:+254714740470">0732 048 631</a>
                        </div>
                        
                    </address>
                    <nav class="hidden md:flex flex-col gap-2" aria-label="footer">
                        <a href="#about" class="hover:opacity-90">About</a>
                        <a href="#services" class="hover:opacity-90">Projects</a>
                        <a href="#testimonials" class="hover:opacity-90">People's say</a>
                        <a href="#skill" class="hover:opacity-90">my skills</a>
                        <a href="#contact" class="hover:opacity-90">Contact me</a>
                    </nav>
                    <div class="flex flex-col items-center sm:gap-2">
                        <p class="text-right">Copyright &copy; <span id="year">2024</span></p>
                        <p class="text-right">All Rights Reserved</p>
                    </div>
                </section>
            </footer>
        </>
    );
}
export default Ending;