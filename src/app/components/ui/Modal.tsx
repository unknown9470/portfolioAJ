"use client";

import { useEffect, useRef, useId } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId(); // pour aria-labelledby

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    if (open) {
      if (!d.open) d.showModal();
      d.focus();
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      if (d.open) d.close();
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Overlay = vrai bouton interactif => OK pour Sonar */}
          <motion.button
            type="button"
            aria-label="Fermer le modal"
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ⚠️ Pas de props Framer Motion directement sur <dialog> */}
          <dialog
            ref={dialogRef}
            aria-labelledby={title ? `${titleId}-label` : undefined}
            className="m-0 p-0 bg-transparent border-0 w-full h-full"
            onClose={onClose}
            onCancel={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            {/* On anime le CONTENU interne, pas <dialog> */}
            <motion.div
              className="relative mx-auto mt-20 w-[min(92vw,860px)] rounded-xl bg-white shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              // stop propagation sans déclencher la règle clavier
              onPointerDown={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 rounded-md p-2 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Fermer</span>
              </button>

              {title && (
                <h2 id={`${titleId}-label`} className="sr-only">
                  {title}
                </h2>
              )}

              {children}
            </motion.div>
          </dialog>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
