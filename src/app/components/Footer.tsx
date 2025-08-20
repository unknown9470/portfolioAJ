"use client";
import { Github, Linkedin, Mail } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Alexis Jeandenans</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Développeur full-stack orienté front-end, expert en React/Next.js, 
              CI/CD et observabilité.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <nav className="space-y-2">
              
                <a href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  À propos
                </a>
                <a href="/skills" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Compétences
                </a>
                <a href="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Projets
                </a>
                <a href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alexisjeandenans"
                className="text-muted-foreground hover:text-foreground transition-smooth"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/alexisjeandenans"
                className="text-muted-foreground hover:text-foreground transition-smooth"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@alexis-jeandenans.dev"
                className="text-muted-foreground hover:text-foreground transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Alexis Jeandenans. Tous droits réservés.
          </p>
          <a
            href="/legal"               
            className="text-xs text-muted-foreground hover:text-foreground transition-smooth mt-2 sm:mt-0"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}