import { useState } from 'react';
import StairsLoader from './page2.jsx';
import Header from './build/Header.jsx';
import About from './build/About.jsx';
import Services from './build/Services.jsx';
import Testimonials from './build/Testimonials.jsx';
import Contact from './build/Contact.jsx';
import Ending from './build/End.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen dark:bg-black">
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

        <hr className="mx-auto bg-black dark:bg-white w-1/2 h-[1px]"></hr>

        {/* About Section */}
        <section className="min-h-screen items-center justify-center dark:bg-black pl-4 pr-4">
            <Services/>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2 h-[1]"></hr>

        {/* Services Section */}
        <section className="min-h-screen items-center justify-center dark:bg-black">
            <Testimonials/>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2 h-[1]"></hr>

        {/* Contact Section */}
        <section className="min-h-screen items-center justify-center dark:bg-black">
            <Contact/>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2 h-[1]"></hr>

        {/* Footer Section */}
        <section className="items-center justify-center dark:bg-black">
            <Ending/>
        </section>
      </div>
    </div>
  );
}

export default App;
