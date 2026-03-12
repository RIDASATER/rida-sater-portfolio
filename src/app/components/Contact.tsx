import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, CheckCircle } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzMAZoPqN8b_Zuco4UVljS_-Fb-GSno3DBkgW35yFVr3TpOskAdyU7lkiExJ3j5_dkxqA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );
      
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-gray-750"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white"
  }`;

  return (
    <section
      id="contact"
      className={`py-28 ${darkMode ? "bg-gray-950" : "bg-gray-50/60"}`}
    >
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
            Contact
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Let's Work Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
          <p className={`max-w-lg mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Open to exciting opportunities in AI, Machine Learning and Software Engineering. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Get in Touch
            </h3>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "Email", value: "saterriida@gmail.com", href: "mailto:saterriida@gmail.com" },
                { icon: Phone, label: "Phone", value: "+212 655-120966", href: "tel:+212655120966" },
                { icon: MapPin, label: "Location", value: "Morocco 🇲🇦", href: null },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    darkMode
                      ? "border-gray-800 bg-gray-800/50 hover:border-gray-700"
                      : "border-gray-100 bg-white hover:border-blue-100 shadow-sm"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
                  }`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className={`text-sm font-medium hover:text-blue-500 transition-colors ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={`text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <h4 className={`text-sm font-semibold uppercase tracking-wide mb-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              Connect
            </h4>
            
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/rida-sater", color: "bg-blue-600" },
                { icon: Github, label: "GitHub", href: "https://github.com/ridasater", color: darkMode ? "bg-gray-700" : "bg-gray-800" },
                { icon: Download, label: "Download CV", href: "https://drive.google.com/file/d/1wjvJlSab7w5jHcGNsOYQZRn9B9rqC17h/view?usp=sharing", color: "bg-green-600" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium shadow-sm transition-all ${link.color}`}
                >
                  <link.icon size={16} />
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Moroccan-inspired decorative */}
            <div className="mt-10 p-5 rounded-2xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50/50 to-transparent"
              style={darkMode ? { borderColor: "rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.04)" } : {}}>
              <p className={`text-sm italic ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                "Innovation is the bridge between imagination and impact." 🇲🇦
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={`p-8 rounded-2xl border ${
              darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100 shadow-sm"
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Send a Message
              </h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-3 text-green-500"
                >
                  <CheckCircle size={48} />
                  <p className="font-semibold text-lg">Message sent successfully!</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project / Opportunity / Collaboration"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 shadow-lg shadow-blue-200/50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
