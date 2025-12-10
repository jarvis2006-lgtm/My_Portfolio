
import './App.css';
import Navbar from "./Portfolio/Navbar";
import About from "./Portfolio/About";
import Projects from "./Portfolio/Projects";
import Skills from "./Portfolio/Skills";
import Resume from "./Portfolio/Resume";
import Contact from "./Portfolio/Contact";
import { Suspense } from 'react';

function App(){
  return(
    <div className="app">
      <Navbar />

      <Suspense fallback={<p>Loading...</p>}>
      
      <section id="about">
        <About/>
      </section>
      
      <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </Suspense>

    </div>
  )
}
export default App;
