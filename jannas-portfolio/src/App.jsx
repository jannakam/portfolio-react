import About from "./components/About"
import Header from "./components/Header"
import MyNavbar from "./components/MyNavbar"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import './App.css';

function App() {
  return (
    <div>
      <MyNavbar />
      <section id="home" className="bg-violet-100">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects" className="bg-blue-100">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

