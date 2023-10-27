
import { Hero } from "./DiffrentSection/Hero/Hero";
import { Projects } from "./DiffrentSection/Projects/Projects";
import Calendar from "./DiffrentSection/Github/Calandar";
import Skill from "./DiffrentSection/skills/Skills";
import About from "./DiffrentSection/About/About";
import ContactSection from "./DiffrentSection/Contact/Contact";
import NavbarCo from "./components/Navbar/NavbarCo";
import Footer from "./components/Footer/Footer";




function App() {


  return (
    <div>
      <NavbarCo />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Calendar />
      <ContactSection />
      <Footer />



    </div>
  );
}

export default App;
