import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';
import './adjustments.css';

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
