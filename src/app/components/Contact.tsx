"use client";
import React, { useState, useId } from "react";
import emailjs from "@emailjs/browser";
// Si tu veux garder "emailjs-com", vois la note plus bas.
import { Send } from "lucide-react";

const Contact = () => {
  const nomId = useId();
  const emailId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ⚠️ Vérifie bien ces variables dans .env.local (avec NEXT_PUBLIC_)
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
  const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                  ?? process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                  ?? ""; // compat ancien nommage
  const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Garde-fous utiles
    if (!serviceId || !templateId || !publicKey) {
      setError("Configuration EmailJS manquante. Vérifie tes variables d'environnement.");
      return;
    }

    setIsSubmitting(true);
    try {
      // @emailjs/browser v4 : 4e arg en objet { publicKey }
      await emailjs.send(serviceId, templateId, formData, { publicKey });
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Erreur EmailJS : ", err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container p-4 mx-auto md:p-4">
        <div className="flex items-center justify-center mb-6">
          <Send className="h-5 w-5 text-primary mr-2" />
          <h2 className="text-3xl font-bold text-primary text-center">Contactez-moi</h2>
        </div>

        {/* Messages */}
        {isSent && (
          <div className="md:w-50 mb-2" aria-live="polite">
            <h4 className="text-green-600 font-bold text-center mt-4">
              🎉 Votre message a été envoyé avec succès !
            </h4>
          </div>
        )}
        {error && (
          <p className="text-red-600 text-center mt-4" aria-live="assertive">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          noValidate
        >
          <div className="mb-4">
            <label htmlFor={nomId} className="block text-gray-700">Nom</label>
            <input
              id={nomId}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
              required
              autoComplete="name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor={emailId} className="block text-gray-700">Email</label>
            <input
              id={emailId}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor={messageId} className="block text-gray-700">Message</label>
            <textarea
              id={messageId}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
              rows={4}
              required
            />
          </div>

          {/* ✅ Bouton visible (fond + états) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
          >
            <Send className="h-5 w-5" />
            {isSubmitting ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
