import { ArrowUpRight } from 'lucide-react';

const links = [
  ['Email', 'amogh@outlook.com', 'mailto:amogh@outlook.com'],
  ['GitHub', '@gamefreakoneone', 'https://github.com/gamefreakoneone'],
  ['LinkedIn', 'Amogh Biju', 'https://linkedin.com/in/amogh-biju'],
  ['YouTube', '@thejunkyard-117', 'https://youtube.com/@thejunkyard-117'],
];

export default function Contact() {
  return (
    <section id="contact" className="contact section-frame content-section">
      <div className="contact-image"><img loading="lazy" src="/images/santa-monica-sunset.jpg" alt="Santa Monica pier at sunset" /></div>
      <div className="contact-copy"><h2>Let's build<br /><em>something interesting.</em></h2><p>Have a project in mind? Want to collaborate? Or just want to talk AI, games, or the best taco spots in LA?</p><a className="contact-email" href="mailto:amogh@outlook.com">Start a conversation <ArrowUpRight /></a></div>
      <div className="contact-links">{links.map(([label, handle, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><span>{label}</span><strong>{handle}</strong><ArrowUpRight /></a>)}</div>
      <p className="location">Los Angeles, California</p>
    </section>
  );
}
