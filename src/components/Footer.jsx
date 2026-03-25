import { Github, Linkedin, Mail } from 'lucide-react';
import { contact, navLinks } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-wrap">
        <div className="footer-brand-wrap">
          <p className="footer-brand">Rohith V</p>
          <p className="footer-sub">Full Stack Developer</p>
        </div>

        <nav className="footer-links">
          {navLinks.slice(1).map((link) => (
            <a key={link.href} href={link.href} data-cursor="interactive">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a href={contact.github} target="_blank" rel="noreferrer" data-cursor="interactive">
            <Github size={16} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" data-cursor="interactive">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${contact.email}`} data-cursor="interactive">
            <Mail size={16} />
          </a>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Rohith V. Built with focus, clarity, and quality.</p>
    </footer>
  );
}
