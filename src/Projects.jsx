import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import image1 from './IMG/DATA.png';
import image2 from './IMG/web2.jpg';
import image3 from './IMG/web3.jpg';

function Projects() {
  const projects = [
    {
      title: "Voting App",
      description: "A live voting application where users can vote in real-time. Features a modern interface and instant result updates.",
      image: image1,
      tags: ["React", "Real-time", "Web App"],
      liveLink: "https://voting-app-kimathi.onrender.com/",
      githubLink: "#",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Modern Hardware",
      description: "A full-featured e-commerce platform for hardware products with product catalog, shopping cart, checkout functionality, and modern UI.",
      image: image2,
      tags: ["React", "Node.js", "MongoDB", "E-Commerce"],
      liveLink: "https://modern-hardware-app.onrender.com/products",
      githubLink: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects with drag-and-drop functionality and team collaboration.",
      image: image2,
      tags: ["React Native", "Firebase", "Redux"],
      liveLink: "#",
      githubLink: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects, skills, and contact information with a modern, professional design.",
      image: image3,
      tags: ["React", "Tailwind", "Animations"],
      liveLink: "#",
      githubLink: "#",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-teal-500">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building quality applications
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveLink}
                    className="p-3 bg-white rounded-full text-slate-900 hover:bg-teal-500 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                  <a 
                    href={project.githubLink}
                    className="p-3 bg-white rounded-full text-slate-900 hover:bg-teal-500 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-teal-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-teal-500 text-teal-500 font-semibold rounded-xl hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

