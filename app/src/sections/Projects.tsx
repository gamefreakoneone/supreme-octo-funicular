import { ArrowUpRight, Github, Play } from 'lucide-react';

const projectLinks = {
  memoria: { github: 'https://github.com/gamefreakoneone/Project-Memoria_Dementia-Assistant', watch: 'https://youtu.be/gYOgGcSjWnA', devpost: 'https://devpost.com/software/project-memoria-the-dementia-assistant' },
  probeiq: { github: 'https://github.com/gamefreakoneone/ProbeIQ_Remix', watch: 'https://youtu.be/HHxjOoI9ISo' },
  darkness: { github: 'https://github.com/gamefreakoneone/all-your-base-is-ours', watch: 'https://youtu.be/IfepmZUKTZI' },
  hate: { github: 'https://github.com/gamefreakoneone/Ctrl-Alt-Del-Hate' },
  reader: { github: 'https://github.com/gamefreakoneone/Where-we-left-off-reader' },
};

function Action({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="project-action" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a>;
}

export default function Projects() {
  return (
    <section id="projects" className="projects section-frame content-section">
      <header className="section-heading projects-heading"><h2>Selected<br />projects</h2><p>AI systems, voice intelligence, and human-centered technologies—built to solve real problems.</p><span>01—05</span></header>

      <article className="project-feature memoria">
        <div className="project-media"><iframe src="https://www.youtube.com/embed/gYOgGcSjWnA" title="Project Memoria demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
        <div className="project-body">
          <p className="project-kicker">AI Dementia Assistant</p><h3>Project Memoria</h3>
          <p>An AI-powered assistant for dementia care, featuring real-time fall detection, activity monitoring, and natural language video queries to help caregivers stay informed about patient wellbeing.</p>
          <ul><li>Best of Multimodal Understanding track @ Amazon Nova AI Hackathon</li><li>0.923 mAP@0.5 fall detection with YOLO11 fine-tuning</li><li>6–8 second alert delivery with pose confirmation buffer</li><li>Natural language queries over patient activities using SAM3</li></ul>
          <div className="tech-list"><span>YOLO11</span><span>SAM3</span><span>OpenAI API</span><span>Gemini API</span></div>
          <div className="project-actions"><Action href={projectLinks.memoria.github}><Github /> Code</Action><Action href={projectLinks.memoria.watch}><Play /> Watch</Action><Action href={projectLinks.memoria.devpost}>Devpost</Action></div>
        </div>
      </article>

      <div className="project-pair">
        <article className="project-medium probeiq">
          <div className="project-media"><iframe src="https://www.youtube.com/embed/HHxjOoI9ISo" title="ProbeIQ demo" loading="lazy" allowFullScreen /></div>
          <div className="project-body"><p className="project-kicker">Real-Time Voice Tutor</p><h3>ProbeIQ</h3><p>A voice-first interactive media explanation platform where learners watch procedure videos and ask contextual questions in real time.</p><ul><li>~1 s interrupt-to-answer latency</li><li>73% correct-segment retrieval</li><li>Sub-10 ms Moss lookups</li></ul><div className="tech-list"><span>LiveKit</span><span>Next.js</span><span>Python</span><span>Deepgram</span><span>MiniMax</span><span>Moss</span></div><div className="project-actions"><Action href={projectLinks.probeiq.github}>Code</Action><Action href={projectLinks.probeiq.watch}>Watch</Action></div></div>
        </article>
        <article className="project-medium darkness">
          <div className="project-media"><iframe src="https://www.youtube.com/embed/IfepmZUKTZI" title="Defeat the Darkness demo" loading="lazy" allowFullScreen /></div>
          <div className="project-body"><p className="project-kicker">AI-Powered Beat-Em-Up Game</p><h3>Defeat the Darkness</h3><p>A real-time multimodal AI game where every playthrough is unique, combining image generation, structured output, and live voice streaming.</p><ul><li>5 concurrent Gemini Pro calls</li><li>Self-correcting LLM-as-a-Judge pipeline</li><li>Real-time voice-driven boss battles</li></ul><div className="tech-list"><span>Gemini API</span><span>React</span><span>FastAPI</span><span>WebSockets</span></div><div className="project-actions"><Action href={projectLinks.darkness.github}>Code</Action><Action href={projectLinks.darkness.watch}>Watch</Action></div></div>
        </article>
      </div>

      <div className="project-compact-list">
        <article className="project-compact"><img loading="lazy" src="/images/ctrl-alt-del-poster.webp" alt="Amogh and collaborator presenting the Ctrl+Alt+Del Hate research poster" /><div><p className="project-kicker">Explainable Hate Speech Detection</p><h3>Ctrl+Alt+Del Hate</h3><p>A multi-task hate speech detection model that goes beyond binary classification. LoRA-finetuned LLaMA-3.2-1B to identify target demographics and score toxicity severity.</p><ul><li>83.7% multi-class accuracy</li><li>0.80 Spearman correlation</li><li>Three-task shared encoder</li></ul><div className="tech-list"><span>LLaMA</span><span>LoRA</span><span>PyTorch</span><span>Hugging Face</span></div><Action href={projectLinks.hate.github}>Code</Action></div></article>
        <article className="project-compact reverse"><img loading="lazy" src="/images/where-we-left-off.webp" alt="Where We Left Off reading companion interface" /><div><p className="project-kicker">AI Reading Companion</p><h3>Where We Left Off</h3><p>A spoiler-protected reading companion that knows exactly where you are in a book, using chapter-aware RAG with ChromaDB metadata filtering.</p><ul><li>LangGraph conditional semantic search</li><li>Entity resolution for character aliases</li><li>Interactive PDF reader with relationship graphs</li></ul><div className="tech-list"><span>LangChain</span><span>LangGraph</span><span>ChromaDB</span><span>Next.js</span><span>FastAPI</span></div><Action href={projectLinks.reader.github}>Code</Action></div></article>
      </div>
    </section>
  );
}
