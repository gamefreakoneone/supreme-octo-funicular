import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              className="font-display text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              AB
            </motion.a>
            <span className="text-zinc-600 text-sm hidden sm:inline">
              Built with curiosity and code
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/gamefreakoneone', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/amogh-biju', label: 'LinkedIn' },
              { icon: Youtube, href: 'https://youtube.com/@thejunkyard-117', label: 'YouTube' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-zinc-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-zinc-600 text-sm">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
