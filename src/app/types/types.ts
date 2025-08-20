
export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
}
export interface Experience {
  title: string;
  company: string;
  date: string;
}

export interface TimelineProps {
  experiences: Experience[];
}