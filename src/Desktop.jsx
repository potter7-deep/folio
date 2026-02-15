import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

function Desktop() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation - Always visible on md+ */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-medium transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <a
          href="#contact"
          className="px-5 py-2 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Menu Button - Only visible on small screens */}
      <button
        className="md:hidden mobile-menu p-2 text-slate-700 dark:text-slate-300 hover:text-teal-500 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg border-t border-slate-200 dark:border-slate-800 md:hidden">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 bg-teal-500 text-white font-medium rounded-lg text-center hover:bg-teal-600 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Desktop;

