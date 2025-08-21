import { ArrowRight } from "lucide-react";
import type { Project } from "../../types/types";
import Modal from "../ui/Modal";
import Image from "next/image";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Readonly<ProjectModalProps>) {
  const open = !!project;

  return (
    <Modal open={open} onClose={onClose} title={project?.title}>
      {project && (
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full sm:w-1/2 h-56 object-cover rounded-lg"
              width={400}
              height={300}
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {"demoUrl" in project && project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:opacity-90"
                  >
                    Voir la démo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                )}
                {"repoUrl" in project && project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary/10"
                  >
                    Code source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
