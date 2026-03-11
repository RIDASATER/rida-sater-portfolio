import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, X, CheckCircle, Layers, Zap, Target, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  color: string;
  emoji: string;
  details: {
    overview: string;
    features: string[];
    architecture: string[];
    challenges: string[];
    outcome: string;
  };
}

const projects: Project[] = [
  {
    title: "NLP Pipeline for OCR Text Extraction",
    description:
      "AI pipeline extracting text from scanned documents using OCR, performing NLP preprocessing and generating embeddings for document classification.",
    image:
      "https://images.unsplash.com/photo-1765445773776-d3b7ddd1b19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOTFAlMjB0ZXh0JTIwZXh0cmFjdGlvbiUyME9DUiUyMGRvY3VtZW50JTIwQUl8ZW58MXx8fHwxNzczMjQ5ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "OpenCV", "Tesseract OCR", "NLTK", "PyTorch"],
    category: "NLP / Computer Vision",
    color: "blue",
    emoji: "📄",
    details: {
      overview:
        "A complete end-to-end AI pipeline designed to extract and process text from scanned documents. The system uses computer vision for image enhancement, OCR for text recognition, NLP for preprocessing, and deep learning embeddings for automatic document classification.",
      features: [
        "Automatic image preprocessing (denoising, binarization, deskewing) with OpenCV",
        "High-accuracy text extraction from scanned documents using Tesseract OCR",
        "Advanced NLP pipeline: tokenization, stop-word removal, lemmatization with NLTK",
        "Document embedding generation using PyTorch transformer models",
        "Multi-class document classification with confidence scoring",
        "Batch processing support for large document collections",
      ],
      architecture: [
        "Input Layer: Image acquisition and format normalization",
        "Preprocessing Module: OpenCV-based image enhancement pipeline",
        "OCR Engine: Tesseract integration with custom page segmentation modes",
        "NLP Processor: NLTK tokenizer + lemmatizer + custom stopword filter",
        "Embedding Model: Fine-tuned sentence transformer (PyTorch)",
        "Classifier: Multi-class SVM with confidence calibration",
      ],
      challenges: [
        "Handling diverse document formats and degraded scan quality",
        "Optimizing OCR accuracy for Arabic/French mixed documents",
        "Building efficient batch processing for large document volumes",
      ],
      outcome:
        "Successfully deployed pipeline achieving 92% text extraction accuracy and 88% document classification precision on the test dataset, significantly reducing manual document sorting time.",
    },
  },
  {
    title: "Sentiment Analysis System",
    description:
      "Machine learning system analyzing customer reviews using Natural Language Processing and deep learning models deployed via REST API.",
    image:
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW50aW1lbnQlMjBhbmFseXNpcyUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGRhdGF8ZW58MXx8fHwxNzczMjQ5ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Scikit-learn", "NLP", "REST API", "Deep Learning"],
    category: "Machine Learning / NLP",
    color: "purple",
    emoji: "💬",
    details: {
      overview:
        "An intelligent sentiment analysis system that automatically classifies customer reviews and textual feedback as positive, negative, or neutral. The system combines classical ML algorithms with deep learning models and is deployed as a scalable REST API for real-time inference.",
      features: [
        "Multi-label sentiment classification (positive, negative, neutral, mixed)",
        "Text preprocessing pipeline: cleaning, vectorization with TF-IDF & word embeddings",
        "Ensemble model combining Logistic Regression, SVM and LSTM neural network",
        "Real-time prediction via FastAPI REST endpoint with JSON response",
        "Confidence score and emotion intensity output",
        "Batch processing endpoint for large-scale review analysis",
      ],
      architecture: [
        "Data Ingestion: Support for CSV, JSON and direct API input",
        "Preprocessing: Text normalization, tokenization and feature extraction",
        "Model Ensemble: Voting classifier combining classical ML + deep learning",
        "LSTM Model: Bidirectional LSTM with attention mechanism",
        "API Layer: FastAPI with Pydantic validation and async support",
        "Deployment: Dockerized service with auto-scaling",
      ],
      challenges: [
        "Handling sarcasm, irony and context-dependent sentiment expressions",
        "Balancing model accuracy with low-latency API response requirements",
        "Managing class imbalance in training data across sentiment categories",
      ],
      outcome:
        "Achieved 91% accuracy on sentiment classification benchmark, deployed as production API handling 500+ requests/minute with sub-100ms response time.",
    },
  },
  {
    title: "Driver Drowsiness Detection",
    description:
      "Real-time deep learning system detecting driver fatigue using computer vision and CNN architecture for safety-critical applications.",
    image:
      "https://images.unsplash.com/photo-1655272427565-c64fd73298df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXIlMjBkcm93c2luZXNzJTIwZGV0ZWN0aW9uJTIwY29tcHV0ZXIlMjB2aXNpb258ZW58MXx8fHwxNzczMjQ5ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Real-time"],
    category: "Deep Learning / CV",
    color: "green",
    emoji: "👁️",
    details: {
      overview:
        "A real-time safety system that monitors driver alertness through webcam video feed. Using convolutional neural networks and facial landmark detection, the system identifies signs of fatigue (eye closure, yawning, head nodding) and triggers instant audio-visual alerts to prevent road accidents.",
      features: [
        "Real-time facial landmark detection at 30+ FPS using OpenCV",
        "Eye Aspect Ratio (EAR) algorithm for precise blink and closure detection",
        "CNN-based drowsiness classifier trained on facial expression datasets",
        "Multi-indicator fatigue analysis: eyes, mouth (yawning), head position",
        "Adjustable alert sensitivity thresholds for different driving conditions",
        "Alarm system with audio alert and visual dashboard notification",
      ],
      architecture: [
        "Video Capture: OpenCV real-time frame acquisition from webcam/camera",
        "Face Detection: Haar Cascade + dlib 68-point facial landmark predictor",
        "Feature Extraction: EAR (Eye Aspect Ratio) + MAR (Mouth Aspect Ratio) computation",
        "CNN Classifier: Custom TensorFlow model (MobileNetV2 backbone fine-tuned)",
        "Decision Logic: Multi-frame temporal analysis with configurable thresholds",
        "Alert Engine: pygame audio system + on-screen visual warning overlay",
      ],
      challenges: [
        "Maintaining detection accuracy across varying lighting and camera angles",
        "Reducing false positives while keeping real-time processing performance",
        "Adapting the model to individual facial differences without retraining",
      ],
      outcome:
        "Achieved 95% drowsiness detection accuracy with under 200ms alert latency, validated across multiple lighting conditions and face orientations for reliable safety-critical deployment.",
    },
  },
  {
    title: "Chatbot d'Accompagnement Étudiant",
    description:
      "Intelligent conversational assistant guiding students throughout their academic journey — answering questions, recommending resources, tracking progress and providing personalized study support.",
    image:
      "https://images.unsplash.com/photo-1751448582395-27fc57293f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMGNvbnZlcnNhdGlvbnxlbnwxfHx8fDE3NzMyNTE2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "NLP", "HuggingFace", "FastAPI", "React.js", "RAG"],
    category: "AI / NLP / Education",
    color: "orange",
    emoji: "🎓",
    details: {
      overview:
        "An AI-powered academic companion chatbot designed to support students throughout their educational journey. The system uses Retrieval-Augmented Generation (RAG) to provide contextual answers about courses, schedules and academic resources, while offering personalized study recommendations and progress tracking through a modern web interface.",
      features: [
        "Conversational AI with context memory for multi-turn academic dialogues",
        "RAG architecture: retrieval from academic knowledge base + LLM generation",
        "Personalized study plan recommendations based on student profile and goals",
        "Course information retrieval: schedules, syllabi, deadlines and requirements",
        "Resource recommendation engine linking to relevant documents and materials",
        "Progress tracking dashboard with study analytics and performance insights",
        "Multi-language support (French, Arabic, English) for Moroccan students",
        "Integration with university information systems via REST API",
      ],
      architecture: [
        "Frontend: React.js chat interface with real-time WebSocket communication",
        "Backend: FastAPI Python server with async request handling",
        "LLM Core: Fine-tuned language model (HuggingFace Transformers)",
        "RAG Pipeline: FAISS vector database + semantic search for knowledge retrieval",
        "Knowledge Base: Structured academic content (PDFs, FAQs, course catalogs)",
        "User Management: Session handling and student profile persistence",
        "Embedding Model: Multilingual sentence transformers for cross-language retrieval",
      ],
      challenges: [
        "Building a multilingual knowledge base covering French, Arabic and English academic content",
        "Ensuring accurate retrieval from heterogeneous academic document formats",
        "Designing conversational flows that feel natural for student interactions",
        "Maintaining response relevance while limiting hallucination in LLM outputs",
      ],
      outcome:
        "Deployed chatbot assisting students with instant, accurate academic guidance — reducing advisor response burden by 60% and improving student satisfaction with 24/7 AI-powered academic support.",
    },
  },
];

const colorMap: Record<string, { badge: string; badgeDark: string; tag: string; tagDark: string; gradient: string; accent: string; accentDark: string }> = {
  blue: {
    badge: "bg-blue-50 text-blue-600",
    badgeDark: "bg-blue-900/40 text-blue-400",
    tag: "bg-blue-50/80 text-blue-600",
    tagDark: "bg-blue-900/30 text-blue-400",
    gradient: "from-blue-600/80 to-blue-800/80",
    accent: "text-blue-600",
    accentDark: "text-blue-400",
  },
  purple: {
    badge: "bg-purple-50 text-purple-600",
    badgeDark: "bg-purple-900/40 text-purple-400",
    tag: "bg-purple-50/80 text-purple-600",
    tagDark: "bg-purple-900/30 text-purple-400",
    gradient: "from-purple-600/80 to-purple-900/80",
    accent: "text-purple-600",
    accentDark: "text-purple-400",
  },
  green: {
    badge: "bg-green-50 text-green-600",
    badgeDark: "bg-green-900/40 text-green-400",
    tag: "bg-green-50/80 text-green-600",
    tagDark: "bg-green-900/30 text-green-400",
    gradient: "from-green-600/80 to-green-900/80",
    accent: "text-green-600",
    accentDark: "text-green-400",
  },
  orange: {
    badge: "bg-orange-50 text-orange-600",
    badgeDark: "bg-orange-900/40 text-orange-400",
    tag: "bg-orange-50/80 text-orange-600",
    tagDark: "bg-orange-900/30 text-orange-400",
    gradient: "from-orange-500/80 to-orange-800/80",
    accent: "text-orange-600",
    accentDark: "text-orange-400",
  },
};

function ProjectModal({
  project,
  darkMode,
  onClose,
}: {
  project: Project;
  darkMode: boolean;
  onClose: () => void;
}) {
  const c = colorMap[project.color];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
          darkMode ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"
        }`}
      >
        {/* Header image */}
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient}`} />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{project.emoji}</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                {project.category}
              </span>
            </div>
            <h2 className="text-white text-2xl font-bold leading-tight">{project.title}</h2>
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  darkMode ? c.badgeDark : c.badge
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div>
            <div className={`flex items-center gap-2 mb-3 font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              <Target size={18} className={darkMode ? c.accentDark : c.accent} />
              Overview
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {project.details.overview}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Features */}
            <div>
              <div className={`flex items-center gap-2 mb-3 font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                <Zap size={18} className={darkMode ? c.accentDark : c.accent} />
                Key Features
              </div>
              <ul className="space-y-2">
                {project.details.features.map((f, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${darkMode ? c.accentDark : c.accent}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div>
              <div className={`flex items-center gap-2 mb-3 font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                <Layers size={18} className={darkMode ? c.accentDark : c.accent} />
                Architecture
              </div>
              <ul className="space-y-2">
                {project.details.architecture.map((a, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${darkMode ? c.accentDark : c.accent}`} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges */}
          <div>
            <div className={`flex items-center gap-2 mb-3 font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              <Code2 size={18} className={darkMode ? c.accentDark : c.accent} />
              Technical Challenges
            </div>
            <ul className="space-y-2">
              {project.details.challenges.map((ch, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    project.color === "blue" ? "bg-blue-500"
                    : project.color === "purple" ? "bg-purple-500"
                    : project.color === "green" ? "bg-green-500"
                    : "bg-orange-500"
                  }`} />
                  {ch}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className={`p-4 rounded-2xl border ${
            darkMode
              ? "bg-gray-800/60 border-gray-700"
              : "bg-gray-50 border-gray-100"
          }`}>
            <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${darkMode ? c.accentDark : c.accent}`}>
              🏆 Outcome
            </p>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              {project.details.outcome}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects({ darkMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
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
            Projects
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Featured Work
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
          <p className={`max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Intelligent systems and data-driven applications built with cutting-edge AI technologies.
            <span className={`block text-xs mt-1 ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
              Click any project to view full details
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => {
            const c = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className={`group rounded-2xl overflow-hidden border transition-all cursor-pointer ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-950/40"
                    : "bg-white border-gray-100 hover:border-blue-100 hover:shadow-xl shadow-sm"
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                    <div className="text-white flex flex-col items-center gap-2">
                      <Code2 size={26} />
                      <span className="text-sm font-semibold">View Details</span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm ${
                    darkMode ? "bg-gray-900/80 text-gray-200" : "bg-white/90 text-gray-700"
                  }`}>
                    {project.emoji} {project.category}
                  </div>
                  {/* Click hint */}
                  <div className={`absolute bottom-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                    darkMode ? "bg-white/20" : "bg-white/80"
                  }`}>
                    <ChevronRight size={14} className={darkMode ? "text-white" : "text-gray-700"} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`font-bold text-sm mb-2 leading-snug ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                          darkMode ? c.tagDark : c.tag
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            darkMode={darkMode}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
