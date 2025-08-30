'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Loader2 } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'
import { useState } from 'react'
import Lottie from 'lottie-react'
// Import your downloaded handshake animation
import handshakeAnimation from '../assets/Handshake_portfolio.json'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  // ✅ REMOVED: unused 'error' variable that was causing the warning

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('sending')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '81998e94-913f-4ad1-a477-988a1bfc9cc9')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('message', formData.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Fixed Lottie Handshake Animation with better timing
  const LottieHandshakeAnimation = () => (
    <motion.div className="text-center py-6">
      {/* Animation and Text Container - Synced timing */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <Lottie
          animationData={handshakeAnimation}
          loop={false}
          style={{ width: 200, height: 200 }}
          className="mx-auto"
        />
      </motion.div>
      
      {/* Reduced delays for smoother experience */}
      <motion.h4 
        className="text-2xl font-bold text-green-400 mb-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        Great to Connect! 🎉
      </motion.h4>
      
      <motion.p 
        className="text-green-300/80 mb-4 max-w-md mx-auto"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      >
        Your message has been sent successfully. Looking forward to our conversation!
      </motion.p>

      {/* Response Time Indicator */}
      <motion.div
        className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", duration: 0.4 }}
      >
        <CheckCircle className="text-green-400" size={18} />
        <span className="text-green-400 text-sm font-medium">I&apos;ll respond within 24 hours</span>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="contact" className="section-padding bg-gray-800">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="section-subtitle">
            Ready to turn ideas into reality? Let&apos;s collaborate and create impactful solutions together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-3xl font-heading font-bold text-white mb-8">Send Message</h3>
              
              {/* Success Animation */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-8 p-8 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl"
                  >
                    <LottieHandshakeAnimation />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                    isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                  required
                  disabled={isSubmitting}
                />
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows={6}
                  className={`w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition-all duration-300 ${
                    isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                  required
                  disabled={isSubmitting}
                />
                
                {/* Enhanced Loading Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
                    isSubmitting 
                      ? 'bg-cyan-600 text-white cursor-not-allowed' 
                      : 'bg-cyan-500 hover:bg-cyan-400 text-black hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {/* Loading Overlay */}
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-cyan-400/50 to-cyan-500/30"
                      animate={{ x: [-300, 300] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  
                  {/* Button Content */}
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center justify-center gap-3 relative z-10"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 size={20} className="text-white" />
                        </motion.div>
                        <span className="text-white font-semibold">Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center justify-center gap-3"
                      >
                        <Send size={20} />
                        Send Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info - Same as before */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Get In Touch</h3>
              
              {[
                { icon: Mail, label: "Email", value: "thodemdinesh2004@gmail.com", href: "mailto:thodemdinesh2004@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 85004 66729", href: "tel:+918500466729" },
                { icon: MapPin, label: "Location", value: "Ananthapur, India", href: "#" }
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gray-700/50 border border-gray-600 rounded-lg group-hover:border-cyan-500/50 transition-colors">
                    <Icon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{label}</h4>
                    <p className="text-gray-400 text-sm">{value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-6">Follow Me</h3>
              
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/ThodemDinesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg transition-all duration-300"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/thodem-dinesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gray-700/50 text-gray-400 hover:text-blue-400 rounded-lg transition-all duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/thodemdinesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gray-700/50 text-gray-400 hover:text-yellow-400 rounded-lg transition-all duration-300"
                >
                  <SiLeetcode size={20} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-4">Quick Response</h3>
              <p className="text-gray-400 mb-4">
                I typically respond within 24 hours. For urgent matters, feel free to call or connect on LinkedIn.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-400 font-medium">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
