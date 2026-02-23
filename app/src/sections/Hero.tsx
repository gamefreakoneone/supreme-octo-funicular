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
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 grid-background opacity-80" />

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
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight"
            >
              Amogh <span className="text-industrial">Biju_</span>
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
                className="px-8 py-3 bg-[#c5ef67] text-[#1a1a18] font-bold rounded-none hover:bg-white transition-colors duration-200 border border-[#c5ef67] hover:border-white shadow-hard-offset"
                whileHover={{ y: -2, x: -2 }}
                whileTap={{ y: 0, x: 0, boxShadow: "none" }}
              >
                [ VIEW_PROJECTS ]
              </motion.button>
              <motion.a
                href="https://youtube.com/@thejunkyard-117"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 tech-glass text-white font-medium rounded-none hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2 shadow-hard-offset-violet"
                whileHover={{ y: -2, x: -2 }}
                whileTap={{ y: 0, x: 0, boxShadow: "none" }}
              >
                <Youtube size={18} />
                YOUTUBE_DATA
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
            <div className="relative group">
              {/* Brutalist Frame behind photo */}
              <div className="absolute -inset-2 bg-[#282824] border border-[#434143] transform translate-x-4 translate-y-4" />
              
              {/* Photo - Stark SQUARE */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-none overflow-hidden border border-[#434143] bg-[#1a1a18]">
                {/* Tech overlay scanline effect */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay z-10 pointer-events-none" />
                
                <img
                  src={heroImage}
                  alt="Amogh Biju"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Crosshairs */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c5ef67] z-20" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c5ef67] z-20" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c5ef67] z-20" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c5ef67] z-20" />
              </div>

              {/* Data tags */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-3 py-1 tech-solid text-xs tracking-widest text-[#7b6b89] border-[#7b6b89]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                LOC: USC_VITERBI
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -left-4 px-3 py-1 tech-solid text-xs tracking-widest text-[#c5ef67] border-[#c5ef67]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                FUNC: AI_RSCH
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
