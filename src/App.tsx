import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;