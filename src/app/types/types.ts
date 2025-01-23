
export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
}
export interface Experience {
  title: string;
  company: string;
  date: string;
}

export interface TimelineProps {
  experiences: Experience[];
}