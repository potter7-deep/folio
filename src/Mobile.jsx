import { useState } from 'react'
import './Skills.css'


function Mobile(){

const mobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

};

    return(
        <>
        {/*  <section id="mobile-menu" className="animate-menu absolute top-0 pt-0 bg-black w-full text-5xl flex-col justify-center origin-top hidden">
             <button className="text-8xl self-end">
                 &times;
             </button>
             <nav className="flex flex-col min-h-screen items-center py-2" aria-label="mobile">
                 <a href="#home" className="w-full text-center hover:opacity-90 py-4">Home</a>
                 <a href="#about" className="w-full text-center hover:opacity-90 py-4">About</a>
                 <a href="#servicer" className="w-full text-center hover:opacity-90 py-4">Projects</a>
                 <a href="#contact" className="w-full text-center hover:opacity-90 py-4">Contact me</a>
                 <a href="#footer" className="w-full text-center hover:opacity-90 py-4">Legal</a>
             </nav>
         </section> */}
        </>
        
    );
}

export default Mobile