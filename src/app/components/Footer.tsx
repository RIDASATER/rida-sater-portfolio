import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Leadership", href: "#leadership-volunteering" },
  { label: "Contact", href: "#contact" },
];

export function Footer({ darkMode }: FooterProps) {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={`py-12 border-t ${
      darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-100"
    }`}>
      {/* Moroccan accent line */}
      <div className="h-0.5 bg-gradient-to-r from-red-600 via-blue-600 to-green-700 mb-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">RS</span>
              </div>
              <span className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                Rida SATER
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
              Data Scientist & AI Engineer building intelligent systems and scalable digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wide mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Navigation
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-sm transition-colors ${
                    darkMode ? "text-gray-500 hover:text-blue-400" : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wide mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/rida-sater", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/ridasater", label: "GitHub" },
                { icon: Mail, href: "mailto:saterriida@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    darkMode
                      ? "bg-gray-800 text-gray-400 hover:bg-blue-900/40 hover:text-blue-400"
                      : "bg-gray-50 text-gray-500 hover:bg-blue-50 hover:text-blue-600 border border-gray-100"
                  }`}
                  title={social.label}
                >
                  <social.icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 ${
          darkMode ? "border-gray-800" : "border-gray-100"
        }`}>
          <p className={`text-sm flex items-center gap-1.5 ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by{" "}
            <span className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Rida SATER</span>
          </p>
          <p className={`text-sm ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
            © {new Date().getFullYear()} Rida SATER. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-lg">🇲🇦</span>
            <span className={`text-sm ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
              Rabat, Morocco
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
