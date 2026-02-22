import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Youtube } from 'lucide-react';
import heroImage from '../../public/images/hero-photo-new.jpg';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl floating-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-pink/15 rounded-full blur-3xl floating-orb-delayed" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl floating-orb" style={{ animationDelay: '-10s' }} />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-lg mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Amogh <span className="text-gradient">Biju</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl text-zinc-300 font-display mb-6"
            >
              AI Researcher & Builder
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting intelligent systems at the intersection of research and creativity. 
              Currently at USC Viterbi, building AI that matters.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-white text-[#0f0f1a] font-semibold rounded-full hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>
              <motion.a
                href="https://youtube.com/@thejunkyard-117"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Youtube size={18} />
                YouTube
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/gamefreakoneone', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/amogh-biju', label: 'LinkedIn' },
                { icon: Youtube, href: 'https://youtube.com/@thejunkyard-117', label: 'YouTube' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Photo (SQUARE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/30 via-accent-pink/20 to-accent-cyan/30 rounded-2xl blur-2xl" />
              
              {/* Photo - SQUARE with rounded corners */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={heroImage}
                  alt="Amogh Biju"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-3 -right-3 px-4 py-2 glass rounded-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="text-accent-purple text-sm font-medium">USC Viterbi</span>
              </motion.div>
              
              <motion.div
                className="absolute -top-3 -left-3 px-4 py-2 glass rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <span className="text-accent-cyan text-sm font-medium">AI Researcher</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-zinc-500 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}
