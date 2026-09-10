import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Award, ExternalLink, Hash } from "lucide-react";

interface CertificationsProps {
  darkMode: boolean;
}

interface CertificationItem {
  title: string;
  organization: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
  /** Used for optional filter chips */
  filterTag: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Databases and SQL for Data Science with Python",
    organization: "IBM",
    issued: "Nov 2025",
    credentialId: "7695OZTTDOTM",
    description:
      "Focused on relational databases, SQL querying, and integration with Python for data analysis.",
    skills: ["MySQL", "SQL", "Database Management", "Data Querying", "Python Integration"],
    filterTag: "IBM",
  },
  {
    title: "Mathematics for Data Science, Introduction to Jupyter, Introduction to Data and Data Science",
    organization: "365 Data Science",
    issued: "2024",
    description: "Completed focused training in the mathematical and practical foundations of data science.",
    skills: ["Mathematics for Data Science", "Jupyter", "Data Science Fundamentals"],
    filterTag: "365 Data Science",
  },
];

export function Certifications({ darkMode }: CertificationsProps) {
  const filterOptions = useMemo(() => {
    const tags = Array.from(new Set(certifications.map((c) => c.filterTag))).sort((a, b) =>
      a.localeCompare(b)
    );
    return ["All", ...tags] as const;
  }, []);

  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(() => {
    if (filter === "All") return certifications;
    return certifications.filter((c) => c.filterTag === filter);
  }, [filter]);

  return (
    <section
      id="certifications"
      className={`py-28 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
            }`}
          >
            Certifications
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Professional Credentials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
          <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Formal training and verified credentials in data science, analytics, and engineering
            tools — summarized for impact and clarity.
          </p>
        </motion.div>

        {/* Optional filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterOptions.map((tag) => {
            const active = filter === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  active
                    ? darkMode
                      ? "bg-blue-600 border-blue-500 text-white"
                      : "bg-blue-600 border-blue-600 text-white"
                    : darkMode
                      ? "border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-200"
                      : "border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-700"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((item, i) => (
            <motion.article
              key={`${item.title}-${item.organization}-${item.issued}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className={`rounded-2xl border p-6 flex flex-col h-full transition-all ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                  : "bg-gray-50/80 border-gray-100 hover:border-blue-100 shadow-sm"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`p-2 rounded-xl shrink-0 ${
                    darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <Award className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-bold text-base leading-snug ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={`text-sm font-semibold mt-0.5 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                    {item.organization}
                  </p>
                </div>
              </div>

              <p className={`text-xs mb-2 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                <span className="font-medium">Issued:</span> {item.issued}
                {item.expires ? (
                  <>
                    {" "}
                    · <span className="font-medium">Expires:</span> {item.expires}
                  </>
                ) : null}
              </p>

              {item.credentialId ? (
                <p
                  className={`flex items-center gap-1.5 text-xs font-mono mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Hash className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  {item.credentialId}
                </p>
              ) : null}

              <p className={`text-sm leading-relaxed mb-4 flex-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {item.description}
              </p>

              {item.skills.length > 0 ? (
                <>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    Skills acquired
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {item.skills.map((s) => (
                      <li
                        key={s}
                        className={`flex items-start gap-2 text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {item.certificateUrl ? (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold mt-auto pt-2 ${
                    darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  View credential
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
