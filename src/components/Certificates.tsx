
// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { Eye, Download, X, Calendar, CheckCircle } from 'lucide-react'
// import { useState } from 'react'

// const Certificates = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
//   // Your 4 certificates
//   const certificates = [
//     {
//       id: 1,
//       title: "MySQL Implementation Certified Associate",
//       issuer: "Oracle",
//       date: "June 2024",
//       credentialId: "ORACLE-MYSQL-2024-001",
//       image: "🏛️",
//       description: "Demonstrated expertise in MySQL Enterprise Edition including installation, database design, backup, and replication. Proficient in implementing MySQL security, enabling high availability, and monitoring MySQL performance.",
//       skills: ["MySQL", "Database Design", "Performance Tuning", "Security", "Replication"],
//       pdfPath: "/certificates/oracle_certificate.pdf",
//       status: "Active"
//     },
//     {
//       id: 2,
//       title: "Java Full Stack Development Course",
//       issuer: "iamNeo",
//       date: "Jun-Jul 2024",
//       credentialId: "IAMNEO-JAVA-2024-002",
//       image: "☕",
//       description: "Completed comprehensive training in Java, Spring Boot, Angular, HTML5, CSS3, JavaScript, and SQL. Gained foundational knowledge of full-stack development and RESTful API design.",
//       skills: ["Java", "Spring Boot", "Angular", "JavaScript", "SQL", "REST APIs"],
//       pdfPath: "/certificates/iamneo_certificate.pdf",
//       status: "Active"
//     },
//     {
//       id: 3,
//       title: "Cisco AI Certificate",
//       issuer: "Cisco",
//       date: "2024",
//       credentialId: "CISCO-AI-2024-003",
//       image: "🤖",
//       description: "Comprehensive certification covering artificial intelligence fundamentals, machine learning algorithms, and AI implementation in enterprise environments.",
//       skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Data Science", "Python"],
//       pdfPath: "/certificates/cisco_certificate.pdf",
//       status: "Active"
//     },
//     {
//       id: 4,
//       title: "Deloitte Data Analytics Certificate",
//       issuer: "Deloitte",
//       date: "2024",
//       credentialId: "DELOITTE-DA-2024-004",
//       image: "📊",
//       description: "Advanced data analytics certification covering statistical analysis, data visualization, business intelligence, and strategic data-driven decision making.",
//       skills: ["Data Analytics", "Statistical Analysis", "Business Intelligence", "Data Visualization", "Excel", "Tableau"],
//       pdfPath: "/certificates/delloite_certificatedataanalytics.pdf",
//       status: "Active"
//     }
//   ]

//   // ✅ FIXED: Proper TypeScript typing instead of 'any'
//   const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

//   return (
//     <section id="certificates" className="py-15 px-3 sm:px-4 lg:px-6 bg-gray-800">
//       <div className="max-w-5xl mx-auto">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4">
//             Certificates & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
//           </h2>
//           <p className="text-base text-gray-400 text-center max-w-xl mx-auto mb-12">
//             Professional certifications from Oracle, iamNeo, Cisco, and Deloitte validating my technical expertise
//           </p>

//           {/* Certificates Grid */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {certificates.map((cert, index) => (
//               <motion.div
//                 key={cert.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.15, duration: 0.8 }}
//                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 p-4 transition-all duration-300 group"
//               >
//                 {/* Certificate Header */}
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="text-3xl mb-1.5">{cert.image}</div>
//                   <div className="flex items-center gap-1.5">
//                     <CheckCircle className="text-green-400" size={12} />
//                     <span className="text-xs text-green-400 font-medium">{cert.status}</span>
//                   </div>
//                 </div>

//                 {/* Certificate Info */}
//                 <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
//                   {cert.title}
//                 </h3>
                
//                 <div className="text-cyan-400 font-medium mb-1.5 text-sm">{cert.issuer}</div>
                
//                 <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
//                   <Calendar size={10} />
//                   <span>{cert.date}</span>
//                 </div>

//                 <p className="text-gray-300 text-xs mb-3 leading-relaxed">
//                   {cert.description}
//                 </p>

//                 {/* Skills Tags */}
//                 <div className="flex flex-wrap gap-1.5 mb-3">
//                   {cert.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="px-1.5 py-0.5 bg-gray-700/50 border border-gray-600 rounded text-xs text-cyan-400 hover:border-cyan-500 transition-colors"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="border-t border-gray-700 pt-3">
//                   <div className="flex gap-2">
//                     <motion.button
//                       onClick={() => setSelectedCert(cert)}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors text-xs font-medium"
//                     >
//                       <Eye size={12} />
//                       View Certificate
//                     </motion.button>
                    
//                     <motion.a
//                       href={cert.pdfPath}
//                       download
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-1.5 px-3 py-1.5 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors text-xs font-medium"
//                     >
//                       <Download size={12} />
//                       Download
//                     </motion.a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* PDF Viewer Modal */}
//           <AnimatePresence>
//             {selectedCert && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-3"
//                 onClick={() => setSelectedCert(null)}
//               >
//                 <motion.div
//                   initial={{ scale: 0.8, y: 40 }}
//                   animate={{ scale: 1, y: 0 }}
//                   exit={{ scale: 0.8, y: 40 }}
//                   className="bg-gray-800 rounded-xl w-full max-w-4xl h-[90vh] flex flex-col border border-cyan-500/30"
//                   onClick={(e: React.MouseEvent) => e.stopPropagation()}
//                 >
//                   {/* Modal Header */}
//                   <div className="flex items-center justify-between p-4 border-b border-gray-700">
//                     <div>
//                       <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
//                       <p className="text-gray-400 text-sm">{selectedCert.issuer}</p>
//                     </div>
//                     <button
//                       onClick={() => setSelectedCert(null)}
//                       className="p-1.5 text-gray-400 hover:text-white transition-colors"
//                     >
//                       <X size={18} />
//                     </button>
//                   </div>

//                   {/* PDF Viewer */}
//                   <div className="flex-1 p-4">
//                     <iframe
//                       src={selectedCert.pdfPath}
//                       className="w-full h-full rounded-md border border-gray-600"
//                       title={`${selectedCert.title} Certificate`}
//                     />
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Achievement Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 22 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
//           >
//             {[
//               { number: "4", label: "Certifications", icon: "🏆" },
//               { number: "450+", label: "LeetCode Solved", icon: "⚡" },
//               { number: "8.91", label: "CGPA", icon: "🎓" },
//               { number: "2024", label: "Latest Certs", icon: "📅" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.6 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
//                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 p-4 text-center"
//               >
//                 <div className="text-2xl mb-1.5">{stat.icon}</div>
//                 <div className="text-xl font-bold text-cyan-400 mb-1">{stat.number}</div>
//                 <div className="text-gray-400 text-xs">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Certificates
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Download, X, Calendar, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  // Your 4 certificates
  const certificates = [
    {
      id: 1,
      title: "MySQL Implementation Certified Associate",
      issuer: "Oracle",
      date: "June 2024",
      credentialId: "ORACLE-MYSQL-2024-001",
      image: "🏛️",
      description: "Demonstrated expertise in MySQL Enterprise Edition including installation, database design, backup, and replication. Proficient in implementing MySQL security, enabling high availability, and monitoring MySQL performance.",
      skills: ["MySQL", "Database Design", "Performance Tuning", "Security", "Replication"],
      pdfPath: "/certificates/oracle_certificate.pdf",
      status: "Active"
    },
    {
      id: 2,
      title: "Java Full Stack Development Course",
      issuer: "iamNeo",
      date: "Jun-Jul 2024",
      credentialId: "IAMNEO-JAVA-2024-002",
      image: "☕",
      description: "Completed comprehensive training in Java, Spring Boot, Angular, HTML5, CSS3, JavaScript, and SQL. Gained foundational knowledge of full-stack development and RESTful API design.",
      skills: ["Java", "Spring Boot", "Angular", "JavaScript", "SQL", "REST APIs"],
      pdfPath: "/certificates/iamneo_certificate.pdf",
      status: "Active"
    },
    {
      id: 3,
      title: "Cisco AI Certificate",
      issuer: "Cisco",
      date: "2024",
      credentialId: "CISCO-AI-2024-003",
      image: "🤖",
      description: "Comprehensive certification covering artificial intelligence fundamentals, machine learning algorithms, and AI implementation in enterprise environments.",
      skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Data Science", "Python"],
      pdfPath: "/certificates/cisco_certificate.pdf",
      status: "Active"
    },
    {
      id: 4,
      title: "Deloitte Data Analytics Certificate",
      issuer: "Deloitte",
      date: "2024",
      credentialId: "DELOITTE-DA-2024-004",
      image: "📊",
      description: "Advanced data analytics certification covering statistical analysis, data visualization, business intelligence, and strategic data-driven decision making.",
      skills: ["Data Analytics", "Statistical Analysis", "Business Intelligence", "Data Visualization", "Excel", "Tableau"],
      pdfPath: "/certificates/delloite_certificatedataanalytics.pdf",
      status: "Active"
    }
  ]

  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  return (
    <section id="certificates" className="py-16 px-3 sm:px-4 lg:px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            Certificates & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-base text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Professional certifications from Oracle, iamNeo, Cisco, and Deloitte validating my technical expertise
          </p>

          {/* Smaller Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 p-5 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl mb-2">{cert.image}</div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="text-green-400" size={14} />
                    <span className="text-xs text-green-400 font-medium">{cert.status}</span>
                  </div>
                </div>

                {/* Certificate Info */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="text-cyan-400 font-semibold mb-2 text-sm">{cert.issuer}</div>
                
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-cyan-400 hover:border-cyan-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-400">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex gap-3">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedCert(cert)
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors text-sm font-semibold"
                    >
                      <Eye size={14} />
                      View Certificate
                    </motion.button>
                    
                    <motion.a
                      href={cert.pdfPath}
                      download
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors text-sm font-semibold"
                    >
                      <Download size={14} />
                      Download
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Smaller PDF Viewer Modal */}
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 40 }}
                  className="bg-gray-800/95 backdrop-blur-xl rounded-xl w-full max-w-4xl h-[85vh] flex flex-col border border-cyan-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-5 border-b border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{selectedCert.image}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                        <p className="text-gray-400 text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* PDF Viewer */}
                  <div className="flex-1 p-5">
                    <iframe
                      src={selectedCert.pdfPath}
                      className="w-full h-full rounded-lg border border-gray-600/50"
                      title={`${selectedCert.title} Certificate`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Smaller Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { number: "4", label: "Certifications", icon: "🏆" },
              { number: "450+", label: "LeetCode Solved", icon: "⚡" },
              { number: "8.91", label: "CGPA", icon: "🎓" },
              { number: "2024", label: "Latest Certs", icon: "📅" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 p-4 text-center transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-lg font-bold text-cyan-400 mb-1">{stat.number}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates

