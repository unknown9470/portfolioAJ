"use client";
import { useState, useEffect, useRef } from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"skills" | "bio">("skills");


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // A11y: Échap pour fermer + focus dans le dialog + lock du scroll
  // 1) ref pour <dialog>

  // 2) ouvrir/fermer proprement
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (isModalOpen) {
      if (!d.open) d.showModal();
      d.focus(); // pas de tabIndex: le <dialog> peut recevoir le focus une fois ouvert
      document.body.style.overflow = "hidden";
    } else {
      if (d.open) d.close();
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);



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
    <section id="about" className="py-16 bg-background">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">À propos de moi</h2>

        <div className="flex justify-center space-x-4 mb-8 ">
          <button
            type="button"
            onClick={() => setActiveTab("skills")}
            className={`px-4 py-2 ${activeTab === "skills" ? "bg-accent text-white" : "bg-white text-primary"}`}
          >
            Compétences
          </button>
          <button
            type="button"
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
              type="button"
              onClick={openModal}
              className="px-4 py-2 mb-4 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 mt-4"
            >
              Voir mon parcours académique🎓
            </button>

            <Timeline experiences={mainExperiences} />
            {isModalOpen && (
              <dialog
              ref={dialogRef}
              aria-labelledby="academic-title"
              className="w-11/12 max-w-3xl rounded-lg p-0 bg-transparent border-0"
              onClose={closeModal}
              onCancel={(e) => { e.preventDefault(); closeModal(); }}
            >
              {/* bouton overlay interactif : clique dehors OU Entrée/Espace ferment */}
              <button
                type="button"
                aria-label="Fermer"
                className="absolute inset-0 z-0"
                onClick={closeModal}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") closeModal(); }}
              />
              {/* contenu au-dessus */}
              <div className="relative z-10 rounded-lg bg-white shadow-lg p-6 overflow-hidden">
                <button type="button" onClick={closeModal} className="absolute top-2 right-2 ...">✕</button>
                <h2 id="academic-title" className="text-xl font-bold mb-4">Mon Parcours Académique 🎓</h2>
                <div className="overflow-y-scroll max-h-[calc(80vh-4rem)]"><Timeline experiences={modalExperiences} /></div>
              </div>
            </dialog>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
