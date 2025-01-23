"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        serviceId || "", 
        templateId || "", 
        formData,
        userId 
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          setError("Une erreur est survenue. Veuillez réessayer.");
          console.error("Erreur EmailJS : ", err);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container p-4 mx-auto md:p-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">Contactez-moi</h2>
        {isSent && <div className="md:w-50 mb-2"><h4 className="text-green-500 font-bold text-center mt-4 rounded-lg ">🎉 Votre message a été envoyé avec succès ! 🎉</h4></div>}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
