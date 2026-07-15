const skills = ['Python', 'PyTorch', 'LangChain', 'React', 'TypeScript', 'Computer Vision', 'LLMs', 'RAG'];

export default function About() {
  return (
    <section id="about" className="about section-frame content-section">
      <div className="about-title"><span>About</span><h2>Researcher,<br />builder,<br /><em>curious person.</em></h2></div>
      <div className="about-copy">
        <p className="lead">I'm a Computer Science Master's student at USC, currently working as a Research Assistant in the Viterbi School of Engineering. My work sits at the intersection of AI research and practical engineering—building systems that are both intelligent and impactful.</p>
        <p>From real-time fall detection for elderly care to AI-powered games that generate unique experiences every session, I'm driven by the challenge of making complex technology accessible and meaningful.</p>
        <p>When I'm not training models or debugging pipelines, you'll find me streaming project builds on my YouTube channel, exploring Los Angeles with my camera, or getting lost in a good game.</p>
      </div>
      <div className="photo-journal">
        <figure className="photo-large"><img loading="lazy" src="/images/strawberry-peak.webp" alt="Amogh hiking at Strawberry Peak above the clouds" /><figcaption>Above the clouds, Strawberry Peak</figcaption></figure>
        <figure className="photo-small"><img loading="lazy" src="/images/griffith-night.webp" alt="Amogh laughing at Griffith Observatory with Los Angeles behind him" /><figcaption>Griffith, after dark</figcaption></figure>
        <figure className="photo-city"><img loading="lazy" src="/images/little-tokyo.webp" alt="Little Tokyo street scene in Los Angeles" /><figcaption>Notes from Los Angeles</figcaption></figure>
      </div>
      <div className="skills-ledger"><p>Working knowledge</p>{skills.map((skill, index) => <span key={skill}><b>{String(index + 1).padStart(2, '0')}</b>{skill}</span>)}</div>
    </section>
  );
}
