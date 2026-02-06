import { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ThemeIcon = theme === 'dark' ? Icons.moon : theme === 'light' ? Icons.sun : Icons.monitor;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? 'glass border-b border-[var(--border)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <a
              href="#"
              className="text-lg font-semibold hover:text-yellow-500 transition-colors"
            >
              <span className="text-gradient">V</span>inay
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-yellow-500 hover:bg-yellow-500/10 transition-all"
                aria-label={`Theme: ${theme}`}
              >
                <ThemeIcon className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <Icons.x className="w-5 h-5" /> : <Icons.menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-14 left-4 right-4 glass rounded-xl border border-[var(--border)] p-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-[var(--text-secondary)] hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
