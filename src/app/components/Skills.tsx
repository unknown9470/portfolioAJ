"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "CSS",
  "Tailwind CSS",
  "Docker",
  "Flask",
  "MongoDB",
];

const Skills = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref); 

  return (
    <section  id="skills" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Mes Compétences 🚀
        </h2>
        <ul className="flex flex-wrap justify-center mt-6" ref={ref}>
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white text-gray-800 px-4 py-2 m-2 rounded shadow"
              initial={{ opacity: 0, y: 50 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
