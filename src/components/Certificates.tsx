// 'use client'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react'

// const Certificates = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

//   const certificates = [
//     {
//       id: 1,
//       title: "AWS Certified Solutions Architect",
//       issuer: "Amazon Web Services",
//       date: "2024",
//       credentialId: "AWS-SAA-2024-001",
//       image: "🏆",
//       description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
//       skills: ["AWS", "Cloud Architecture", "System Design"],
//       verificationUrl: "https://aws.amazon.com/verification",
//       status: "Active"
//     },
//     {
//       id: 2,
//       title: "Google Cloud Professional Developer",
//       issuer: "Google Cloud",
//       date: "2024",
//       credentialId: "GCP-PD-2024-002",
//       image: "☁️",
//       description: "Professional certification for building scalable and reliable applications on Google Cloud Platform.",
//       skills: ["Google Cloud", "Kubernetes", "DevOps"],
//       verificationUrl: "https://cloud.google.com/certification",
//       status: "Active"
//     },
//     {
//       id: 3,
//       title: "Meta Frontend Developer Specialization",
//       issuer: "Meta (Coursera)",
//       date: "2023",
//       credentialId: "META-FE-2023-003",
//       image: "⚛️",
//       description: "Comprehensive program covering modern frontend development with React and advanced JavaScript.",
//       skills: ["React", "JavaScript", "Frontend Development"],
//       verificationUrl: "https://coursera.org/verify",
//       status: "Active"
//     },
//     {
//       id: 4,
//       title: "Machine Learning Specialization",
//       issuer: "Stanford University (Coursera)",
//       date: "2023",
//       credentialId: "STAN-ML-2023-004",
//       image: "🤖",
//       description: "In-depth specialization covering machine learning algorithms, neural networks, and AI applications.",
//       skills: ["Machine Learning", "Python", "TensorFlow"],
//       verificationUrl: "https://coursera.org/verify",
//       status: "Active"
//     },
//     {
//       id: 5,
//       title: "Full Stack Web Development",
//       issuer: "The Odin Project",
//       date: "2022",
//       credentialId: "TOP-FS-2022-005",
//       image: "🌐",
//       description: "Comprehensive full-stack development curriculum covering frontend and backend technologies.",
//       skills: ["Full Stack", "Node.js", "Database Design"],
//       verificationUrl: "https://theodinproject.com",
//       status: "Active"
//     },
//     {
//       id: 6,
//       title: "Data Structures & Algorithms",
//       issuer: "LeetCode",
//       date: "2023",
//       credentialId: "LC-DSA-2023-006",
//       image: "⚡",
//       description: "Advanced problem-solving certification demonstrating proficiency in algorithms and data structures.",
//       skills: ["Algorithms", "Problem Solving", "Optimization"],
//       verificationUrl: "https://leetcode.com/certificates",
//       status: "Active"
//     }
//   ]

//   return (
//     <section id="certificates" className="section-padding bg-gray-800">
//       <div className="container-width">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="section-title">
//             Certificates & <span className="gradient-text">Achievements</span>
//           </h2>
//           <p className="section-subtitle">
//             Professional certifications and completed specializations that validate my expertise
//           </p>

//           <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
//             {certificates.map((cert, index) => (
//               <motion.div
//                 key={cert.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1, duration: 0.8 }}
//                 className="glass-card p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
//               >
//                 {/* Certificate Header */}
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="text-4xl mb-2">{cert.image}</div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="text-green-400" size={16} />
//                     <span className="text-xs text-green-400 font-medium">{cert.status}</span>
//                   </div>
//                 </div>

//                 {/* Certificate Info */}
//                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
//                   {cert.title}
//                 </h3>
                
//                 <div className="text-cyan-400 font-medium mb-2">{cert.issuer}</div>
                
//                 <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
//                   <Calendar size={14} />
//                   <span>{cert.date}</span>
//                 </div>

//                 <p className="text-gray-300 text-sm mb-4 leading-relaxed">
//                   {cert.description}
//                 </p>

//                 {/* Skills Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {cert.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-cyan-400 hover:border-cyan-500 transition-colors"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Credential Info */}
//                 <div className="border-t border-gray-700 pt-4">
//                   <div className="text-xs text-gray-500 mb-2">
//                     Credential ID: {cert.credentialId}
//                   </div>
                  
//                   <motion.a
//                     href={cert.verificationUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
//                   >
//                     <Award size={16} />
//                     Verify Certificate
//                     <ExternalLink size={12} />
//                   </motion.a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Stats Summary */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
//           >
//             {[
//               { number: "6+", label: "Certificates", icon: "🏆" },
//               { number: "4", label: "Cloud Platforms", icon: "☁️" },
//               { number: "10+", label: "Technologies", icon: "⚡" },
//               { number: "2024", label: "Latest Cert", icon: "📅" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
//                 className="glass-card p-6 text-center"
//               >
//                 <div className="text-3xl mb-2">{stat.icon}</div>
//                 <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
//                 <div className="text-gray-400 text-sm">{stat.label}</div>
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
import { ExternalLink, Award, Calendar, CheckCircle, Eye, Download, X } from 'lucide-react'
import { useState } from 'react'

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCert, setSelectedCert] = useState<any>(null)

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
     pdfPath: "/certificates/oracle_certificate.pdf", // ✅ Fixed
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
    pdfPath: "/certificates/iamneo_certificate.pdf", // ✅ Fixed
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
    pdfPath: "/certificates/cisco_certificate.pdf", // ✅ Fixed
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
    pdfPath: "/certificates/delloite_certificatedataanalytics.pdf", // ✅ Fixed
    status: "Active"
  }
]


  return (
    <section id="certificates" className="section-padding bg-gray-800">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications from Oracle, iamNeo, Cisco, and Deloitte validating my technical expertise
          </p>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="glass-card p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{cert.image}</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-xs text-green-400 font-medium">{cert.status}</span>
                  </div>
                </div>

                {/* Certificate Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="text-cyan-400 font-medium mb-2">{cert.issuer}</div>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-cyan-400 hover:border-cyan-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="border-t border-gray-700 pt-4">
                  {/* <div className="text-xs text-gray-500 mb-3">
                    Credential ID: {cert.credentialId}
                  </div> */}
                  
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setSelectedCert(cert)} // 👈 This opens the modal
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors text-sm font-medium"
                    >
                      <Eye size={16} />
                      View Certificate
                    </motion.button>
                    
                    <motion.a
                      href={cert.pdfPath}
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors text-sm font-medium"
                    >
                      <Download size={16} />
                      Download
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PDF Viewer Modal - This is the magic! ✨ */}
          <AnimatePresence>
            {selectedCert && ( // 👈 Only shows when certificate is selected
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedCert(null)} // 👈 Click backdrop to close
              >
                <motion.div
                  initial={{ scale: 0.8, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 50 }}
                  className="bg-gray-800 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col border border-cyan-500/30"
                  onClick={(e) => e.stopPropagation()} // 👈 Prevent closing when clicking modal content
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                      <p className="text-gray-400">{selectedCert.issuer}</p>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)} // 👈 Close button
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* PDF Viewer - This displays your actual PDF! */}
                  <div className="flex-1 p-6">
                    <iframe
                      src={selectedCert.pdfPath} // 👈 Your PDF file path
                      className="w-full h-full rounded-lg border border-gray-600"
                      title={`${selectedCert.title} Certificate`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
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
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
