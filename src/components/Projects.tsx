import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icons } from './Icons';

const projects = [
  {
    title: 'Amazonia E-Commerce',
    description: 'Full-stack MERN app with auth, cart, PayPal integration. Optimized MongoDB queries with indexing for 50% better performance.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
    github: 'https://github.com/vinayhr01',
  },
  {
    title: 'Real-time Analytics',
    description: 'Processing 20M+ events/day using Kafka stream ingestion and ClickHouse for sub-100ms query times.',
    tech: ['Node.js', 'Kafka', 'ClickHouse', 'Redis'],
  },
  {
    title: 'ETL Pipeline',
    description: 'Automated data pipeline processing 20GB daily with Python scripts for validation and schema monitoring.',
    tech: ['Python', 'PostgreSQL', 'AWS S3', 'Cron'],
  },
  {
    title: 'Multi-tenant Platform',
    description: 'Secure multi-tenant backend with PostgreSQL RLS, JWT auth, and RSA/AES-128 encryption.',
    tech: ['Node.js', 'PostgreSQL', 'JWT', 'Keycloak'],
  },
];

export function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-yellow-500 uppercase tracking-wider">
                Projects
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
                Things I've built
              </h2>
            </div>
            <a
              href="https://github.com/vinayhr01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-yellow-500 transition-colors flex items-center gap-1"
            >
              GitHub
              <Icons.arrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`card rounded-xl p-5 group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(i + 1) * 75}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-yellow-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <Icons.github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
