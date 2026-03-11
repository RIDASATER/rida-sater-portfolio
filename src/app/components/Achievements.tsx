import { motion } from "motion/react";

interface AchievementsProps {
  darkMode: boolean;
}

const achievements = [
  {
    icon: "🤖",
    title: "AI System Development",
    description:
      "Designed and deployed production-ready AI systems combining computer vision, NLP and deep learning techniques.",
    color: "blue",
  },
  {
    icon: "⚙️",
    title: "ML Pipeline Engineering",
    description:
      "Built end-to-end machine learning pipelines covering data ingestion, preprocessing, model training and evaluation.",
    color: "purple",
  },
  {
    icon: "🚀",
    title: "MLOps Architecture",
    description:
      "Implemented MLOps best practices using Docker, MLflow, DVC and FastAPI for scalable model deployment.",
    color: "green",
  },
  {
    icon: "🌐",
    title: "Full-Stack Web Development",
    description:
      "Delivered complete web platforms from database design to frontend UI using React.js, Node.js and Laravel.",
    color: "orange",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Developed cross-platform mobile applications using Flutter with intuitive UX and backend API integration.",
    color: "red",
  },
  {
    icon: "🎓",
    title: "Academic Excellence",
    description:
      "Pursued a Master of Excellence in Data Science & Information Systems Security at Sultan Moulay Slimane University.",
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; bgDark: string; text: string; textDark: string; border: string; borderDark: string }> = {
  blue: { bg: "bg-blue-50", bgDark: "bg-blue-900/20", text: "text-blue-600", textDark: "text-blue-400", border: "border-blue-100", borderDark: "border-blue-900/40" },
  purple: { bg: "bg-purple-50", bgDark: "bg-purple-900/20", text: "text-purple-600", textDark: "text-purple-400", border: "border-purple-100", borderDark: "border-purple-900/40" },
  green: { bg: "bg-green-50", bgDark: "bg-green-900/20", text: "text-green-600", textDark: "text-green-400", border: "border-green-100", borderDark: "border-green-900/40" },
  orange: { bg: "bg-orange-50", bgDark: "bg-orange-900/20", text: "text-orange-600", textDark: "text-orange-400", border: "border-orange-100", borderDark: "border-orange-900/40" },
  red: { bg: "bg-red-50", bgDark: "bg-red-900/20", text: "text-red-600", textDark: "text-red-400", border: "border-red-100", borderDark: "border-red-900/40" },
  teal: { bg: "bg-teal-50", bgDark: "bg-teal-900/20", text: "text-teal-600", textDark: "text-teal-400", border: "border-teal-100", borderDark: "border-teal-900/40" },
};

export function Achievements({ darkMode }: AchievementsProps) {
  return (
    <section
      id="achievements"
      className={`py-28 relative overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      {/* Moroccan-inspired accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-700 via-blue-600 to-red-600" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
          }`}>
            Innovation & Achievements
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Key Strengths
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
          <p className={`max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Core competencies and domain expertise that make impactful contributions to modern tech teams.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`p-6 rounded-2xl border transition-all ${
                  darkMode
                    ? `${c.bgDark} ${c.borderDark} hover:shadow-xl`
                    : `${c.bg} ${c.border} hover:shadow-md`
                }`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-16 p-8 rounded-3xl border ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700"
              : "bg-gradient-to-r from-blue-600 to-blue-700 border-transparent"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "AI Projects" },
              { value: "3+", label: "Internships" },
              { value: "10+", label: "Technologies" },
              { value: "100%", label: "Commitment" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className={`text-3xl font-bold mb-1 ${darkMode ? "text-white" : "text-white"}`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-blue-100"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
