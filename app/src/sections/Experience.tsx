import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const experiences = [
  {
    title: 'Research Assistant',
    company: 'USC Viterbi School of Engineering',
    location: 'Los Angeles, CA',
    period: 'February 2026 – Present',
    project: 'Project: Memoria — AI dementia assistant',
    achievements: [
      'Designed real-time fall detection system by fine-tuning Ultralytics YOLO11, achieving 0.923 mAP@0.5 and 94% recall',
      'Reduced false positives with 3.5-second confirmation buffer, delivering alerts within 6–8 seconds',
      'Built natural-language video query pipeline using SAM3 segmentation and temporal analysis',
    ],
  },
  {
    title: 'Research Intern',
    company: 'USC Institute for Creative Technologies',
    location: 'Los Angeles, CA',
    period: 'June 2025 – September 2025',
    project: null,
    achievements: [
      'Collaborated with team of 4 to build 3D reconstruction pipeline using RDD SfM, Doppelganger++, and Gaussian Splatting',
      'Reduced reconstruction time from 8 to 5 minutes (37% improvement) through optimized feature extraction',
      'Presented final pipeline demo to lab team',
    ],
  },
  {
    title: 'Research Intern',
    company: 'IIT Hyderabad',
    location: 'Hyderabad, India',
    period: 'June 2022 – July 2023',
    project: null,
    achievements: [
      'Partnered with PhD researcher from Osaka University, co-authoring IEEE Access survey paper',
      'Analyzed 11 cellular network monitoring applications across 2G–5G architectures',
      'Captured physical layer cellular data using MobileInsight and Dragonet\'s VPN-based approach',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background opacity-40 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 text-center uppercase tracking-tight">
            [ <span className="text-[#c5ef67]">Experience</span> ]
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            My journey through research and engineering—building systems that matter.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c5ef67] via-[#7b6b89] to-transparent transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.title + exp.period} delay={index * 0.15}>
                <div className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot (Brutalist Diamond) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#1a1a18] border-2 border-[#c5ef67] transform -translate-x-1/2 md:-translate-x-1/2 rotate-45 z-10"
                  />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <motion.div
                      whileHover={{ x: index % 2 === 0 ? -4 : 4, y: -4 }}
                      className="p-6 tech-glass group hover:border-[#c5ef67] transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Tech decorative corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#434143] group-hover:border-[#c5ef67] transition-colors" />

                      {/* Period */}
                      <span className="inline-block px-3 py-1 bg-[#c5ef67]/10 text-[#c5ef67] border border-[#c5ef67]/30 text-xs font-bold font-display uppercase tracking-wider mb-4 rounded-sm">
                        {exp.period}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <p className="text-[#a1a1aa] font-medium mb-1">
                        {exp.company}
                      </p>

                      {/* Location */}
                      <p className="text-zinc-500 text-sm mb-3">
                        {exp.location}
                      </p>

                      {/* Project */}
                      {exp.project && (
                        <p className="text-zinc-400 text-sm italic mb-4 border-l-2 border-[#7b6b89] pl-3 bg-[#1a1a18]/50 p-2">
                          {exp.project}
                        </p>
                      )}

                      {/* Achievements */}
                      <ul className={`space-y-2 ${
                        index % 2 === 0 ? 'md:text-left' : ''
                      }`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                            <span className="text-[#7b6b89] mt-1 font-bold">{'>'}</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
