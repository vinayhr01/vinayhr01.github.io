import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icons } from './Icons';

const contactItems = [
  { icon: Icons.mail, label: 'Email', value: 'vinayhr1211+source+portfolio@gmail.com', href: 'mailto:vinayhr1211+source+portfolio@gmail.com' },
  { icon: Icons.mapPin, label: 'Location', value: 'Bengaluru, Karnataka', href: null },
];

const socials = [
  { icon: Icons.github, label: 'GitHub', href: 'https://github.com/vinayhr01' },
  { icon: Icons.linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/vinay-h-r' },
];

export function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          <div className="text-center max-w-lg mx-auto">
            <span className="text-xs font-medium text-yellow-500 uppercase tracking-wider">
              Contact
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
              Let's connect
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              Open to opportunities and interesting projects.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {contactItems.map((item, i) => (
              <div
                key={item.label}
                className={`card rounded-xl p-4 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${(i + 1) * 75}ms` }}
              >
                <item.icon className="w-5 h-5 text-yellow-500" />
                <div className="mt-3">
                  <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium hover:text-yellow-500 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-xl px-5 py-3 flex items-center gap-2 text-sm hover:text-yellow-500 transition-colors"
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </a>
            ))}
          </div>

          {/* Education */}
          <div className={`mt-10 max-w-md mx-auto card rounded-xl p-5 text-center ${isVisible ? 'animate-fade-up delay-4' : 'opacity-0'}`}>
            <Icons.graduationCap className="w-6 h-6 text-yellow-500 mx-auto" />
            <h3 className="mt-3 font-semibold">B.E. Computer Science</h3>
            <p className="text-sm text-[var(--text-secondary)]">R N S Institute of Technology</p>
            <div className="mt-2 flex items-center justify-center gap-3 text-xs text-[var(--text-muted)]">
              <span>2019 – 2023</span>
              <span className="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 font-medium">
                9.1 CGPA
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="mailto:vinayhr1211+source+portfolio@gmail.com"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
            >
              <Icons.mail className="w-4 h-4" />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
