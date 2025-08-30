'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Brain, Database, Bot } from 'lucide-react'

// ✅ FIXED: Added proper TypeScript interface
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  github: string
  live: string
  color: string
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // ✅ FIXED: Added proper typing to projects array
  const projects: Project[] = [
    {
      id: 1,
      title: "GenAI Medical Advisor",
      description: "Developed an AI-powered assistant using RAG to answer medical queries with 90%+ accuracy. Integrated LangChain with ChromaDB and HuggingFace for efficient document retrieval. Achieved sub-3s response time using Groq API with a scalable FastAPI–Streamlit architecture.",
      image: "/api/placeholder/600/400",
      tags: ["FastAPI", "Streamlit", "LangChain", "ChromaDB", "HuggingFace", "Groq"],
      category: "AI/ML",
      icon: Brain,
      github: "https://github.com/ThodemDinesh/genai-medical-advisor",
      live: "https://genai-medical-advisor.vercel.app",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Habit Tracker Web Application",
      description: "Built a full-stack habit tracker with JWT-based auth and MongoDB integration. Designed a responsive React dashboard with real-time analytics using Context API. Implemented RESTful APIs and modern UX features like theme toggle and route protection.",
      image: "/api/placeholder/600/400",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Context API"],
      category: "Full Stack",
      icon: Database,
      github: "https://github.com/ThodemDinesh/habittracker_complete_model",
      live: "https://habit-tracker-dinesh.vercel.app",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Smart layout logic for any number of projects (future-proof)
  const getProjectClassName = (index: number, totalProjects: number) => {
    const isLastProject = index === totalProjects - 1
    const isOddTotal = totalProjects % 2 === 1
    
    // Center the last project only if total count is odd
    if (isLastProject && isOddTotal) {
      return 'lg:col-span-2 lg:max-w-2xl lg:mx-auto'
    }
    
    return ''
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={projectVariants}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-8"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={projectVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my technical expertise in AI/ML and full-stack development
          </motion.p>
        </motion.div>

        {/* Dynamic Grid Layout - Future Proof */}
        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon
            
            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-card rounded-2xl overflow-hidden group cursor-pointer ${
                  getProjectClassName(index, projects.length)
                }`}
              >
                {/* Project Image/Preview */}
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent size={64} className="text-white" />
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Github size={24} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLink size={24} className="text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-lg border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Highlight Section */}
        <motion.div
          variants={projectVariants}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <Bot size={24} className="text-green-400" />
                </div>
                <p className="text-green-400 font-bold">450+</p>
                <p className="text-gray-400 text-sm">LeetCode Problems Solved</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-2">
                  <Brain size={24} className="text-purple-400" />
                </div>
                <p className="text-purple-400 font-bold">90%+</p>
                <p className="text-gray-400 text-sm">AI Model Accuracy</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-2">
                  <Database size={24} className="text-blue-400" />
                </div>
                <p className="text-blue-400 font-bold">8.91</p>
                <p className="text-gray-400 text-sm">CGPA at VIT Vellore</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
