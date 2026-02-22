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
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-accent-cyan/5" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl floating-orb" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            My journey through research and engineering—building systems that matter.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-pink to-accent-cyan transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.title + exp.period} delay={index * 0.15}>
                <div className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                    className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent-purple rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-2 border-[#0f0f1a] z-10 shadow-glow"
                  />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-6 glass rounded-2xl hover:border-white/20 transition-all duration-300"
                    >
                      {/* Period */}
                      <span className="inline-block px-3 py-1 bg-accent-purple/20 text-accent-purple text-xs font-medium rounded-full mb-3">
                        {exp.period}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <p className="text-accent-cyan font-medium mb-1">
                        {exp.company}
                      </p>

                      {/* Location */}
                      <p className="text-zinc-500 text-sm mb-3">
                        {exp.location}
                      </p>

                      {/* Project */}
                      {exp.project && (
                        <p className="text-zinc-400 text-sm italic mb-4 border-l-2 border-accent-purple/30 pl-3">
                          {exp.project}
                        </p>
                      )}

                      {/* Achievements */}
                      <ul className={`space-y-2 ${
                        index % 2 === 0 ? 'md:text-left' : ''
                      }`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm leading-relaxed">
                            <span className="text-accent-purple mt-1">→</span>
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
