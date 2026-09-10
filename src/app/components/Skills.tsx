import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface SkillsProps {
  darkMode: boolean;
}

const skillCategories = [
  {
    title: "Data Science & ML",
    emoji: "🤖",
    color: "blue",
    skills: [
      { name: "Python", level: 95 },
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 85 },
      { name: "PyTorch", level: 83 },
      { name: "Pandas / NumPy", level: 93 },
      { name: "Statistics", level: 88 },
      { name: "Time Series (LSTM, ARIMA)", level: 82 },
      { name: "NLP (NLTK, SpaCy, BERT)", level: 84 },
      { name: "Deep Learning (CNN, RNN)", level: 85 },
      { name: "Feature Engineering", level: 90 },
      { name: "Predictive Modeling", level: 90 },
    ],
  },
  {
    title: "MLOps & Deployment",
    emoji: "🚀",
    color: "green",
    skills: [
      { name: "Docker / Kubernetes", level: 82 },
      { name: "MLflow", level: 78 },
      { name: "Apache Airflow", level: 76 },
      { name: "FastAPI / Flask", level: 88 },
      { name: "CI/CD (GitHub Actions)", level: 84 },
      { name: "Git", level: 92 },
      { name: "Model Deployment", level: 84 },
    ],
  },
  {
    title: "Data Engineering",
    emoji: "💻",
    color: "orange",
    skills: [
      { name: "ETL / ELT", level: 88 },
      { name: "DBT", level: 75 },
      { name: "DVC", level: 75 },
      { name: "Great Expectations", level: 74 },
      { name: "Apache Spark / Hadoop", level: 72 },
      { name: "Data Warehousing", level: 78 },
      { name: "Data Quality", level: 84 },
      { name: "Data Versioning", level: 80 },
    ],
  },
  {
    title: "BI & Visualization",
    emoji: "📊",
    color: "purple",
    skills: [
      { name: "Metabase", level: 86 },
      { name: "Tableau", level: 78 },
      { name: "Matplotlib / Seaborn", level: 88 },
      { name: "Plotly", level: 84 },
      { name: "Dashboarding", level: 86 },
    ],
  },
];

const colorMap: Record<string, { bar: string; badge: string; badgeDark: string }> = {
  blue: { bar: "from-blue-400 to-blue-600", badge: "bg-blue-50 text-blue-600", badgeDark: "bg-blue-900/40 text-blue-400" },
  purple: { bar: "from-purple-400 to-purple-600", badge: "bg-purple-50 text-purple-600", badgeDark: "bg-purple-900/40 text-purple-400" },
  green: { bar: "from-green-400 to-green-600", badge: "bg-green-50 text-green-600", badgeDark: "bg-green-900/40 text-green-400" },
  orange: { bar: "from-orange-400 to-orange-500", badge: "bg-orange-50 text-orange-600", badgeDark: "bg-orange-900/40 text-orange-400" },
  red: { bar: "from-red-400 to-red-500", badge: "bg-red-50 text-red-600", badgeDark: "bg-red-900/40 text-red-400" },
};

function SkillBar({ name, level, color, darkMode }: { name: string; level: number; color: string; darkMode: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{name}</span>
        <span className={`text-xs font-semibold ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{level}%</span>
      </div>
      <div className={`h-2 rounded-full ${darkMode ? "bg-gray-800" : "bg-gray-100"} overflow-hidden`}>
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color].bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export function Skills({ darkMode }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`py-28 ${darkMode ? "bg-gray-950" : "bg-gray-50/60"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
          }`}>
            Technical Skills
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            My Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-gray-700"
                    : "bg-white border-gray-100 hover:border-blue-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
                    darkMode ? c.badgeDark : c.badge
                  }`}>
                    {cat.emoji}
                  </div>
                  <h3 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {cat.title}
                  </h3>
                </div>
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    darkMode={darkMode}
                  />
                ))}
              </motion.div>
            );
          })}

          {/* Tech tags card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`p-6 rounded-2xl border flex flex-col ${
              darkMode
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-gray-100 shadow-sm"
            }`}
          >
            <h3 className={`font-bold mb-5 ${darkMode ? "text-white" : "text-gray-900"}`}>
              🏷️ All Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Pandas", "NumPy",
                "LSTM", "ARIMA", "NLTK", "SpaCy", "BERT", "CNN", "RNN", "Docker",
                "Kubernetes", "MLflow", "Apache Airflow", "FastAPI", "Flask", "GitHub Actions",
                "ETL", "DBT", "DVC", "Apache Spark", "Hadoop", "Metabase", "Tableau", "Plotly",
              ].map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-default ${
                    darkMode
                      ? "bg-gray-800 text-gray-400 hover:bg-blue-900/30 hover:text-blue-400"
                      : "bg-gray-50 text-gray-600 border border-gray-100 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
