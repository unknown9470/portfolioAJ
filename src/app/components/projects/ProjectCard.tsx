import { motion } from "framer-motion";
import type { Project } from "../../types/types";

type ProjectCardProps = {
  project: Project;
  index?: number;
  onClick: () => void;
};

export default function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
