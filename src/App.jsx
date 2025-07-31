import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, ChevronDown, Brain, Code, Zap } from 'lucide-react';

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
      </div>
    </div>
  );
}

// 3D-style Desktop Setup using CSS
function DesktopSetup() {
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(Math.random() * 0.5 + 0.3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-full perspective-1000">
      <div className="transform-style-3d animate-float-slow">
        {/* Desk */}
        <div className="relative">
          <div className="w-80 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl transform rotateX-10 rotateY-5">
            
            {/* Monitor */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="relative">
                {/* Monitor screen */}
                <div 
                  className="w-40 h-28 bg-black rounded-lg border-4 border-gray-700 shadow-xl transform rotateX-5"
                  style={{ 
                    boxShadow: `0 0 ${glowIntensity * 20}px rgba(6, 182, 212, ${glowIntensity})`,
                    backgroundColor: `rgba(6, 182, 212, ${glowIntensity * 0.1})`
                  }}
                >
                  {/* Code lines effect */}
                  <div className="p-2 space-y-1">
                    <div className="h-1 bg-green-400 w-3/4 rounded opacity-80"></div>
                    <div className="h-1 bg-cyan-400 w-1/2 rounded opacity-60"></div>
                    <div className="h-1 bg-purple-400 w-2/3 rounded opacity-70"></div>
                    <div className="h-1 bg-pink-400 w-1/3 rounded opacity-50"></div>
                  </div>
                </div>
                
                {/* Monitor stand */}
                <div className="w-12 h-8 bg-gray-700 mx-auto mt-2 rounded-b-lg"></div>
                <div className="w-20 h-2 bg-gray-800 mx-auto mt-1 rounded-full"></div>
              </div>
            </div>
            
            {/* Keyboard */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg transform rotateX-20">
                <div className="grid grid-cols-12 gap-1 p-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-600 rounded-sm opacity-60"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mouse */}
            <div className="absolute bottom-8 right-8">
              <div className="w-6 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-lg transform rotateX-10">
                <div className="w-1 h-1 bg-red-400 rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
            </div>
            
            {/* PC Tower */}
            <div className="absolute -right-12 top-0 -translate-y-4">
              <div className="w-16 h-32 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-2xl transform rotateY-10">
                {/* PC lights */}
                <div 
                  className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-4 animate-pulse"
                  style={{ 
                    boxShadow: `0 0 ${glowIntensity * 10}px rgba(34, 197, 94, ${glowIntensity})`
                  }}
                ></div>
                <div 
                  className="w-2 h-2 bg-blue-400 rounded-full mx-auto mt-2 animate-pulse"
                  style={{ 
                    boxShadow: `0 0 ${glowIntensity * 10}px rgba(59, 130, 246, ${glowIntensity})`,
                    animationDelay: '0.5s'
                  }}
                ></div>
                <div 
                  className="w-2 h-2 bg-purple-400 rounded-full mx-auto mt-2 animate-pulse"
                  style={{ 
                    boxShadow: `0 0 ${glowIntensity * 10}px rgba(147, 51, 234, ${glowIntensity})`,
                    animationDelay: '1s'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Typing Animation Component
function TypingAnimation({ texts, className = "" }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [showNav, setShowNav] = useState(true);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Handle navbar visibility and active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const sections = ['home', 'about', 'projects', 'research', 'contact'];
      
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const currentScrollY = window.scrollY;
        
        // Only show nav when in the hero section
        setShowNav(currentScrollY < heroBottom - 100);
      }
      
      // Update active section based on scroll position
      const currentScrollY = window.scrollY + 200; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && currentScrollY >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Fake News Detector App",
      description: "Full-stack fake-news classification platform with fine-tuned RoBERTa transformer achieving 93% F1 score. Features containerized FastAPI microservice, React dashboard, and secure JWT authentication.",
      tags: ["Python", "FastAPI", "RoBERTa", "Hugging Face Transformers", "PyTorch", "Docker", "React", "JWT", "NGINX", "CI/CD"],
      github: "https://github.com/Saadcoder28/fake-news-detector",
      demo: "https://fake-news-detector-ofkd.vercel.app",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "AI Interviewer",
      description: "Web-based AI interviewer with real-time feedback using OpenAI API. Features resume-tailored questions and Firebase storage for session history.",
      tags: ["React", "Firebase", "OpenAI API", "Tailwind CSS", "Node.js"],
      github: "https://github.com/Saadcoder28/AI-Recruiter",
      demo: "https://ai-recruiter-one.vercel.app",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Neural Network Image Classifier",
      description: "CNN for CIFAR-10 classification achieving 90%+ accuracy with dropout and data augmentation techniques.",
      tags: ["Python", "TensorFlow", "Keras", "CNN", "TensorBoard"],
      github: "https://github.com/Saadcoder28/neural-networks",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Trip Planner",
      description: "AI-driven travel itinerary generator with Google Places integration and responsive UI design.",
      tags: ["React", "Firebase", "Gemini API", "Google Places", "Tailwind CSS"],
      github: "https://github.com/Saadcoder28/AI-trip-planner",
      demo: "https://ai-trip-planner-six-rust.vercel.app",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Stock Market Predictor",
      description: "Ensemble predictor using LSTM, GRU, ARIMA with sentiment analysis from news data for improved forecasting.",
      tags: ["Python", "LSTM", "GRU", "ARIMA", "NewsAPI", "Matplotlib"],
      github: "https://github.com/Saadcoder28/StockML",
      demo: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const experiences = [
    {
      title: "Machine Learning Research Assistant",
      company: "Lafayette College",
      period: "Oct 2024 – Present",
      location: "Easton, PA",
      description: "Investigating adaptive learning systems using reinforcement and supervised learning with Prof. Lopez. Built ML pipelines with TensorFlow and scikit-learn for dynamic classroom simulations.",
      achievements: [
        "Designed feedback loops with behavioral embeddings and Markov Decision Processes",
        "Applied Bayesian inference to model student learning curves",
        "Selected as an EXCEL Scholar for outstanding research work"
      ],
      technologies: ["TensorFlow", "scikit-learn", "Bayesian Inference", "MDP", "Python"]
    },
    {
      title: "AI Research Assistant",
      company: "FAST University",
      period: "May 2024 – Aug 2024",
      location: "Lahore, Pakistan",
      description: "Investigated generative AI models such as diffusion networks and transformer architectures for simulating quantum lattice systems.",
      achievements: [
        "Applied unsupervised and reinforcement learning for quantum state approximation",
        "Implemented variational autoencoders (VAEs) for high-dimensional data reduction",
        "Explored attention mechanisms for phase transition detection"
      ],
      technologies: ["VAEs", "Transformers", "Diffusion Networks", "PyTorch", "Quantum Computing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(5deg); }
        }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotateX-10 { transform: rotateX(10deg); }
        .rotateX-5 { transform: rotateX(5deg); }
        .rotateX-20 { transform: rotateX(20deg); }
        .rotateY-5 { transform: rotateY(5deg); }
        .rotateY-10 { transform: rotateY(10deg); }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
      `}</style>

      <AnimatedBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-4 transition-all duration-300 ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex items-center space-x-3 sm:space-x-6 bg-gray-900/80 backdrop-blur-md px-4 sm:px-6 py-3 rounded-full border border-gray-700">
          {['home', 'about', 'projects', 'research', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize hover:text-cyan-400 transition-colors text-sm sm:text-base ${
                activeSection === section ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-end justify-center pb-32">
          <DesktopSetup />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hi, I'm Saad Amin
            </h1>
            <div className="text-2xl text-gray-300 mb-6 h-8">
              <TypingAnimation 
                texts={[
                  "AI Researcher",
                  "Full-Stack Developer", 
                  "ML Engineer",
                  "Computer Science Student"
                ]}
                className="text-cyan-400"
              />
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Computer Science student at Virginia Tech passionate about machine learning, 
              quantum systems, and building innovative web applications that solve real-world problems.
            </p>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="text-center">
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
              I'm a Computer Science student at Virginia Tech with a passion for AI research and full-stack development. 
              Currently working as a Machine Learning Research Assistant at Lafayette College, where I investigate 
              adaptive learning systems using reinforcement learning.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              My research interests span from quantum system simulations using generative AI to educational technology 
              that adapts to individual learning patterns. I love combining theoretical knowledge with practical 
              applications to create meaningful solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="group text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105">
                <Brain className="mx-auto mb-3 text-cyan-400 group-hover:animate-pulse" size={40} />
                <h3 className="font-semibold mb-2 text-cyan-400">AI Research</h3>
                <p className="text-sm text-gray-400">Machine Learning & Quantum Systems</p>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <Code className="mx-auto mb-3 text-purple-400 group-hover:animate-pulse" size={40} />
                <h3 className="font-semibold mb-2 text-purple-400">Full-Stack Dev</h3>
                <p className="text-sm text-gray-400">React, Python, TensorFlow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/30 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-300 hover:bg-gray-600/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors group">
                    <Github size={16} className="group-hover:animate-pulse" />
                    <span>Code</span>
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition-colors group">
                      <ExternalLink size={16} className="group-hover:animate-pulse" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Research Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-white mb-1">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-purple-400 font-medium bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30 mt-4 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-medium mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
              <Zap size={24} className="animate-pulse" />
              <span className="font-bold text-lg">EXCEL Scholar</span>
            </div>
            <p className="text-gray-400 mt-4 text-lg">Selected for outstanding research work at Lafayette College</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I'm always interested in discussing new opportunities, research collaborations, 
            or just connecting with fellow developers and researchers. Let's build something amazing together!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:saad05@vt.edu" className="group flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Mail size={24} className="group-hover:animate-bounce" />
              <span className="font-medium">saad05@vt.edu</span>
            </a>
            <a href="https://linkedin.com/in/saad-amin-72403a31b" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Linkedin size={24} className="group-hover:animate-bounce" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/saadcoder28" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Github size={24} className="group-hover:animate-bounce" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-700/50 relative">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg">&copy; 2025 Saad Amin. Crafted with React & CSS magic ✨</p>
          <p className="text-sm mt-2 text-gray-600">Building the future, one line of code at a time</p>
        </div>
      </footer>
    </div>
  );
}