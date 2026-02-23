import { motion } from 'framer-motion';
import { Github, Youtube, Sparkles, BookOpen, Shield, Brain } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import posterPhotoImage from '../../public/images/poster-photo.jpg';
import whereWeLeftOffImage from '../../public/images/where-we-left-off.jpg';

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
    color: '#ec4899', // Pink
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
    color: '#06b6d4', // Cyan
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
    image: posterPhotoImage,
    icon: Shield,
    color: '#f97316', // Orange
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
    image: whereWeLeftOffImage,
    icon: BookOpen,
    color: '#c5ef67', // Lime
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background opacity-40 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 text-center uppercase tracking-tight">
            [ <span className="text-[#c5ef67]">Projects</span> ]
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
                whileHover={{ y: -4, x: -4, boxShadow: `4px 4px 0px 0px ${project.color}` }}
                className="group h-full tech-glass rounded-none overflow-hidden transition-all duration-300 relative border border-[#434143]"
              >
                {/* Project Media - Video or Image */}
                <div className="relative aspect-video overflow-hidden">
                  {project.videoId ? (
                    <div className="video-container border-b border-[#434143]">
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
                      <div className="absolute inset-0 border-b border-[#434143] mix-blend-overlay pointer-events-none" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1a1a18] border-b border-[#434143]">
                      <project.icon size={64} style={{ color: project.color }} className="opacity-50" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono" style={{ color: project.color }}>
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="p-2 border border-[#434143] bg-[#1a1a18]">
                      <project.icon size={20} style={{ color: project.color }} />
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-1 mb-4">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-400 text-xs">
                        <span style={{ color: project.color }} className="font-bold">{'>'}</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#1a1a18] text-zinc-300 text-xs font-mono border border-[#434143]"
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
                        className="flex items-center gap-2 px-4 py-2 bg-[#282824] hover:bg-white text-zinc-300 hover:text-[#1a1a18] border border-[#434143] hover:border-white text-sm font-bold uppercase transition-colors duration-200"
                        whileHover={{ y: -2, x: -2, boxShadow: `2px 2px 0px 0px ${project.color}` }}
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
                        className="flex items-center gap-2 px-4 py-2 tech-glass hover:bg-white hover:text-[#1a1a18] border border-[#434143] text-zinc-300 text-sm font-bold uppercase transition-colors duration-200"
                        whileHover={{ y: -2, x: -2, boxShadow: `2px 2px 0px 0px #ff0000` }}
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
