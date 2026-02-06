import { Icons } from './Icons';

const socials = [
  { icon: Icons.github, href: 'https://github.com/vinayhr01', label: 'GitHub' },
  { icon: Icons.linkedin, href: 'https://linkedin.com/in/vinay-h-r', label: 'LinkedIn' },
  { icon: Icons.mail, href: 'mailto:vinayhr1211+source+portfolio@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Vinay H R
          </div>
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-yellow-500 hover:bg-yellow-500/10 transition-all"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
