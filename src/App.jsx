import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import Skills from "./components/Skills";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";
import HeadphoneBackground from "./components/HeadphoneBackground";

export default function App() {
  // Reveal Material Symbols glyphs only once the icon font is ready,
  // so the raw ligature text ("dark_mode") never flashes on screen.
  useEffect(() => {
    let done = false;
    const mark = () => {
      if (done) return;
      done = true;
      document.documentElement.classList.add("icons-ready");
    };
    if (document.fonts && document.fonts.load) {
      document.fonts.load("1em 'Material Symbols Outlined'").then(mark).catch(mark);
      document.fonts.ready.then(mark);
    } else {
      mark();
    }
    const t = setTimeout(mark, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ShaderBackground />
      <HeadphoneBackground />
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Experiences />
        <Gallery />
        <Skills />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
