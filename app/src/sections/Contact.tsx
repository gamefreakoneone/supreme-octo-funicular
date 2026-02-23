import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const contactLinks = [
  {
    name: 'GitHub',
    handle: '@gamefreakoneone',
    href: 'https://github.com/gamefreakoneone',
    icon: Github,
    color: '#fafafa',
  },
  {
    name: 'LinkedIn',
    handle: 'Amogh Biju',
    href: 'https://linkedin.com/in/amogh-biju',
    icon: Linkedin,
    color: '#0077b5',
  },
  {
    name: 'YouTube',
    handle: '@thejunkyard-117',
    href: 'https://youtube.com/@thejunkyard-117',
    icon: Youtube,
    color: '#ff0000',
  },
  {
    name: 'Email',
    handle: 'amogh@outlook.com',
    href: 'mailto:amogh@outlook.com',
    icon: Mail,
    color: '#c5ef67',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background opacity-40 mix-blend-overlay" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
              [ <span className="text-[#c5ef67]">Connect</span> ]
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to talk AI, games, 
              or the best taco spots in LA?
            </p>
          </div>
        </ScrollReveal>

        {/* Location */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-2 text-zinc-500 mb-10">
            <MapPin size={18} />
            <span>Los Angeles, California</span>
          </div>
        </ScrollReveal>

        {/* Contact Links Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => (
            <ScrollReveal key={link.name} delay={0.2 + index * 0.1}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 tech-glass hover:bg-[#1a1a18] transition-all duration-300 relative border border-[#434143]"
                whileHover={{ scale: 1.02, y: -4, x: -4, boxShadow: `4px 4px 0px 0px ${link.color}` }}
                whileTap={{ scale: 0.98, y: 0, x: 0, boxShadow: 'none' }}
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#434143] group-hover:w-2 transition-all duration-300" style={{ backgroundColor: link.color }} />
                
                <div className="p-3 bg-[#1a1a18] border border-[#434143] ml-2">
                  <link.icon size={24} style={{ color: link.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white uppercase tracking-tight transition-all">
                    {link.name}
                  </h3>
                  <p className="text-[#a1a1aa] text-sm font-mono">{link.handle}</p>
                </div>
                <ArrowUpRight 
                  size={20} 
                  className="text-zinc-600 transition-all" 
                  style={{ color: link.color }}
                />
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <blockquote className="relative">
              <p className="text-zinc-500 italic text-sm max-w-md mx-auto leading-relaxed">
                "All of his choices were interesting and had a meaningful impact on the world. 
                That was the lie Stanley told himself."
              </p>
              <cite className="text-zinc-600 text-xs mt-2 block not-italic">
                — The Stanley Parable
              </cite>
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
