"use client";
import { useState } from "react";
import { projects } from "../data/ProjectsData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";



const Projects = () => {
  const [filter] = useState<string | null>(null); 
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;
  

  return (<>
    {/* Featured Projects */}
			<section className="py-16 p-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
						Projets phares
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Une sélection de mes réalisations les plus représentatives, alliant
						expertise technique et impact métier.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className="bg-white rounded-xl shadow hover:shadow-lg transition"
						>
							<Image
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover rounded-t-xl"
                width={400}
                height={300}
              />
							<div className="p-6">
								<h3 className="font-bold text-xl mb-2">{project.title}</h3>
								<p className="text-muted-foreground mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-2">
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
						</div>
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
          </>
  );
};

export default Projects;
