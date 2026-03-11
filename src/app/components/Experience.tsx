import { motion } from "motion/react";

interface ExperienceProps {
  darkMode: boolean;
}

const experiences = [
  {
    company: "Technocolabs Software Inc",
    role: "Data Science Intern",
    period: "Remote Internship",
    type: "Remote Internship",
    color: "blue",
    emoji: "🧪",
    bullets: [
      "Built machine learning pipelines for data processing and classification",
      "Performed exploratory data analysis and feature engineering",
      "Developed ML models: Random Forest, SVM and Logistic Regression",
      "Integrated models into applications through REST APIs",
    ],
    tags: ["Python", "Scikit-learn", "EDA", "ML Pipelines", "REST API"],
  },
  {
    company: "CodeAlpha",
    role: "Data Science Intern",
    period: "Oct 2024 · 1 mo · Remote",
    type: "Remote Internship",
    color: "purple",
    emoji: "🔬",
    bullets: [
      "Worked on various data science tasks including data cleaning and preprocessing",
      "Performed exploratory data analysis (EDA) to derive meaningful insights",
      "Developed and evaluated machine learning models for predictive tasks",
      "Applied technical skills in real-world scenarios focusing on data quality",
    ],
    tags: ["Python", "EDA", "Data Cleaning", "ML Models", "Preprocessing"],
  },
  {
    company: "Prodigy InfoTech",
    role: "Data Science Intern",
    period: "Sep 2024 · 1 mo · Remote",
    type: "Remote Internship",
    color: "indigo",
    emoji: "📊",
    bullets: [
      "Worked on data science tasks: Data Cleaning, Preprocessing and EDA",
      "Built machine learning models to solve business problems",
      "Ensured data quality and uncovered insights through statistical analysis",
      "Contributed to data visualization and knowledge sharing documentation",
    ],
    tags: ["Python", "ML Models", "Data Visualization", "Documentation", "EDA"],
  },
  {
    company: "ORMVAO",
    role: "Desktop Developer",
    period: "Internship",
    type: "Internship",
    color: "green",
    emoji: "🖥️",
    bullets: [
      "Developed a desktop application for managing IT assets",
      "Designed modules for equipment tracking and inventory management",
      "Implemented data storage and management features",
      "Built a user-friendly interface for administrative staff",
    ],
    tags: ["Desktop App", "Inventory Management", "UI/UX", "Database"],
  },
  {
    company: "ORMVAO",
    role: "Mobile Developer",
    period: "Internship",
    type: "Internship",
    color: "orange",
    emoji: "📱",
    bullets: [
      "Developed a mobile application for internal training management",
      "Designed intuitive UI and integrated backend APIs",
      "Implemented modules for sessions, participants and scheduling",
    ],
    tags: ["Flutter", "Mobile Development", "REST API", "UI Design"],
  },
  {
    company: "EST Khénifra",
    role: "Mobile Developer",
    period: "Academic Project",
    type: "Academic Project",
    color: "red",
    emoji: "☕",
    bullets: [
      "Developed a mobile app for managing the EST Khénifra cafeteria",
      "Implemented features for order management, products and payments",
      "Designed a simple and efficient mobile user interface",
    ],
    tags: ["Flutter", "Firebase", "Mobile App", "Payment Management"],
  },
];

const colorClasses: Record<string, { dot: string; badge: string; badgeDark: string; tag: string; tagDark: string }> = {
  blue: {
    dot: "bg-blue-600",
    badge: "bg-blue-50 text-blue-600",
    badgeDark: "bg-blue-900/40 text-blue-400",
    tag: "bg-blue-50 text-blue-600",
    tagDark: "bg-blue-900/30 text-blue-400",
  },
  purple: {
    dot: "bg-purple-600",
    badge: "bg-purple-50 text-purple-600",
    badgeDark: "bg-purple-900/40 text-purple-400",
    tag: "bg-purple-50 text-purple-600",
    tagDark: "bg-purple-900/30 text-purple-400",
  },
  indigo: {
    dot: "bg-indigo-600",
    badge: "bg-indigo-50 text-indigo-600",
    badgeDark: "bg-indigo-900/40 text-indigo-400",
    tag: "bg-indigo-50 text-indigo-600",
    tagDark: "bg-indigo-900/30 text-indigo-400",
  },
  green: {
    dot: "bg-green-600",
    badge: "bg-green-50 text-green-600",
    badgeDark: "bg-green-900/40 text-green-400",
    tag: "bg-green-50 text-green-600",
    tagDark: "bg-green-900/30 text-green-400",
  },
  orange: {
    dot: "bg-orange-500",
    badge: "bg-orange-50 text-orange-600",
    badgeDark: "bg-orange-900/40 text-orange-400",
    tag: "bg-orange-50 text-orange-600",
    tagDark: "bg-orange-900/30 text-orange-400",
  },
  red: {
    dot: "bg-red-600",
    badge: "bg-red-50 text-red-600",
    badgeDark: "bg-red-900/40 text-red-400",
    tag: "bg-red-50 text-red-600",
    tagDark: "bg-red-900/30 text-red-400",
  },
};

export function Experience({ darkMode }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`py-28 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto px-6">
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
            Experience
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Professional Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-6 top-4 bottom-4 w-0.5 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const c = colorClasses[exp.color];
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}-${i}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-8 pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 w-12 h-12 rounded-2xl ${c.dot} flex items-center justify-center text-xl shadow-lg`}>
                    {exp.emoji}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`flex-1 p-6 rounded-2xl border transition-all ${
                      darkMode
                        ? "bg-gray-800/60 border-gray-700 hover:border-gray-600 hover:shadow-xl"
                        : "bg-white border-gray-100 hover:border-blue-100 hover:shadow-lg shadow-sm"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                          {exp.role}
                        </h3>
                        <p className={`font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                          {exp.company}
                        </p>
                        {exp.period && (
                          <p className={`text-xs mt-0.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                            {exp.period}
                          </p>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        darkMode ? c.badgeDark : c.badge
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b) => (
                        <li key={b} className={`flex items-start gap-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                            darkMode ? c.tagDark : c.tag
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}