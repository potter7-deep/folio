import { useState } from 'react';
import StairsLoader from './Loading-Animation.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Testimonials from './Testimonials.jsx';
import Contact from './Contact.jsx';
import Ending from './End.jsx';
import Skills from './Skills.jsx';

function App() {
  document.title = "Dan Maina | Full Stack Developer";

  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {loading && <StairsLoader onFinish={() => setLoading(false)} />}

      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg z-50 shadow-sm">
          <Header />
        </header>

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <section className="min-h-[calc(100vh-4rem)]">
            <About />
          </section>

          {/* Skills Section */}
          <section>
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Projects />
          </section>

          {/* Testimonials Section */}
          <section>
            <Testimonials />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer>
          <Ending />
        </footer>
      </div>
    </div>
  );
}

export default App;

