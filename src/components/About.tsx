// 'use client'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { Code, Zap, Target, Heart } from 'lucide-react'

// const About = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

//   return (
//     <section id="about" className="section-padding bg-gray-800">
//       <div className="container-width">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="section-title">
//             About <span className="gradient-text">Me</span>
//           </h2>
//           <p className="section-subtitle">
//             Passionate about creating elegant solutions to complex problems
//           </p>
          
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <p className="text-xl text-gray-300 leading-relaxed">
//                 I&apos;m a passionate software developer who believes that great code is like poetry – 
//                 <span className="text-cyan-400 font-semibold"> elegant, efficient, and impactful</span>. 
//                 My journey in tech started with curiosity and has evolved into a deep love for solving complex problems.
//               </p>
              
//               <p className="text-xl text-gray-300 leading-relaxed">
//                 What excites me most is the power to transform ideas into reality through code. Whether it&apos;s 
//                 building scalable applications, diving into <span className="text-green-400 font-semibold">AI/ML</span>, 
//                 or crafting beautiful user experiences.
//               </p>

//               <div className="flex flex-wrap gap-3 pt-6">
//                 {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'AI/ML'].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-full text-cyan-400 text-sm font-medium hover:border-cyan-500 transition-colors"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 { icon: Code, title: "Clean Code", desc: "Maintainable & efficient", color: "text-blue-400" },
//                 { icon: Zap, title: "Performance", desc: "Optimized solutions", color: "text-yellow-400" },
//                 { icon: Target, title: "Goal-Oriented", desc: "Results-focused", color: "text-red-400" },
//                 { icon: Heart, title: "Passion", desc: "Love for innovation", color: "text-pink-400" },
//               ].map(({ icon: Icon, title, desc, color }) => (
//                 <motion.div
//                   key={title}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="glass-card p-6 text-center group"
//                 >
//                   <Icon className={`${color} mx-auto mb-4 group-hover:scale-110 transition-transform`} size={40} />
//                   <h3 className="font-bold text-white mb-2">{title}</h3>
//                   <p className="text-gray-400 text-sm">{desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default About
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Zap, Target, Heart } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-16 px-2 sm:px-3 lg:px-5 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-5">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-sm text-gray-400 text-center max-w-xl mx-auto mb-12">
            Passionate about creating elegant solutions to complex problems
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base text-gray-300 leading-relaxed">
                I&apos;m a passionate software developer who believes that great code is like poetry – 
                <span className="text-cyan-400 font-semibold"> elegant, efficient, and impactful</span>. 
                My journey in tech started with curiosity and has evolved into a deep love for solving complex problems.
              </p>

              <p className="text-base text-gray-300 leading-relaxed">
                What excites me most is the power to transform ideas into reality through code. Whether it&apos;s 
                building scalable applications, diving into <span className="text-green-400 font-semibold">AI/ML</span>, 
                or crafting beautiful user experiences.
              </p>

              <div className="flex flex-wrap gap-2 pt-5">
                {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'AI/ML'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-cyan-400 text-xs font-medium hover:border-cyan-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, title: "Clean Code", desc: "Maintainable & efficient", color: "text-blue-400" },
                { icon: Zap, title: "Performance", desc: "Optimized solutions", color: "text-yellow-400" },
                { icon: Target, title: "Goal-Oriented", desc: "Results-focused", color: "text-red-400" },
                { icon: Heart, title: "Passion", desc: "Love for innovation", color: "text-pink-400" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/10 p-5 text-center group"
                >
                  <Icon className={`${color} mx-auto mb-3 group-hover:scale-105 transition-transform`} size={36} />
                  <h3 className="font-bold text-white mb-1.5 text-sm">{title}</h3>
                  <p className="text-gray-400 text-xs">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

