import { motion } from 'framer-motion';
import { Github, Youtube, Sparkles, BookOpen, Shield, Brain } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const projects = [
  {
    title: 'Defeat the Darkness',
    subtitle: 'AI-Powered Beat-Em-Up Game',
    description: 'A real-time multimodal AI game where every playthrough is unique. Built during a hackathon, it integrates three Gemini 3 capabilities—image generation, structured output, and live voice streaming—to create procedurally-generated gameplay.',
    achievements: [
      '5 concurrent Gemini Pro calls for parallel asset generation',
      'Self-correcting pipeline with LLM-as-a-Judge validation',
      'Real-time voice-driven boss battles',
    ],
    tech: ['Gemini API', 'React', 'FastAPI', 'WebSockets'],
    links: {
      github: 'https://github.com/gamefreakoneone/all-your-base-is-ours',
      youtube: 'https://youtu.be/IfepmZUKTZI',
    },
    videoId: 'IfepmZUKTZI',
    icon: Sparkles,
    color: 'from-accent-purple/30 to-accent-pink/30',
  },
  {
    title: 'Project Memoria',
    subtitle: 'AI Dementia Assistant',
    description: 'An AI-powered assistant for dementia care, featuring real-time fall detection, activity monitoring, and natural language video queries to help caregivers stay informed about patient wellbeing.',
    achievements: [
      '0.923 mAP@0.5 fall detection with YOLO11 fine-tuning',
      '6–8 second alert delivery with pose confirmation buffer',
      'Natural language queries over patient activities using SAM3',
    ],
    tech: ['YOLO11', 'SAM3', 'OpenAI API', 'Gemini API'],
    links: {
      github: 'https://github.com/gamefreakoneone/Project-Memoria_Dementia-Assistant',
      youtube: 'https://youtu.be/jn7uHg1R5oo',
    },
    videoId: 'jn7uHg1R5oo',
    icon: Brain,
    color: 'from-accent-cyan/30 to-accent-purple/30',
  },
  {
    title: 'Ctrl+Alt+Del Hate',
    subtitle: 'Explainable Hate Speech Detection',
    description: 'A multi-task hate speech detection model that goes beyond binary classification. LoRA-finetuned LLaMA-3.2-1B to identify target demographics and score toxicity severity.',
    achievements: [
      '83.7% accuracy on multi-class classification',
      '0.80 Spearman correlation on severity scoring',
      'Three-task architecture with shared encoder',
    ],
    tech: ['LLaMA', 'LoRA', 'PyTorch', 'Hugging Face'],
    links: {
      github: 'https://github.com/gamefreakoneone/Ctrl-Alt-Del-Hate',
    },
    image: '/images/poster-photo.jpg',
    icon: Shield,
    color: 'from-accent-orange/30 to-accent-pink/30',
  },
  {
    title: 'Where We Left Off',
    subtitle: 'AI Reading Companion',
    description: 'A spoiler-protected reading companion that knows exactly where you are in a book. Uses chapter-aware RAG with ChromaDB metadata filtering to answer questions without revealing future plot points.',
    achievements: [
      'LangGraph agentic workflows with conditional semantic search',
      'Entity resolution pipeline for character alias tracking',
      'Interactive PDF reader with relationship graphs',
    ],
    tech: ['LangChain', 'LangGraph', 'ChromaDB', 'Next.js', 'FastAPI'],
    links: {
      github: 'https://github.com/gamefreakoneone/Where-we-left-off-reader',
    },
    image: '/images/where-we-left-off.jpg',
    icon: BookOpen,
    color: 'from-accent-pink/30 to-accent-cyan/30',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-transparent to-accent-purple/5" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl floating-orb" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            A selection of my work—where research meets creativity.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group h-full glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Project Media - Video or Image */}
                <div className="relative aspect-video overflow-hidden">
                  {project.videoId ? (
                    <div className="video-container rounded-t-2xl">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                      <project.icon size={64} className="text-white/30" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-gradient transition-all">
                        {project.title}
                      </h3>
                      <p className={`text-sm bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color}`}>
                      <project.icon size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-1 mb-4">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-500 text-xs">
                        <span className="text-accent-purple">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-zinc-400 text-xs rounded-full border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-zinc-300 hover:text-white text-sm transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={14} />
                        Code
                      </motion.a>
                    )}
                    {project.links.youtube && (
                      <motion.a
                        href={project.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 rounded-full text-red-400 hover:text-red-300 text-sm transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Youtube size={14} />
                        Watch
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
