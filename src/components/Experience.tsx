import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icons } from './Icons';

const experiences = [
  {
    company: 'Saranyu Technologies',
    role: 'Software Engineer',
    period: 'Sept 2023 – Present',
    location: 'Bengaluru',
    achievements: [
      'Built data-intensive backend services using Node.js and ClickHouse for real-time analytics',
      'Engineered Python ETL workflows processing 20GB+ daily with 99.9% reliability',
      'Optimized SQL with indexing, partitioning, materialized views — 80% faster queries',
      'Implemented multi-tenant architecture with PostgreSQL RLS',
      'Built Kafka ingestion services for 20M events/day',
      'Reduced response times 50% using Redis caching',
    ],
    tech: ['Node.js', 'Python', 'ClickHouse', 'PostgreSQL', 'Kafka', 'Redis'],
  },
  {
    company: 'Hitachi Vantara',
    role: 'Data Analytics Intern',
    period: 'Feb – Aug 2023',
    location: 'Bengaluru',
    achievements: [
      'Analyzed large datasets using Power BI and Google Looker Studio',
      'Worked with Pentaho DI for big data processing',
      'Supported ML workflows through data preprocessing',
    ],
    tech: ['Power BI', 'Looker Studio', 'Pentaho', 'Python'],
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          <span className="text-xs font-medium text-yellow-500 uppercase tracking-wider">
            Experience
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
            Where I've worked
          </h2>

          <div className="mt-8 space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`card rounded-xl p-5 sm:p-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-yellow-500 text-sm font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Icons.calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icons.mapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-yellow-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]"
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
