import Navbar from "@/layout/Navbar.jsx";
import Hero from "@/sections/Hero.jsx";
import About from "@/sections/About.jsx";
import Experience from "@/sections/Experience.jsx";
import Projects from "@/sections/Projects.jsx";
import Testimonials from "@/sections/Testimonials.jsx";
import Contacts from "@/sections/Contacts.jsx";

function App() {
  return (
    <div className="min-h-screen overscroll-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
