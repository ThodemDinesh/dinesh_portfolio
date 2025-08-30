
// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { useState, useEffect } from 'react'
// import { 
//   SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiPython, SiCplusplus, 
//   SiNodedotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiFigma, SiDocker 
// } from 'react-icons/si'
// import { FaJava, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
// import React from 'react'

// // 🎯 ADD THESE TYPE DEFINITIONS
// interface Project {
//   name: string
//   url: string
//   description: string
//   image: string
// }

// interface Skill {
//   icon: React.ComponentType<any>
//   name: string
//   color: string
//   projects?: Project[]
// }

// const Skills: React.FC = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
//   const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
//   const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
//   const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   const allSkills: Skill[] = [
//     { 
//       icon: SiJavascript, 
//       name: "JavaScript", 
//       color: "#F7DF1E",
//       projects: [
//         { name: "E-commerce Website", url: "#", description: "Full-stack online store with cart functionality", image: "🛒" },
//         { name: "Weather App", url: "#", description: "Real-time weather data with interactive maps", image: "🌤️" },
//         { name: "Task Manager", url: "#", description: "Productivity app with drag-and-drop features", image: "📋" }
//       ]
//     },
//     { 
//       icon: SiTypescript, 
//       name: "TypeScript", 
//       color: "#3178C6",
//       projects: [
//         { name: "Portfolio Website", url: "#", description: "This very portfolio built with Next.js", image: "💼" },
//         { name: "API Dashboard", url: "#", description: "Analytics dashboard for REST APIs", image: "📊" }
//       ]
//     },
//     { 
//       icon: SiReact, 
//       name: "React", 
//       color: "#61DAFB",
//       projects: [
//         { name: "Social Media App", url: "#", description: "Instagram-like social platform", image: "📱" },
//         { name: "Music Player", url: "#", description: "Spotify-inspired music streaming app", image: "🎵" },
//         { name: "Chat Application", url: "#", description: "Real-time messaging with Socket.io", image: "💬" }
//       ]
//     },
//     { 
//       icon: SiNextdotjs, 
//       name: "Next.js", 
//       color: "#000000",
//       projects: [
//         { name: "Blog Platform", url: "#", description: "CMS-powered blog with SEO optimization", image: "📝" },
//         { name: "Company Website", url: "#", description: "Corporate site with SSR and optimization", image: "🏢" }
//       ]
//     },
//     { 
//       icon: SiPython, 
//       name: "Python", 
//       color: "#3776AB",
//       projects: [
//         { name: "Data Visualization Tool", url: "#", description: "Interactive charts and graphs", image: "📈" },
//         { name: "Web Scraper", url: "#", description: "Automated data collection system", image: "🕷️" },
//         { name: "Machine Learning Model", url: "#", description: "Predictive analytics for sales", image: "🤖" }
//       ]
//     },
//     { 
//       icon: SiCplusplus, 
//       name: "C++", 
//       color: "#00599C",
//       projects: [
//         { name: "Game Engine", url: "#", description: "2D game engine with physics", image: "🎮" },
//         { name: "Algorithm Visualizer", url: "#", description: "Interactive sorting algorithms", image: "🔢" }
//       ]
//     },
//     { 
//       icon: FaJava, 
//       name: "Java", 
//       color: "#ED8B00",
//       projects: [
//         { name: "Banking System", url: "#", description: "Secure transaction management", image: "🏦" },
//         { name: "Student Portal", url: "#", description: "University management system", image: "🎓" }
//       ]
//     },
//     { 
//       icon: SiNodedotjs, 
//       name: "Node.js", 
//       color: "#339933",
//       projects: [
//         { name: "REST API", url: "#", description: "Scalable backend for mobile app", image: "🔌" },
//         { name: "Real-time Server", url: "#", description: "WebSocket server for live updates", image: "⚡" }
//       ]
//     },
//     { 
//       icon: SiMongodb, 
//       name: "MongoDB", 
//       color: "#47A248",
//       projects: [
//         { name: "User Management System", url: "#", description: "Scalable user authentication", image: "👥" },
//         { name: "Analytics Database", url: "#", description: "Big data storage solution", image: "📊" }
//       ]
//     },
//     { 
//       icon: SiTailwindcss, 
//       name: "Tailwind", 
//       color: "#06B6D4",
//       projects: [
//         { name: "Component Library", url: "#", description: "Reusable UI components", image: "🧩" },
//         { name: "Landing Pages", url: "#", description: "Multiple responsive landing pages", image: "🎨" }
//       ]
//     },
//     { 
//       icon: SiGit, 
//       name: "Git", 
//       color: "#F05032",
//       projects: [
//         { name: "Open Source Contributions", url: "#", description: "Contributions to various projects", image: "🌐" },
//         { name: "Team Collaboration", url: "#", description: "Version control for team projects", image: "👨‍💻" }
//       ]
//     },
//   ]

//   return (
//     <section id="skills" className="section-padding bg-gray-900">
//       <div className="container-width">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="section-title">
//             My <span className="gradient-text">Tech Stack</span>
//           </h2>
//           <p className="section-subtitle">
//             Click on any skill to see related projects
//           </p>

//           <div className="glass-card p-8 overflow-hidden relative">
//             <motion.div
//               className="flex gap-8"
//               animate={{ x: [0, -2000] }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 30,
//                   ease: "linear",
//                 },
//               }}
//               style={{ width: 'max-content' }}
//             >
//               {[...allSkills, ...allSkills, ...allSkills].map((skill: Skill, index: number) => {
//                 const Icon = skill.icon
//                 return (
//                   <motion.div
//                     key={`${skill.name}-${index}`}
//                     className="flex flex-col items-center gap-3 min-w-[100px] flex-shrink-0 relative cursor-pointer"
//                     whileHover={{ scale: 1.2, y: -10 }}
//                     whileTap={{ scale: 1.1 }}
//                     animate={{
//                       x: hoveredSkill?.name === skill.name ? Math.sin(mousePos.x * 0.01) * 5 : 0,
//                       y: hoveredSkill?.name === skill.name ? Math.cos(mousePos.y * 0.01) * 5 : 0,
//                     }}
//                     onHoverStart={() => setHoveredSkill(skill)}
//                     onHoverEnd={() => setHoveredSkill(null)}
//                     onClick={() => setSelectedSkill(skill)}
//                   >
//                     <div 
//                       className="w-16 h-16 flex items-center justify-center rounded-xl shadow-lg relative group"
//                       style={{ backgroundColor: skill.color }}
//                     >
//                       <Icon size={32} color={skill.color === "#000000" ? "#ffffff" : "#000000"} />
                      
//                       {/* Click indicator */}
//                       <div className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-50 transition-opacity">
//                         <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
//                       </div>
//                     </div>
                    
//                     <span className="text-white font-medium text-sm text-center">
//                       {skill.name}
//                     </span>
                    
//                     {/* Project count badge */}
//                     <div className="absolute -top-2 -right-1 w-5 h-5 bg-cyan-500 text-black rounded-full flex items-center justify-center text-xs font-bold">
//                       {skill.projects?.length || 0}
//                     </div>

//                     {/* Particle effects around hovered skill */}
//                     {hoveredSkill?.name === skill.name && (
//                       <div className="absolute inset-0 pointer-events-none">
//                         {Array.from({ length: 8 }).map((_, i) => (
//                           <motion.div
//                             key={i}
//                             className="absolute w-1 h-1 rounded-full"
//                             style={{ backgroundColor: skill.color }}
//                             animate={{
//                               x: [0, Math.random() * 60 - 30],
//                               y: [0, Math.random() * 60 - 30],
//                               opacity: [1, 0],
//                               scale: [1, 0],
//                             }}
//                             transition={{
//                               duration: 1.5,
//                               repeat: Infinity,
//                               delay: i * 0.2,
//                               ease: "easeOut"
//                             }}
//                           />
//                         ))}
//                       </div>
//                     )}

//                     {/* Magnetic glow effect */}
//                     {hoveredSkill?.name === skill.name && (
//                       <motion.div
//                         className="absolute inset-0 rounded-xl opacity-30"
//                         style={{ 
//                           backgroundColor: skill.color,
//                           filter: 'blur(10px)',
//                         }}
//                         animate={{
//                           scale: [1, 1.5, 1],
//                           opacity: [0.3, 0.6, 0.3],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                       />
//                     )}
//                   </motion.div>
//                 )
//               })}
//             </motion.div>
//           </div>

//           {/* Projects Modal */}
//           <AnimatePresence>
//             {selectedSkill && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//                 onClick={() => setSelectedSkill(null)}
//               >
//                 <motion.div
//                   initial={{ scale: 0.8, y: 50 }}
//                   animate={{ scale: 1, y: 0 }}
//                   exit={{ scale: 0.8, y: 50 }}
//                   className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-cyan-500/30"
//                   onClick={(e: React.MouseEvent) => e.stopPropagation()}
//                 >
//                   {/* Modal Header */}
//                   <div className="p-6 border-b border-gray-700 flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div 
//                         className="w-12 h-12 rounded-xl flex items-center justify-center"
//                         style={{ backgroundColor: selectedSkill.color }}
//                       >
//                         <selectedSkill.icon 
//                           size={24} 
//                           color={selectedSkill.color === "#000000" ? "#ffffff" : "#000000"} 
//                         />
//                       </div>
//                       <div>
//                         <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
//                         <p className="text-gray-400">
//                           {selectedSkill.projects?.length || 0} project{selectedSkill.projects?.length !== 1 ? 's' : ''}
//                         </p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => setSelectedSkill(null)}
//                       className="p-2 text-gray-400 hover:text-white transition-colors"
//                     >
//                       <FaTimes size={20} />
//                     </button>
//                   </div>

//                   {/* Projects List */}
//                   <div className="p-6 space-y-4">
//                     {selectedSkill.projects?.map((project: Project, index: number) => (
//                       <motion.div
//                         key={project.name}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="glass-card p-4 hover:bg-gray-700/30 transition-all group cursor-pointer"
//                         onClick={() => window.open(project.url, '_blank')}
//                       >
//                         <div className="flex items-start gap-4">
//                           <div className="text-3xl">{project.image}</div>
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2 mb-2">
//                               <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
//                                 {project.name}
//                               </h4>
//                               <FaExternalLinkAlt 
//                                 size={12} 
//                                 className="text-gray-400 group-hover:text-cyan-400 transition-colors" 
//                               />
//                             </div>
//                             <p className="text-gray-400 text-sm">
//                               {project.description}
//                             </p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )) || (
//                       <div className="text-center py-12 text-gray-400">
//                         <p>No projects available for this skill yet.</p>
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Skills
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { 
  SiJavascript, SiPython, SiReact, SiNextdotjs, SiCplusplus, 
  SiNodedotjs, SiMongodb, SiMysql, SiFastapi, SiStreamlit, SiGit
} from 'react-icons/si'
import { FaJava, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import React from 'react'

// ✅ FIXED: Proper TypeScript interfaces
interface Project {
  name: string
  url: string
  description: string
  image: string
}

interface Skill {
  icon: React.ComponentType<{ size?: number; color?: string }>
  name: string
  color: string
  projects?: Project[]
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Skills based on your resume
  const allSkills: Skill[] = [
    { 
      icon: SiPython, 
      name: "Python", 
      color: "#3776AB",
      projects: [
        { 
          name: "GenAI Medical Advisor", 
          url: "https://github.com/ThodemDinesh/genai-medical-advisor", 
          description: "AI-powered assistant using RAG with 90%+ accuracy. Built with LangChain, ChromaDB, and HuggingFace.", 
          image: "🧠" 
        },
        { 
          name: "Machine Learning Models", 
          url: "https://github.com/ThodemDinesh/ml-models", 
          description: "Various ML models for data analysis and predictions", 
          image: "🤖" 
        },
        { 
          name: "Data Analysis Tools", 
          url: "https://github.com/ThodemDinesh/data-tools", 
          description: "Python scripts for data processing and visualization", 
          image: "📊" 
        }
      ]
    },
    { 
      icon: SiJavascript, 
      name: "JavaScript", 
      color: "#F7DF1E",
      projects: [
        { 
          name: "Habit Tracker Web App", 
          url: "https://github.com/ThodemDinesh/habit-tracker", 
          description: "Full-stack habit tracker with JWT auth and real-time analytics using React dashboard.", 
          image: "📋" 
        },
        { 
          name: "Interactive Web Apps", 
          url: "https://github.com/ThodemDinesh/web-apps", 
          description: "Dynamic web applications with modern JavaScript", 
          image: "🌐" 
        }
      ]
    },
    { 
      icon: SiReact, 
      name: "React.js", 
      color: "#61DAFB",
      projects: [
        { 
          name: "Habit Tracker Dashboard", 
          url: "https://github.com/ThodemDinesh/habit-tracker", 
          description: "Responsive React dashboard with Context API and theme toggle", 
          image: "⚛️" 
        },
        { 
          name: "Component Library", 
          url: "https://github.com/ThodemDinesh/react-components", 
          description: "Reusable React components for modern web apps", 
          image: "🧩" 
        }
      ]
    },
    { 
      icon: SiNextdotjs, 
      name: "Next.js", 
      color: "#000000",
      projects: [
        { 
          name: "Portfolio Website", 
          url: "https://github.com/ThodemDinesh/portfolio", 
          description: "This portfolio website built with Next.js and modern web technologies", 
          image: "💼" 
        }
      ]
    },
    { 
      icon: SiNodedotjs, 
      name: "Node.js", 
      color: "#339933",
      projects: [
        { 
          name: "Habit Tracker Backend", 
          url: "https://github.com/ThodemDinesh/habit-tracker-api", 
          description: "RESTful API with Express.js and JWT authentication", 
          image: "🔧" 
        },
        { 
          name: "API Services", 
          url: "https://github.com/ThodemDinesh/node-apis", 
          description: "Scalable backend services and microservices", 
          image: "⚡" 
        }
      ]
    },
    { 
      icon: SiFastapi, 
      name: "FastAPI", 
      color: "#009688",
      projects: [
        { 
          name: "GenAI Medical API", 
          url: "https://github.com/ThodemDinesh/medical-api", 
          description: "High-performance API for AI medical advisor with sub-3s response time", 
          image: "🏥" 
        }
      ]
    },
    { 
      icon: SiStreamlit, 
      name: "Streamlit", 
      color: "#FF4B4B",
      projects: [
        { 
          name: "Medical Advisor UI", 
          url: "https://github.com/ThodemDinesh/medical-streamlit", 
          description: "Interactive web interface for AI medical consultation", 
          image: "🩺" 
        }
      ]
    },
    { 
      icon: SiMongodb, 
      name: "MongoDB", 
      color: "#47A248",
      projects: [
        { 
          name: "Habit Data Storage", 
          url: "https://github.com/ThodemDinesh/habit-db", 
          description: "NoSQL database design for habit tracking application", 
          image: "🗄️" 
        }
      ]
    },
    { 
      icon: SiMysql, 
      name: "MySQL", 
      color: "#4479A1",
      projects: [
        { 
          name: "Database Systems", 
          url: "https://github.com/ThodemDinesh/mysql-projects", 
          description: "Relational database design and optimization (Oracle Certified)", 
          image: "🏛️" 
        }
      ]
    },
    { 
      icon: SiCplusplus, 
      name: "C++", 
      color: "#00599C",
      projects: [
        { 
          name: "DSA Solutions", 
          url: "https://leetcode.com/u/thodemdinesh/", 
          description: "450+ LeetCode problems solved with focus on algorithms and optimization", 
          image: "🧮" 
        },
        { 
          name: "Competitive Programming", 
          url: "https://github.com/ThodemDinesh/competitive-programming", 
          description: "Advanced algorithms and data structures implementation", 
          image: "🏆" 
        }
      ]
    },
    { 
      icon: FaJava, 
      name: "Java", 
      color: "#ED8B00",
      projects: [
        { 
          name: "Full Stack Development", 
          url: "https://github.com/ThodemDinesh/java-projects", 
          description: "Enterprise applications with Spring Boot and Angular (iamNeo Certified)", 
          image: "☕" 
        }
      ]
    },
    { 
      icon: SiGit, 
      name: "Git/GitHub", 
      color: "#F05032",
      projects: [
        { 
          name: "Version Control", 
          url: "https://github.com/ThodemDinesh", 
          description: "Professional version control and collaborative development", 
          image: "🔀" 
        }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Click on any skill to see related projects • 450+ LeetCode Problems Solved • 8.91 CGPA
          </p>

          <div className="glass-card p-8 overflow-hidden relative">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -2000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: 'max-content' }}
            >
              {[...allSkills, ...allSkills, ...allSkills].map((skill: Skill, index: number) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="flex flex-col items-center gap-3 min-w-[100px] flex-shrink-0 relative cursor-pointer"
                    whileHover={{ scale: 1.2, y: -10 }}
                    whileTap={{ scale: 1.1 }}
                    animate={{
                      x: hoveredSkill?.name === skill.name ? Math.sin(mousePos.x * 0.01) * 5 : 0,
                      y: hoveredSkill?.name === skill.name ? Math.cos(mousePos.y * 0.01) * 5 : 0,
                    }}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div 
                      className="w-16 h-16 flex items-center justify-center rounded-xl shadow-lg relative group"
                      style={{ backgroundColor: skill.color }}
                    >
                      <Icon size={32} color={skill.color === "#000000" ? "#ffffff" : "#000000"} />
                      
                      <div className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-50 transition-opacity">
                        <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <span className="text-white font-medium text-sm text-center">
                      {skill.name}
                    </span>
                    
                    <div className="absolute -top-2 -right-1 w-5 h-5 bg-cyan-500 text-black rounded-full flex items-center justify-center text-xs font-bold">
                      {skill.projects?.length || 0}
                    </div>

                    {/* Particle effects */}
                    {hoveredSkill?.name === skill.name && (
                      <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{ backgroundColor: skill.color }}
                            animate={{
                              x: [0, Math.random() * 60 - 30],
                              y: [0, Math.random() * 60 - 30],
                              opacity: [1, 0],
                              scale: [1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Projects Modal */}
          <AnimatePresence>
            {selectedSkill && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedSkill(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 50 }}
                  className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-cyan-500/30"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="p-6 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: selectedSkill.color }}
                      >
                        <selectedSkill.icon 
                          size={24} 
                          color={selectedSkill.color === "#000000" ? "#ffffff" : "#000000"} 
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                        <p className="text-gray-400">
                          {selectedSkill.projects?.length || 0} project{selectedSkill.projects?.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>

                  {/* Projects List */}
                  <div className="p-6 space-y-4">
                    {selectedSkill.projects?.map((project: Project, index: number) => (
                      <motion.div
                        key={project.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-4 hover:bg-gray-700/30 transition-all group cursor-pointer"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{project.image}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {project.name}
                              </h4>
                              <FaExternalLinkAlt 
                                size={12} 
                                className="text-gray-400 group-hover:text-cyan-400 transition-colors" 
                              />
                            </div>
                            <p className="text-gray-400 text-sm">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )) || (
                      <div className="text-center py-12 text-gray-400">
                        <p>No projects available for this skill yet.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
