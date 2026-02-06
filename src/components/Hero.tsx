import { Icons } from './Icons';

const socialLinks = [
  { icon: Icons.github, href: 'https://github.com/vinayhr01', label: 'GitHub' },
  { icon: Icons.linkedin, href: 'https://linkedin.com/in/vinay-h-r', label: 'LinkedIn' },
  { icon: Icons.mail, href: 'mailto:vinayhr1211@gmail.com', label: 'Email' },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full blur-[100px] animate-glow" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-2xl">
          {/* Status */}
          <div className="animate-fade-up delay-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-medium border border-yellow-500/20">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Available for work
            </span>
          </div>

          {/* Name */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-up delay-1">
            Vinay H R
          </h1>

          {/* Title */}
          <p className="mt-4 text-xl sm:text-2xl font-medium text-yellow-500 animate-fade-up delay-2">
            Software Engineer
          </p>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl animate-fade-up delay-3">
            2+ years building high-performance backend systems and real-time data pipelines with Node.js, Python, and distributed databases.
          </p>

          {/* Location */}
          <div className="mt-4 flex items-center gap-2 text-[var(--text-muted)] text-sm animate-fade-up delay-4">
            <Icons.mapPin className="w-4 h-4" />
            <span>Bengaluru, India</span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-5">
            <a
              href="#contact"
              className="btn-primary px-6 py-2.5 rounded-lg text-sm flex items-center gap-2"
            >
              Get in touch
              <Icons.arrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="btn-secondary px-6 py-2.5 rounded-lg text-sm"
            >
              View work
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-1 animate-fade-up delay-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[var(--text-muted)] hover:text-yellow-500 hover:bg-yellow-500/10 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-8">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-yellow-500 transition-colors"
        >
          <Icons.chevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
