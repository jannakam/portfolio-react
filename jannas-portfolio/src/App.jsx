import About from "./components/About"
import Header from "./components/Header"
import MyNavbar from "./components/MyNavbar"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

function App() {
  return (
    <div>
      <MyNavbar />
      <section id="home" className="h-screen bg-blue-100">
        <Header />
      </section>
      <section id="about" className="h-screen bg-green-100">
        <About />
      </section>
      <section id="projects" className="h-screen bg-yellow-100">
        <Projects />
      </section>
      <section id="contact" className="h-screen bg-red-100">
        <Contact />
      </section>
    </div>
  );
}

export default App;

