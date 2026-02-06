import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icons } from './Icons';

const stats = [
  { icon: Icons.zap, value: '<100ms', label: 'API Response' },
  { icon: Icons.server, value: '99.99%', label: 'Uptime' },
  { icon: Icons.database, value: '20M+', label: 'Events/Day' },
  { icon: Icons.code, value: '70+', label: 'APIs Built' },
];

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          <span className="text-xs font-medium text-yellow-500 uppercase tracking-wider">
            About
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
            Building scalable systems
          </h2>

          <div className="mt-8 grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-4 text-[var(--text-secondary)]">
              <p>
                I'm a Software Engineer based in Bengaluru, specializing in{' '}
                <span className="text-[var(--text-primary)] font-medium">data-intensive backend systems</span>.
                I create robust APIs, ETL pipelines, and real-time analytics architectures.
              </p>
              <p>
                My stack includes{' '}
                <span className="text-[var(--text-primary)] font-medium">Node.js, Python, PostgreSQL, ClickHouse, and Kafka</span>,
                with a focus on performance optimization and reliability.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`card rounded-xl p-4 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${(i + 2) * 75}ms` }}
                >
                  <stat.icon className="w-5 h-5 text-yellow-500" />
                  <div className="mt-3 text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
