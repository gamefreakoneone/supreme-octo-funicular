import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="nav-wrap">
      <nav className="nav-bar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>Amogh Biju</a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
