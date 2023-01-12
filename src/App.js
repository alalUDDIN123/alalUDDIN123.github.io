
import Navbar  from "./Components/Navbar/Navbar";
import { Hero } from "./DiffrentSection/Hero/Hero";
import { Projects } from "./DiffrentSection/Projects/Projects";
import Calendar from "./DiffrentSection/Github/Calandar";
import Skill from "./DiffrentSection/skills/Skills";


// ❓

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Projects />
      <Calendar />
   
     
    </div>
  );
}

export default App;
