import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="hero section-frame">
      <div className="hero-copy">
        <h1><span>Amogh</span><span>Biju</span></h1>
        <p className="hero-role">AI researcher, builder, enthusiast.</p>
        <p className="hero-intro">Crafting intelligent systems at the intersection of research and creativity. Working on projects that would make me laugh in the future.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View projects <ArrowDownRight /></a>
          <a className="button button-outline" href="#about">About me <ArrowDownRight /></a>
        </div>
        <div className="social-line" aria-label="Social links">
          <a href="https://github.com/gamefreakoneone" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          <a href="https://linkedin.com/in/amogh-biju" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href="https://youtube.com/@thejunkyard-117" target="_blank" rel="noreferrer">YouTube <ArrowUpRight /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-plane"><img src="/images/amogh-blue-portrait.webp" alt="Amogh Biju smiling in a blue hoodie" /></div>
        <figure className="metro-strip"><img src="/images/la-metro-dusk.webp" alt="Los Angeles Metro platform at dusk" /></figure>
        <div className="sun-mark" aria-hidden="true"><span /></div>
        <p className="journal-note">Los Angeles<br />signal journal<br />vol. 01</p>
      </div>
      <div className="hero-next">
        <span>Featured projects</span><strong>Research meets curiosity.</strong>
      </div>
    </section>
  );
}
