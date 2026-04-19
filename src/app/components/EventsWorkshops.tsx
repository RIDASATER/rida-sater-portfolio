import { motion } from "motion/react";
import { Calendar, MapPin, UserCircle } from "lucide-react";

interface EventsWorkshopsProps {
  darkMode: boolean;
}

interface EventWorkshopItem {
  name: string;
  organizer?: string;
  date: string;
  location?: string;
  type: string;
  description: string;
  topics: string[];
  takeaways: string[];
  role: string;
}

const events: EventWorkshopItem[] = [
  {
    name: "DeepTech Summit",
    organizer: "UM6P",
    date: "2025",
    location: "Benguerir, Morocco",
    type: "Conference",
    description: "Major international event focused on AI, deep tech, and innovation.",
    topics: [
      "Artificial Intelligence",
      "Deep Learning",
      "Innovation Ecosystems",
      "Startups and Technology",
    ],
    takeaways: [
      "Understanding real-world AI applications",
      "Exposure to innovation-driven ecosystems",
      "Importance of AI in industry transformation",
    ],
    role: "Attendee",
  },
  {
    name: "GITEX Africa",
    date: "2025",
    type: "International Tech Exhibition",
    description: "One of the largest technology and startup events in Africa.",
    topics: ["Digital Transformation", "Startups", "Emerging Technologies"],
    takeaways: [
      "Exposure to global tech trends",
      "Networking with industry professionals",
    ],
    role: "Attendee",
  },
  {
    name: "GITEX Africa",
    date: "2026",
    type: "International Tech Exhibition",
    description: "Continued participation in Africa’s leading tech event.",
    topics: ["AI and Innovation", "Technology Ecosystems"],
    takeaways: [
      "Strengthened understanding of tech evolution",
      "Expanded professional network",
    ],
    role: "Attendee",
  },
];

const accent = {
  dot: "bg-violet-600",
  badge: {
    light: "bg-violet-50 text-violet-700",
    dark: "bg-violet-900/40 text-violet-300",
  },
};

export function EventsWorkshops({ darkMode }: EventsWorkshopsProps) {
  return (
    <section
      id="events-workshops"
      className={`py-28 ${darkMode ? "bg-gray-950" : "bg-gray-50/60"}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              darkMode ? "bg-violet-900/40 text-violet-300" : "bg-violet-50 text-violet-700"
            }`}
          >
            Events & Workshops
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Conferences & Learning
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-600 rounded-full mx-auto mb-4" />
          <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Selected forums that shaped perspective on AI, innovation, and the global technology
            landscape.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className={`absolute left-6 top-4 bottom-4 w-0.5 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
          />

          <div className="space-y-10">
            {events.map((ev, i) => (
              <motion.div
                key={`${ev.name}-${ev.date}-${i}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative flex gap-8 pl-16"
              >
                <div
                  className={`absolute left-0 w-12 h-12 rounded-2xl ${accent.dot} flex items-center justify-center shadow-lg text-white`}
                >
                  <Calendar className="w-5 h-5" />
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className={`flex-1 p-6 rounded-2xl border transition-all ${
                    darkMode
                      ? "bg-gray-800/60 border-gray-700 hover:border-gray-600"
                      : "bg-white border-gray-100 shadow-sm hover:border-violet-100 hover:shadow-lg"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {ev.name}
                      </h3>
                      {ev.organizer ? (
                        <p className={`text-sm font-semibold ${darkMode ? "text-violet-300" : "text-violet-700"}`}>
                          {ev.organizer}
                        </p>
                      ) : null}
                      <div
                        className={`flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs ${
                          darkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {ev.date}
                        </span>
                        {ev.location ? (
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {ev.location}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                        darkMode ? accent.badge.dark : accent.badge.light
                      }`}
                    >
                      {ev.type}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {ev.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                          darkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        Key topics
                      </p>
                      <ul className="space-y-1.5">
                        {ev.topics.map((t) => (
                          <li
                            key={t}
                            className={`flex items-start gap-2 text-sm ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accent.dot}`} />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                          darkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        Key takeaways
                      </p>
                      <ul className="space-y-1.5">
                        {ev.takeaways.map((t) => (
                          <li
                            key={t}
                            className={`flex items-start gap-2 text-sm ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accent.dot}`} />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-2 pt-3 border-t text-sm ${
                      darkMode ? "border-gray-700 text-gray-400" : "border-gray-100 text-gray-600"
                    }`}
                  >
                    <UserCircle className="w-4 h-4 text-violet-500 shrink-0" />
                    <span>
                      <span className="font-semibold">Role:</span> {ev.role}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
