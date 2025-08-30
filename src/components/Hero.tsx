'use client'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown, Github, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Creative Software Developer"

  useEffect(() => {
    let i = 0
    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
        setTimeout(typeWriter, 100)
      }
    }
    setTimeout(typeWriter, 1000)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading with proper spacing */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
              Dinesh
            </span>
            <motion.span 
              className="inline-block ml-4 text-5xl"
              animate={{ rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            >
              👋
            </motion.span>
          </motion.h1>
          
          {/* Typing animation */}
          <motion.div
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300 mb-8 min-h-[3rem] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="mr-2">A </span>
            <span className="text-cyan-400 font-mono">
              {text}
            </span>
            <span className="animate-pulse text-cyan-400 ml-1">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Who loves solving complex problems and building innovative solutions. 
            Passionate about <span className="text-green-400 font-semibold">AI</span>, 
            clean code, and creating impactful software experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1iD3zU7WLCQWo2ds5Go9KZTH85V87BByD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <Download size={20} />
              View Resume
            </motion.a>

            <motion.a
              href="mailto:thodemdinesh2004@gmail.com?subject=Hello%20Dinesh&body=Hi%20Dinesh,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss..."
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a
              href="https://github.com/ThodemDinesh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/thodem-dinesh/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-gray-500" size={24} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
