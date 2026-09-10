import { motion, useScroll, useTransform } from "motion/react";
import { Download, ArrowRight, Mail, ChevronDown, Sparkles, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile.png";

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -80]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "6+", label: "Projects", sublabel: "Shipped" },
    { value: "5+", label: "Internships", sublabel: "Completed" },
    { value: "M.Sc.", label: "Degree", sublabel: "Engineering" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #080c14 0%, #0d1526 40%, #080c14 100%)"
          : "linear-gradient(135deg, #f8faff 0%, #eef2ff 40%, #f5f7ff 100%)",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .hero-font { font-family: 'Syne', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          30% { transform: translate(2%, 2%); }
          50% { transform: translate(-1%, 1%); }
          70% { transform: translate(3%, -2%); }
          90% { transform: translate(-2%, 3%); }
        }

        .float-anim { animation: float 6s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #3b82f6, #818cf8, #60a5fa, #3b82f6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .grain-overlay::after {
          content: '';
          position: absolute;
          inset: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.03;
          animation: grain 8s steps(1) infinite;
          pointer-events: none;
        }

        .card-glass {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover::before { opacity: 1; }

        .photo-ring {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>

      {/* Grain overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Moroccan accent bar — top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg, #dc2626 0%, #2563eb 40%, #16a34a 100%)",
        }}
      />

      {/* Mesh gradient orbs */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute pointer-events-none"
      >
        <div
          className="absolute"
          style={{
            top: "-10%",
            left: "-5%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: darkMode
              ? "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-20%",
            right: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: darkMode
              ? "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ opacity: opacityParallax }}
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-28 body-font"
      >
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Content ── */}
          <div className="order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div
                className="card-glass flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: darkMode ? "rgba(37,99,235,0.1)" : "rgba(37,99,235,0.07)",
                  border: darkMode ? "1px solid rgba(59,130,246,0.25)" : "1px solid rgba(37,99,235,0.18)",
                  color: darkMode ? "#93c5fd" : "#1d4ed8",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for opportunities
              </div>

              <div
                className="card-glass flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                  border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                  color: darkMode ? "#94a3b8" : "#64748b",
                }}
              >
                <MapPin size={11} />
                Morocco
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="hero-font mb-4"
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: darkMode ? "#f1f5f9" : "#0f172a",
              }}
            >
              Rida{" "}
              <span className="shimmer-text">SATER</span>
            </motion.h1>

            {/* Role tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="h-px flex-1 max-w-[48px]"
                style={{ background: darkMode ? "rgba(59,130,246,0.4)" : "rgba(37,99,235,0.3)" }}
              />
              <p
                className="text-base font-semibold tracking-widest uppercase"
                style={{ color: darkMode ? "#60a5fa" : "#2563eb", letterSpacing: "0.15em" }}
              >
                Data Scientist & AI Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg leading-[1.8] mb-10 max-w-[520px]"
              style={{ color: darkMode ? "#94a3b8" : "#475569", fontWeight: 300 }}
            >
              Building intelligent systems and scalable digital solutions —
              fusing{" "}
              <span style={{ color: darkMode ? "#e2e8f0" : "#1e293b", fontWeight: 500 }}>
                Artificial Intelligence
              </span>
              ,{" "}
              <span style={{ color: darkMode ? "#e2e8f0" : "#1e293b", fontWeight: 500 }}>
                Machine Learning
              </span>{" "}
              and modern software engineering into meaningful products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-3 mb-4"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll("#projects")}
                className="btn-primary flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm shadow-xl transition-all"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  boxShadow: "0 8px 32px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                View Projects
                <ArrowRight size={15} />
              </motion.button>

              {/* Download CV */}
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://drive.google.com/file/d/1wjvJlSab7w5jHcGNsOYQZRn9B9rqC17h/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-medium text-sm transition-all"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
                  border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
                  color: darkMode ? "#e2e8f0" : "#334155",
                  boxShadow: darkMode ? "none" : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <Download size={15} />
                Download CV
              </motion.a>

              {/* Contact */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll("#contact")}
                className="card-glass flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-medium text-sm transition-all"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
                  border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
                  color: darkMode ? "#e2e8f0" : "#334155",
                  boxShadow: darkMode ? "none" : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <Mail size={15} />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-0"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div
                    className="px-6 py-4 rounded-2xl first:pl-0"
                    style={i === 0 ? { paddingLeft: 0 } : {}}
                  >
                    <div
                      className="hero-font text-3xl font-bold mb-0.5"
                      style={{ color: darkMode ? "#f1f5f9" : "#0f172a" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: darkMode ? "#60a5fa" : "#2563eb" }}
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: darkMode ? "#475569" : "#94a3b8" }}
                    >
                      {stat.sublabel}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      className="h-10 w-px mx-2"
                      style={{
                        background: darkMode
                          ? "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)"
                          : "linear-gradient(to bottom, transparent, rgba(0,0,0,0.1), transparent)",
                      }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative float-anim" style={{ width: 360, height: 400 }}>

              {/* Outer decorative card */}
              <div
                className="card-glass absolute inset-0 rounded-[2.5rem]"
                style={{
                  background: darkMode
                    ? "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(99,102,241,0.06) 100%)"
                    : "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(99,102,241,0.04) 100%)",
                  border: darkMode
                    ? "1px solid rgba(59,130,246,0.2)"
                    : "1px solid rgba(37,99,235,0.15)",
                  boxShadow: darkMode
                    ? "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "0 32px 80px rgba(37,99,235,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              />

              {/* Photo */}
              <div className="absolute inset-4 rounded-[2rem] overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Rida SATER"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: darkMode ? "brightness(0.92) contrast(1.05)" : "none" }}
                />
                {/* Photo overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: darkMode
                      ? "linear-gradient(to top, rgba(8,12,20,0.5) 0%, transparent 60%)"
                      : "linear-gradient(to top, rgba(15,23,42,0.15) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating skill chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="card-glass absolute -left-14 top-12 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"
                style={{
                  background: darkMode ? "rgba(15,23,42,0.9)" : "rgba(255,255,255,0.95)",
                  border: darkMode ? "1px solid rgba(59,130,246,0.25)" : "1px solid rgba(37,99,235,0.15)",
                  color: darkMode ? "#93c5fd" : "#1d4ed8",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                <span style={{ fontSize: 16 }}>🧠</span> AI / ML
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05, duration: 0.5 }}
                className="card-glass absolute -right-12 top-1/3 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"
                style={{
                  background: darkMode ? "rgba(15,23,42,0.9)" : "rgba(255,255,255,0.95)",
                  border: darkMode ? "1px solid rgba(59,130,246,0.25)" : "1px solid rgba(37,99,235,0.15)",
                  color: darkMode ? "#93c5fd" : "#1d4ed8",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                <span style={{ fontSize: 16 }}>⚡</span> Python
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="card-glass absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap"
                style={{
                  background: darkMode ? "rgba(15,23,42,0.9)" : "rgba(255,255,255,0.95)",
                  border: darkMode ? "1px solid rgba(59,130,246,0.25)" : "1px solid rgba(37,99,235,0.15)",
                  color: darkMode ? "#e2e8f0" : "#334155",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                <Sparkles size={12} style={{ color: "#f59e0b" }} />
                Master's in Data Science
              </motion.div>

              {/* Accent dot pattern */}
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 pointer-events-none opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle, ${darkMode ? "#3b82f6" : "#2563eb"} 1.5px, transparent 1.5px)`,
                  backgroundSize: "10px 10px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 body-font"
        style={{ color: darkMode ? "#475569" : "#94a3b8" }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: 10, letterSpacing: "0.15em" }}>Scroll</span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}