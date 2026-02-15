import myImage from './IMG/image.png'
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ScrollReveal from './components/ScrollReveal.jsx';

function About() {
  return (
    <section id="about" className="min-h-[90vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <ScrollReveal animation="fade-up" delay={0} duration={800}>
              <p className="text-teal-500 font-medium mb-4 tracking-wide uppercase text-sm">Hello, I'm</p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100} duration={800}>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-2">
                Dan Maina
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200} duration={800}>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
                I'm a{' '}
                <span className="text-teal-500">
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "Mobile App Developer",
                      "Web Developer",
                      "UI/UX Enthusiast"
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300} duration={800}>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                A passionate computer science student at Dedan Kimathi University of Technology, 
                specializing in building exceptional digital experiences with modern technologies.
              </p>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal animation="fade-up" delay={400} duration={800}>
              <div className="flex justify-center md:justify-start gap-4 mb-8">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub size={22} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedin size={22} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <FaTwitter size={22} />
                </a>
                <a 
                  href="mailto:dm549153@gmail.com"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <FaEnvelope size={22} />
                </a>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fade-up" delay={500} duration={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#contact"
                  className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 text-center"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects"
                  className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-center"
                >
                  View Work
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <ScrollReveal animation="fade-right" delay={200} duration={1000}>
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-2xl transform -rotate-6 opacity-50"></div>
                
                {/* Image container */}
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-2">
                  <img 
                    src={myImage} 
                    alt="Dan Maina" 
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

