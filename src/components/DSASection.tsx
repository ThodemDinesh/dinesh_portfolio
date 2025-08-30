'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Target, Code2, TrendingUp } from 'lucide-react'

const DSASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: Trophy,
      number: "500+",
      label: "Problems Solved",
      description: "LeetCode & HackerRank",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20"
    },
    {
      icon: Target,
      number: "1800+",
      label: "Max Rating",
      description: "Competitive Programming",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/20"
    },
    {
      icon: Code2,
      number: "15+",
      label: "Algorithms Mastered",
      description: "DP, Graphs, Trees & More",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      icon: TrendingUp,
      number: "Top 10%",
      label: "Global Ranking",
      description: "Multiple Platforms",
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    }
  ]

  const platforms = [
    {
      name: "LeetCode",
      problems: 350,
      rating: "1890",
      badge: "🔥",
      url: "https://leetcode.com/dinesh"
    },
    {
      name: "HackerRank",
      problems: 120,
      rating: "Gold",
      badge: "⭐",
      url: "https://hackerrank.com/dinesh"
    },
    {
      name: "Codeforces",
      problems: 80,
      rating: "1650",
      badge: "🚀",
      url: "https://codeforces.com/dinesh"
    },
    {
      name: "GeeksforGeeks",
      problems: 200,
      rating: "Expert",
      badge: "💎",
      url: "https://geeksforgeeks.org/dinesh"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="dsa" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8"
          >
            Problem Solving <span className="text-primary-600 dark:text-accent-400">Excellence</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Demonstrating strong algorithmic thinking and competitive programming skills
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, statIndex) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <div className={`inline-flex p-4 rounded-full ${stat.bgColor} mb-4`}>
                  <IconComponent size={32} className={stat.color} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: statIndex * 0.2, duration: 0.5 }}
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </motion.div>
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Platforms Grid */}
        <motion.div variants={containerVariants}>
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-heading font-bold text-gray-900 dark:text-white text-center mb-8"
          >
            Coding Platforms
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {platforms.map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card p-6 rounded-xl text-center hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-3">{platform.badge}</div>
                <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-2">
                  {platform.name}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Problems:</span>
                    <span className="font-medium text-primary-600 dark:text-accent-400">
                      {platform.problems}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                    <span className="font-medium text-primary-600 dark:text-accent-400">
                      {platform.rating}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Algorithm Showcase */}
        <motion.div
          variants={containerVariants}
          className="mt-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-heading font-bold text-gray-900 dark:text-white text-center mb-8"
          >
            Algorithm Expertise
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="code-window max-w-4xl mx-auto"
          >
            <div className="pt-8">
              <div className="text-gray-400 mb-2">{`// Some of my algorithm specializations`}</div>
              <div className="space-y-2 text-green-400">
                <div><span className="text-blue-400">const</span> algorithms = {`{`}</div>
                <div className="ml-4"><span className="text-yellow-400">dynamicProgramming</span>: <span className="text-green-300">&quot;Advanced DP patterns, optimization&quot;</span>,</div>
                <div className="ml-4"><span className="text-yellow-400">graphAlgorithms</span>: <span className="text-green-300">&quot;DFS, BFS, Dijkstra, Union-Find&quot;</span>,</div>
                <div className="ml-4"><span className="text-yellow-400">treeTraversals</span>: <span className="text-green-300">&quot;Binary Trees, BST, Segment Trees&quot;</span>,</div>
                <div className="ml-4"><span className="text-yellow-400">greedyAlgorithms</span>: <span className="text-green-300">&quot;Interval scheduling, MST&quot;</span>,</div>
                <div className="ml-4"><span className="text-yellow-400">stringAlgorithms</span>: <span className="text-green-300">&quot;KMP, Rabin-Karp, Trie&quot;</span>,</div>
                <div className="ml-4"><span className="text-yellow-400">sortingSearching</span>: <span className="text-green-300">&quot;Binary Search variations&quot;</span></div>
                <div>{`};`}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DSASection
