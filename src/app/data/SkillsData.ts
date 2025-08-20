// export const skills = [
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Node.js",
//   "CSS",
//   "Tailwind CSS",
//   "Docker",
//   "Flask",
//   "MongoDB",
// ];
import type { LucideIcon } from 'lucide-react';
import { Code2, Database, Gauge, GitBranch } from 'lucide-react';

export type Skill = {
  icon: LucideIcon;
  title: string;
  techs: string[];
};

export const skills: Skill[] = [
  { icon: Code2,     title: 'Frontend',       techs: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS'] },
  { icon: Database,  title: 'Backend',        techs: ['FastAPI', 'Node.js', 'PostgreSQL', 'REST APIs'] },
  { icon: GitBranch, title: 'CI/CD',          techs: ['Jenkins', 'SonarQube', 'Docker', 'K8s'] },
  { icon: Gauge,     title: 'Observabilité',  techs: ['ELK Stack', 'Prometheus', 'Grafana', 'Monitoring'] },
];
