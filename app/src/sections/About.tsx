import { motion } from 'framer-motion';
import { Code2, Brain, Eye, Layers, MessageSquare, Database, Cpu, Zap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const skills = [
  { name: 'Python', icon: Code2, color: '#06b6d4' },
  { name: 'PyTorch', icon: Brain, color: '#f97316' },
  { name: 'LangChain', icon: MessageSquare, color: '#7b6b89' },
  { name: 'React', icon: Layers, color: '#06b6d4' },
  { name: 'TypeScript', icon: Code2, color: '#ec4899' },
  { name: 'Computer Vision', icon: Eye, color: '#f97316' },
  { name: 'LLMs', icon: Brain, color: '#7b6b89' },
  { name: 'RAG', icon: Database, color: '#06b6d4' },
];

const currentWork = [
  {
    title: 'Project Memoria',
    description: 'New features for our dementia care assistant—expanding capabilities and improving user experience.',
    icon: Brain,
    color: '#7b6b89',
  },
  {
    title: 'NanoGPT',
    description: 'Training a GPT model from scratch to understand the fundamentals of transformer architectures.',
    icon: Cpu,
    color: '#06b6d4',
  },
  {
    title: 'Reinforcement Learning',
    description: 'Exploring RL through game environments—narrowing down the perfect game for experiments.',
    icon: Zap,
    color: '#f97316',
  },
  {
    title: 'Agentic Game Modding',
    description: 'Building a system where AI agents edit game files to create custom mods automatically.',
    icon: Code2,
    color: '#ec4899',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 grid-background opacity-40 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Bio */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
                [ <span className="text-[#c5ef67]">About_Me</span> ]
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  I'm a Computer Science Master's student at USC, currently working as a 
                  Research Assistant in the Viterbi School of Engineering. My work sits at 
                  the intersection of AI research and practical engineering—building systems 
                  that are both intelligent and impactful.
                </p>
                <p>
                  From real-time fall detection for elderly care to AI-powered games that 
                  generate unique experiences every session, I'm driven by the challenge of 
                  making complex technology accessible and meaningful.
                </p>
                <p>
                  When I'm not training models or debugging pipelines, you'll find me 
                  streaming project builds on my YouTube channel, exploring Los Angeles 
                  with my camera, or getting lost in a good game.
                </p>
              </div>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: skill.color,
                        boxShadow: `2px 2px 0px 0px ${skill.color}`
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a1a18] border border-[#434143] text-zinc-300 text-sm font-medium transition-all duration-200 cursor-default"
                    >
                      <skill.icon size={14} style={{ color: skill.color }} />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Currently Working On */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.3}>
              <h3 className="font-display text-xl font-bold text-white mb-6 uppercase tracking-tight">
                Current_Processes
              </h3>
            </ScrollReveal>

            <div className="space-y-4">
              {currentWork.map((item, index) => (
                <ScrollReveal key={item.title} delay={0.4 + index * 0.1}>
                  <motion.div
                    whileHover={{ x: 4, y: -4, boxShadow: `4px 4px 0px 0px ${item.color}` }}
                    className="p-4 bg-[#1a1a18] border border-[#434143] hover:border-[#434143] transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-2" style={{ backgroundColor: item.color }} />
                    <div className="flex items-start gap-4 pl-2">
                      <div className="p-2 border border-[#434143] bg-[#282824]">
                        <item.icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
