
import Navbar  from "./Components/Navbar/Navbar";
import { Hero } from "./DiffrentSection/Hero/Hero";
import { Projects } from "./DiffrentSection/Projects/Projects";
import Calendar from "./DiffrentSection/Github/Calandar";
import Skill from "./DiffrentSection/skills/Skills";
import Contact from "./Components/Footer/Contact";
import About from "./DiffrentSection/About/About";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Calendar />
      <Contact />
   
   
    </div>
  );
}

export default App;
