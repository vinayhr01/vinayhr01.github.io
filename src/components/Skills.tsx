import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Node.js / Express', level: 92 },
  { name: 'PostgreSQL', level: 88 },
  { name: 'ClickHouse', level: 85 },
  { name: 'Kafka', level: 80 },
  { name: 'React.js', level: 82 },
  { name: 'MongoDB / Redis', level: 80 },
];

const tools = [
  'Docker', 'NGINX', 'PM2', 'Git', 'AWS EC2/S3', 'Linux',
  'REST APIs', 'JWT', 'Keycloak', 'Materialized Views', 'Indexing', 'Partitioning',
];

function SkillBar({ name, level, isVisible, delay }: { name: string; level: number; isVisible: boolean; delay: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-[var(--text-secondary)]">{name}</span>
        <span className="text-[var(--text-muted)] text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full skill-bar"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          <span className="text-xs font-medium text-yellow-500 uppercase tracking-wider">
            Skills
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
            Technologies I use
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                isVisible={isVisible}
                delay={i * 100 + 200}
              />
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-[var(--text-muted)] mb-4">Tools & Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span
                  key={tool}
                  className={`px-3 py-1.5 text-xs rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:border-yellow-500 hover:text-yellow-500 transition-colors cursor-default ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${400 + i * 30}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
