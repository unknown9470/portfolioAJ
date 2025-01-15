"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

const projects = [
  {
    title: "Projet 1",
    description: "Description du projet 1",
    link: "#",
    tags: ["React", "Tailwind"],
    image: "/images/appGretaHome.png",
  },
  {
    title: "Projet 2",
    description: "Description du projet 2",
    link: "#",
    tags: ["Node.js", "Express"],
    image: "/images/umansHome.png",
  },
  {
    title: "Projet 3",
    description: "Description du projet 3",
    link: "#",
    tags: ["MongoDB", "Node.js"],
    image: "/images/jangularLogin.png",
  },
  {
    title: "Projet 4",
    description: "Description du projet 4",
    link: "#",
    tags: ["React", "TypeScript"],
    image: "/images/project4.jpg",
  },
  {
    title: "Projet 5",
    description: "Description du projet 5",
    link: "#",
    tags: ["Docker", "Node.js"],
    image: "/images/project5.jpg",
  },
  {
    title: "Projet 6",
    description: "Description du projet 6",
    link: "#",
    tags: ["React", "Next.js"],
    image: "/images/project6.jpg",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null); 
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true }); 

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto p-2 md:p-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Mes Projets
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          {["React", "Node.js", "MongoDB", "Docker"].map((tag) => (
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
            >
              <img
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
    </section>
  );
};

export default Projects;
