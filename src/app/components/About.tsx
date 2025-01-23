"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Timeline from "./Timeline";
import Skills from "./Skills";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const mainExperiences = [
    { title: "Ingénieur développement logiciels", company: "Uman Group", date: "Mars 2023 - Actuellement" },
    { title: "Développeur Full Stack", company: "Payinnov", date: "Juillet 2022 - Décembre 2022" },
    { title: "Concepteur développeur d'applications", company: "Greta", date: "Mars 2022 - Juillet 2022" },
    { title: "Développeur web", company: "Team tonic services", date: "Juin 2021 - Août 2021" },
    { title: "Développeur Full Stack", company: "LepoleS", date: "Septembre 2020 - Octobre 2021" },
    { title: "Facteur", company: "La Poste", date: "Mars 2016 - Août 2019" },
    { title: "Vacataire employé de bureau", company: "Mairie de Paris", date: "2014-2016" },
    { title: " Vacataire technicien informatique", company: "Mairie de Paris", date: "2013" }
  ];


  const modalExperiences = [
    { title: "Titre RNCP de niveau VII, Expert en ingéniérie informatique et systèmes d’information option Developpement, BigData et IA", company: "Ipssi", date: "2023 - 2025" },
    { title: "Titre RNCP de niveau VI, Concepteur developpeur d'applications", company: "Greta", date: "2021 - 2022" },
    { title: "Titre RNCP de niveau V, Développeur web et web mobile", company: "LepoleS", date: "2020 - 2021" },
   
  ];

  return (
    <>
      <motion.section
        className="bg-primary h-screen flex flex-col justify-center items-center text-white text-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
        <span>Bienvenue, Je suis</span>
        <br />
        <TypeAnimation
          sequence={[
            "JEANDENANS Alexis",
            1000,
            "Full Stack Developer",
            1000,
            "Mobile Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>

      <div className="absolute bottom-0 left-0 w-full h-50 overflow-hidden">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 56"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .animate-waving {
          animation: wave 5s cubic-bezier(0.4, 0.0, 0.2, 0.2) infinite;
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.section>

      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">À propos de moi</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-4 py-2 ${activeTab === "skills" ? "bg-accent text-white" : "bg-white text-primary"}`}
            >
              Compétences
            </button>
            <button
              onClick={() => setActiveTab("bio")}
              className={`px-4 py-2 ${activeTab === "bio" ? "bg-accent text-white" : "bg-white text-primary"}`}
            >
              Parcours
            </button>
          </div>

          {activeTab === "skills" ? (
            <div className="text-center">
              
              <Skills />
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={openModal}
                className="px-4 py-2 mb-4 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 mt-4"
              >
                Voir mon parcours académique🎓
              </button>
              <Timeline experiences={mainExperiences} />
    
              {isModalOpen && (
                <div
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                  onClick={closeModal}
                >
                  <div
                    className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    >
                      ✕
                    </button>
                    <h2 className="text-xl font-bold mb-4">Mon Parcours Académique 🎓</h2>
                    <div className="overflow-y-scroll max-h-[calc(80vh-4rem)]">
                      <Timeline experiences={modalExperiences} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
