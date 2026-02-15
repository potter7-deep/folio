import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaSwift, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiMongodb, SiMysql, SiFirebase, SiKotlin, SiAngular, SiFigma, SiVite } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Angular", icon: SiAngular, color: "text-red-500" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
        { name: "Django", icon: SiDjango, color: "text-green-600" },
        { name: "Django", icon: SiDjango, color: "text-green-600" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "Coq", color: "text-blue-600" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "Coq", color: "text-blue-600" },
        { name: "Prolog", color: "text-indigo-500" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", icon: FaReact, color: "text-cyan-400" },
        { name: "Swift", icon: FaSwift, color: "text-orange-500" },
        { name: "Kotlin", icon: SiKotlin, color: "text-purple-500" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "GitHub", icon: FaGithub, color: "text-white" },
        { name: "Vite", icon: SiVite, color: "text-purple-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & <span className="text-teal-500">Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Web Development</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Building responsive, performant websites with modern frameworks and best practices
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Mobile Apps</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Creating cross-platform mobile applications with intuitive user experiences
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Backend Development</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Building robust APIs and server-side applications with secure databases
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">UI/UX Design</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Designing beautiful, user-centered interfaces that delight users
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill.icon && <skill.icon className={skill.color} />}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-teal-500 pl-4">
                <p className="text-teal-500 font-medium">2024 - Present</p>
                <p className="text-slate-900 dark:text-white font-semibold">Bachelor of Science in Computer Science</p>
                <p className="text-slate-600 dark:text-slate-400">Dedan Kimathi University of Technology</p>
              </div>
              <div className="border-l-2 border-slate-300 dark:border-slate-600 pl-4">
                <p className="text-slate-500 font-medium">2020 - 2023</p>
                <p className="text-slate-900 dark:text-white font-semibold">High School</p>
                <p className="text-slate-600 dark:text-slate-400">Kapenguria School</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experience
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-teal-500 pl-4">
                <p className="text-teal-500 font-medium">2024 - Present</p>
                <p className="text-slate-900 dark:text-white font-semibold">Freelance Developer</p>
                <p className="text-slate-600 dark:text-slate-400">Building web and mobile applications for clients</p>
              </div>
              <div className="border-l-2 border-slate-300 dark:border-slate-600 pl-4">
                <p className="text-slate-500 font-medium">2023 - 2024</p>
                <p className="text-slate-900 dark:text-white font-semibold">Web Development Projects</p>
                <p className="text-slate-600 dark:text-slate-400">Personal projects and practice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;


