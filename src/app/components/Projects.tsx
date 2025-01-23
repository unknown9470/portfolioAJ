"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { Project } from "../types/types";
import { projects } from "../data/ProjectsData";



const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null); 
  const [selectedProject , setSelectedProject] = useState<Project | null >(null);
  const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags)));
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;
  const openModal = (project : Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true }); 
  

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto p-2 md:p-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Mes Projets
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(filter === tag ? null : tag)}
              className={`px-4 py-2 rounded ${
                filter === tag ? "bg-secondary text-white" : "bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-background p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1, 
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-secondary hover:underline mt-4 block"
              >
                Voir le projet
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl p-6 relative flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            
            <div className="w-full h-full md:w-1/2">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

           
            <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
