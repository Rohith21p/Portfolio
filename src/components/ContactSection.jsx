import { Github, Linkedin, Mail, MessageSquare, Phone } from 'lucide-react';
import { contact } from '../data/siteContent';
import MagneticButton from './ui/MagneticButton';
import SectionHeader from './ui/SectionHeader';

export default function ContactSection() {
  return (
    <section id="contact" className="section-spacing section-spacing-bottom" data-reveal>
      <div className="site-container">
        <div className="surface-card contact-wrap" data-depth-speed="0.08" data-depth-x="-0.03">
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something great."
            description="Open to freelance work, long-term collaboration, and exciting product opportunities."
            align="center"
          />

          <div className="contact-grid">
            <a href={`mailto:${contact.email}`} className="contact-item" data-cursor="interactive">
              <span className="contact-icon"><Mail size={16} /></span>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">{contact.email}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/91${contact.phone}`}
              target="_blank"
              rel="noreferrer"
              className="contact-item"
              data-cursor="interactive"
            >
              <span className="contact-icon"><Phone size={16} /></span>
              <div>
                <p className="contact-label">WhatsApp</p>
                <p className="contact-value">{contact.phone}</p>
              </div>
            </a>

            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-item" data-cursor="interactive">
              <span className="contact-icon"><Linkedin size={16} /></span>
              <div>
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">linkedin.com/in/rohith1206</p>
              </div>
            </a>

            <a href={contact.github} target="_blank" rel="noreferrer" className="contact-item" data-cursor="interactive">
              <span className="contact-icon"><Github size={16} /></span>
              <div>
                <p className="contact-label">GitHub</p>
                <p className="contact-value">github.com/Rohith21p</p>
              </div>
            </a>
          </div>

          <div className="contact-actions">
            <MagneticButton href={`mailto:${contact.email}`} variant="primary">
              <MessageSquare size={16} />
              Start a Conversation
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
