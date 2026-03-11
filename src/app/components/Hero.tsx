import { motion } from "motion/react";
import { Download, ArrowRight, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/70721cb2906db13fdb37ef08780df81c547287fd.png";
interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"
      }`}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${darkMode ? "#fff" : "#000"} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? "#fff" : "#000"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* Moroccan accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-blue-600 to-green-700" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/60 mb-6 backdrop-blur-sm"
              style={darkMode ? { borderColor: "rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.08)" } : {}}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className={`text-sm font-medium ${darkMode ? "text-blue-400" : "text-blue-700"}`}>
                Available for opportunities
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`mb-3 tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.1 }}
          >
            Rida{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              SATER
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`text-xl font-medium mb-6 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
          >
            Data Scientist &amp; Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={`text-lg leading-relaxed mb-10 max-w-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Building intelligent systems and scalable digital solutions using Artificial Intelligence,
            Machine Learning and modern software technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(37,99,235,0.35)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll("#projects")}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              View Projects
              <ArrowRight size={16} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-all ${
                darkMode
                  ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400 bg-gray-800/50"
                  : "border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 bg-white/80"
              }`}
            >
              <Download size={16} />
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll("#contact")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-all ${
                darkMode
                  ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400 bg-gray-800/50"
                  : "border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 bg-white/80"
              }`}
            >
              <Mail size={16} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 flex gap-8"
          >
            {[
              { value: "5+", label: "Projects" },
              { value: "3+", label: "Internships" },
              { value: "Master's", label: "Degree" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 blur-xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 p-[3px]">
              <div className={`rounded-full ${darkMode ? "bg-gray-950" : "bg-white"} p-1`}>
                <img
                  src={profilePhoto}
                  alt="Rida SATER"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top"
                />
              </div>
            </div>

            {/* 4 AI Concept Orbs - Rotating around center */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central rotation container */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute w-72 h-72"
              >
                {/* Machine Learning - Top */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2"
                >
                  <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg border-2 transition-all ${
                    darkMode 
                      ? "bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-500/60 text-blue-100" 
                      : "bg-gradient-to-br from-blue-200/80 to-blue-100/60 border-blue-400 text-blue-900"
                  }`}>
                    <span className="text-3xl mb-1">🤖</span>
                    <span className="text-xs font-bold text-center">Machine<br/>Learning</span>
                  </div>
                </motion.div>

                {/* Deep Learning - Right */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2"
                >
                  <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg border-2 transition-all ${
                    darkMode 
                      ? "bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-500/60 text-purple-100" 
                      : "bg-gradient-to-br from-purple-200/80 to-purple-100/60 border-purple-400 text-purple-900"
                  }`}>
                    <span className="text-3xl mb-1">🧠</span>
                    <span className="text-xs font-bold text-center">Deep<br/>Learning</span>
                  </div>
                </motion.div>

                {/* NLP - Bottom */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2"
                >
                  <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg border-2 transition-all ${
                    darkMode 
                      ? "bg-gradient-to-br from-green-900/60 to-green-800/40 border-green-500/60 text-green-100" 
                      : "bg-gradient-to-br from-green-200/80 to-green-100/60 border-green-400 text-green-900"
                  }`}>
                    <span className="text-3xl mb-1">💬</span>
                    <span className="text-xs font-bold text-center">NLP</span>
                  </div>
                </motion.div>

                {/* Computer Vision - Left */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2"
                >
                  <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg border-2 transition-all ${
                    darkMode 
                      ? "bg-gradient-to-br from-orange-900/60 to-orange-800/40 border-orange-500/60 text-orange-100" 
                      : "bg-gradient-to-br from-orange-200/80 to-orange-100/60 border-orange-400 text-orange-900"
                  }`}>
                    <span className="text-3xl mb-1">👁️</span>
                    <span className="text-xs font-bold text-center">Computer<br/>Vision</span>
                  </div>
                </motion.div>

                {/* Central AI icon */}
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md border border-blue-400 ${
                    darkMode 
                      ? "bg-gradient-to-br from-blue-700 to-blue-900" 
                      : "bg-gradient-to-br from-blue-300 to-blue-400"
                  }`}>
                    <span className="text-2xl">✨</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 ${
          darkMode ? "text-gray-600" : "text-gray-400"
        }`}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
