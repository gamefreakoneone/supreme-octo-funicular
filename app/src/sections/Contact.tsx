import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const contactLinks = [
  {
    name: 'GitHub',
    handle: '@gamefreakoneone',
    href: 'https://github.com/gamefreakoneone',
    icon: Github,
    color: 'from-zinc-600 to-zinc-500',
  },
  {
    name: 'LinkedIn',
    handle: 'Amogh Biju',
    href: 'https://linkedin.com/in/amogh-biju',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-500',
  },
  {
    name: 'YouTube',
    handle: '@thejunkyard-117',
    href: 'https://youtube.com/@thejunkyard-117',
    icon: Youtube,
    color: 'from-red-600 to-red-500',
  },
  {
    name: 'Email',
    handle: 'amogh@outlook.com',
    href: 'mailto:amogh@outlook.com',
    icon: Mail,
    color: 'from-accent-purple to-accent-pink',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's <span className="text-gradient">Connect</span>
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
                className="group flex items-center gap-4 p-5 glass rounded-2xl hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color}`}>
                  <link.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-white group-hover:text-gradient transition-all">
                    {link.name}
                  </h3>
                  <p className="text-zinc-500 text-sm">{link.handle}</p>
                </div>
                <ArrowUpRight 
                  size={20} 
                  className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
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
