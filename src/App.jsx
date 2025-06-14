import About from "./components/About"
import Header from "./components/Header"
import MyNavbar from "./components/MyNavbar"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import React from "react";
import { OverlayProvider } from "./hooks/useOverlay";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <OverlayProvider>
        <div className="overflow-y-auto h-screen bg-background-light dark:bg-background-dark transition-colors duration-200">
          <MyNavbar/>
          <ThemeSwitcher />
          <section id="home" className="bg-violet-100 dark:bg-gray-900">
            <Header />
          </section>
          <section id="about" className="bg-white dark:bg-gray-800">
            <About />
          </section>
          <section id="projects" className="bg-violet-100 dark:bg-gray-900">
            <Projects />
          </section>
          <section id="contact" className="bg-white dark:bg-gray-800">
            <Contact />
          </section>
        </div>
      </OverlayProvider>
    </ThemeProvider>
  );
}

export default App;

