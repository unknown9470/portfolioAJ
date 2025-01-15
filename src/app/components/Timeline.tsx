import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Experience {
  title: string;
  company: string;
  date: string;
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const ref = useRef(null); // Référence pour observer la section
  const isInView = useInView(ref, { once: true }); // Animation déclenchée une seule fois

  return (
    <section ref={ref} className="timeline bg-gray-100 py-4">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="absolute w-1 bg-primary h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>
          <h2 className="text-3xl font-bold text-primary text-center mb-8"></h2>
          <div className="w-full space-y-8 px-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: -50 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}} 
                transition={{
                  duration: 0.5,
                  delay: index * 0.2, 
                }}
              >
                <div
                  className={`timeline-item flex w-full items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } hidden md:flex`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary h-6 w-6 rounded-full"></div>
                </div>
                <div
                  className={`bg-white p-4 rounded-lg shadow-lg w-full md:w-5/12 ${
                    index % 2 === 0 ? "ml-0 md:mr-auto" : "mr-0 md:ml-auto"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-gray-500">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
