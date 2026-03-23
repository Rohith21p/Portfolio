import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar({ links }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-[90]">
      <div
        className={`section-wrap transition duration-300 ${
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-95'
        }`}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between rounded-2xl border px-4 py-3 md:px-5 ${
            scrolled
              ? 'border-blue-300/25 bg-slate-950/65 shadow-[0_8px_32px_rgba(12,19,44,0.62)] backdrop-blur-xl'
              : 'border-blue-200/15 bg-slate-900/45 backdrop-blur-lg'
          }`}
        >
          <a href="#home" className="font-sora text-sm font-semibold tracking-[0.2em] text-slate-100 md:text-base">
            ROHITH V
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/50 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            data-cursor="hover"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200/20 bg-slate-800/45 text-slate-200 lg:hidden"
          >
            <span className="text-lg">{menuOpen ? '×' : '☰'}</span>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="glass-panel mt-2 space-y-1 rounded-2xl border border-blue-300/25 p-3 lg:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800/55 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
