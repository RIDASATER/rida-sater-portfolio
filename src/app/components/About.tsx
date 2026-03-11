import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, MapPin, Globe } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

const education = [
  {
    degree: "Master of Excellence",
    field: "Data Science & Information Systems Security",
    school: "Sultan Moulay Slimane University",
    icon: "🎓",
    color: "blue",
  },
  {
    degree: "Bachelor's Degree",
    field: "Data Science & Information Systems Security",
    school: "Sultan Moulay Slimane University",
    icon: "📘",
    color: "green",
  },
  {
    degree: "DUT",
    field: "Systems and Network Administration",
    school: "EST Khénifra",
    icon: "🖥️",
    color: "red",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-28 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
            }`}>
              About Me
            </span>
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Passionate about AI &amp; Software
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Summary */}
          <FadeIn delay={0.1}>
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                I am Rida SATER a <strong className={darkMode ? "text-white" : "text-gray-900"}>Data Scientist and Software Engineer</strong> specialized
                in Artificial Intelligence, Machine Learning, Natural Language Processing and Full-Stack Development.
              </p>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                I focus on building intelligent systems, scalable ML pipelines, and modern digital platforms that combine AI and software engineering to solve real-world problems.
              </p>

              {/* Info cards */}
              <div className="space-y-3">
                {[
                  { icon: MapPin, label: "Location", value: "Rabat, Morocco 🇲🇦" },
                  { icon: GraduationCap, label: "Education", value: "Master of Excellence in Data Science" },
                  { icon: Globe, label: "Languages", value: "Arabic, French, English" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${
                      darkMode
                        ? "border-gray-800 bg-gray-800/50"
                        : "border-gray-100 bg-gray-50/60"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
                    }`}>
                      <item.icon size={16} />
                    </div>
                    <div>
                      <div className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        {item.label}
                      </div>
                      <div className={`text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — Education Timeline */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className={`text-xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Education
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className={`absolute left-5 top-0 bottom-0 w-0.5 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`} />

                <div className="space-y-8">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="relative flex gap-6 pl-14"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md ${
                        i === 0
                          ? "bg-blue-600"
                          : i === 1
                          ? darkMode ? "bg-green-800" : "bg-green-100"
                          : darkMode ? "bg-red-900" : "bg-red-50"
                      } ${i === 0 ? "" : ""}`}>
                        {edu.icon}
                      </div>

                      {/* Card */}
                      <div className={`flex-1 p-5 rounded-2xl border transition-all hover:shadow-md ${
                        darkMode
                          ? "border-gray-800 bg-gray-800/60 hover:border-gray-700"
                          : "border-gray-100 bg-white hover:border-blue-100"
                      }`}>
                        <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${
                          i === 0 ? "text-blue-500" : i === 1 ? "text-green-600" : "text-red-500"
                        }`}>
                          {edu.degree}
                        </div>
                        <div className={`font-semibold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                          {edu.field}
                        </div>
                        <div className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                          {edu.school}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
