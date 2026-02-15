import { FaQuoteLeft } from "react-icons/fa";
import CountUp from './components/CountUp';

function Testimonials() {
  const testimonials = [
    {
      quote: "Dan is an exceptionally talented developer. His ability to translate complex requirements into elegant, functional solutions is remarkable. The website he built for our company exceeded all expectations.",
      name: "Sarah Johnson",
      role: "CEO, TechStart Kenya",
      company: "TechStart Kenya"
    },
    {
      quote: "Working with Dan was a pleasure. He delivered our project on time and with excellent quality. His communication skills and technical expertise made the development process smooth and efficient.",
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovate Labs"
    },
    {
      quote: "Dan showed great initiative and problem-solving skills during our project. He didn't just follow specifications - he suggested improvements that enhanced the final product significantly.",
      name: "Dr. Emily Wambui",
      role: "Director, DeKUT Innovation Hub",
      company: "Dedan Kimathi University"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What People <span className="text-teal-500">Say</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the privilege to work with
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-slate-700 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-white text-sm" />
              </div>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200 dark:border-slate-700">
          <div className="text-center">
            <CountUp end={10} suffix="+" />
            <p className="text-slate-600 dark:text-slate-400 mt-1">Projects Completed</p>
          </div>
          <div className="text-center">
            <CountUp end={5} suffix="+" />
            <p className="text-slate-600 dark:text-slate-400 mt-1">Happy Clients</p>
          </div>
          <div className="text-center">
            <CountUp end={2} suffix="+" />
            <p className="text-slate-600 dark:text-slate-400 mt-1">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

