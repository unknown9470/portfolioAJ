"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "../../types/types";
import { projects } from "../../data/ProjectsData";

import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import TagFilter from "../projects/TagFilter";


export default function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const uniqueTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = filter
    ? projects.filter((p) => p.tags.includes(filter))
    : projects;

  return (
    <>
      <section className="py-16 p-4" ref={ref} data-inview={isInView}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Projets phares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes réalisations les plus représentatives, alliant
            expertise technique et impact métier.
          </p>
        </div>

        <TagFilter tags={uniqueTags} active={filter} onChange={setFilter} />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg border border-primary text-primary bg-white hover:bg-primary/10 transition"
          >
            Voir tous les projets
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
