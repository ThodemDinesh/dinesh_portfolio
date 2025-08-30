'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
      
      // Track active section
      const sections = ['about', 'skills', 'projects', 'certificates', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`transition-all duration-500 ease-out ${
          isScrolled 
            ? 'w-[90%] max-w-4xl' 
            : 'w-[95%] max-w-5xl'
        }`}
      >
        <div 
          className={`px-6 py-4 rounded-3xl transition-all duration-500 ${
            isScrolled 
              ? 'bg-black/20 shadow-2xl shadow-cyan-500/10' 
              : 'bg-black/10 shadow-xl'
          }`}
          style={{
            backdropFilter: 'blur(30px) saturate(150%)',
            WebkitBackdropFilter: 'blur(30px) saturate(150%)',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
          }}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
            >
              {'<Dinesh />'}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      relative px-4 py-2.5 rounded-2xl font-medium cursor-pointer
                      transition-all duration-300 group
                      ${isActive 
                        ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20' 
                        : 'text-white/80 hover:text-white hover:bg-white/8'
                      }
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                    `}
                  >
                    {item.name}
                    
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      initial={{ width: isActive ? '80%' : 0 }}
                      animate={{ width: isActive ? '80%' : 0 }}
                      whileHover={{ width: '80%' }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ zIndex: -1 }}
                    />
                    
                    {/* Click ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      whileTap={{ 
                        background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
                        scale: 0.95 
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:text-cyan-400 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="md:hidden mt-4 p-4 bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
              style={{
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
              }}
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 8,
                      backgroundColor: 'rgba(6,182,212,0.1)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      block py-3 px-4 rounded-xl font-medium cursor-pointer
                      transition-all duration-300 group relative
                      ${isActive 
                        ? 'text-cyan-400 bg-cyan-400/10 border-l-4 border-cyan-400' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      }
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                    `}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Mobile active indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    )}
                  </motion.a>
                )
              })}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar
