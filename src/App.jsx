import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";

export default function App() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Experiences />
        <Skills />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
