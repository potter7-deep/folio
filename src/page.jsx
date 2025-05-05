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

    document.title = "DAN MAINA | PORTFOLIO."; 

  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen dark:bg-black mt-0">
      {loading && <StairsLoader onFinish={() => setLoading(false)} />}

      {/* Main content fades in after loader */}
      <div className={`transition-opacity duration-3000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Header Section */}
        <header className="flex items-center justify-between p-4 bg-white dark:bg-black"/>
          <Header/>
        {/* Hero Section */}
        <section className="min-h-screen items-center justify-center dark:bg-black">
            <About/>
        </section>

        <hr className="mx-auto bg-teal-700 dark:bg-sky-300 w-1/2 h-[1px]"></hr>

        {/* skills Section */}
        <section className="min-h-screen items-center justify-center dark:bg-black pl-4 pr-4">
            <Skills/>
        </section>

        <hr className="mx-auto bg-teal-700 dark:bg-sky-300 w-1/2 h-[1px]"></hr>

        {/* Projects Section */}
        <section className="min-h-screen items-center justify-center dark:bg-black pl-4 pr-4">
            <Projects/>
        </section>

        <hr className="mx-auto bg-teal-700 dark:bg-sky-300 w-1/2 h-[1px]"></hr>

        {/* Services Section */}
        <section className="min-h-screen items-center justify-center dark:bg-black">
            <Testimonials/>
        </section>

        <hr className="mx-auto bg-teal-700 dark:bg-sky-300 w-1/2 h-[1px]"></hr>

        {/* Contact Section */}
        <section className="min-h-screen items-center justify-center dark:bg-black">
            <Contact/>
        </section>

        <hr className="mx-auto bg-teal-700 dark:bg-sky-300 w-1/2 h-[1px]"></hr>

        {/* Footer Section */}
        <section className="items-center justify-center dark:bg-black">
            <Ending/>
        </section>
      </div>
    </div>
  );
}

export default App;
