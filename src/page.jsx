
import Header from "./Header";
import About  from './About';
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Ending from "./End";
import AnimationBars from "./Animation";

function App2() {
  return (
    <>
    <main class="max-w-auto mx-auto text-center dark:bg-black pl-7 pr-7">      
      <Header/>
      <AnimationBars/>
      <About/>
        <hr className="mx-auto bg-black dark:bg-white w-1/2 h-[1px]"></hr>
      <Services/>
        <hr className="mx-auto bg-black dark:bg-white w-1/2 h-[1]"></hr>
      <Testimonials/>
        <hr className="mx-auto bg-black dark:bg-white w-1/2 h-[1px]"></hr>
      <Contact/>
      <hr className="mx-auto bg-black dark:bg-white w-1/2 h-[1px]"></hr>
      <Ending/>
      
    </main>
      
    </>    
  );
}

export default App2;
