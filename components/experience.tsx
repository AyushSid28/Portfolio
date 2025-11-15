"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Code, Database, Brain, Zap } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      company: "TheAgentic",
      position: "Backend Engineer",
      duration: "September 2025 - Present",
      location: "Remote",
      description: "Building scalable AI-powered backend systems and intelligent automation solutions",
      achievements: [
        "Developing advanced AI agent architectures for enterprise automation",
        "Built a rug pool detection tool/agent that finds a safe or unsafe crypto token",
        "Developed a TTS model that can convert script to audio with focus on region based phonetics",
        "Developed a gig agent which can find correct match for a job requirement"
      ],
      technologies: ["Python", "AI Agents", "Microservices", "Real-time Processing", "Backend Architecture", "Automation"],
      icon: <Brain className="h-6 w-6 text-blue-400" />,
      color: "from-blue-500 to-violet-500"
    },
    {
      company: "Qlaws.ai",
      position: "Backend Engineer",
      duration: "June 2025 - September 2025",
      location: "Remote",
      description: "Implemented AI-powered legal document processing system",
      achievements: [
        "Refactored summarization pipeline and migrated to Weaviate vector database",
        "Developed drafting agent automating LOI to SPA document creation",
        "Designed dual-architecture chatbot (Redis/PostgreSQL) for legal document queries",
        "Migrated document storage from Azure Blob to Amazon S3 with regional optimization"
      ],
      technologies: ["Python", "Weaviate", "Redis", "LangGraph", "AWS S3", "AI/ML", "Legal Tech"],
      icon: <Brain className="h-6 w-6 text-violet-400" />,
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      company: "Dream Skrin",
      position: "Backend Engineer",
      duration: "April 2025 - May 2025",
      location: "Remote",
      description: "Built intelligence layer for supply chain and inventory optimization",
      achievements: [
        "Designed distributed Central Intelligence Layer unifying supply chain operations",
        "Developed real-time demand forecasting using XGBoost with inventory reordering integration",
        "Orchestrated workflows using Temporal for automated supply chain coordination",
        "Optimized vendor allocation and routing using OR-Tools, reducing delivery delays by 30%"
      ],
      technologies: ["Python", "LangGraph", "Temporal", "GenAI", "FastAPI", "Supply Chain", "Optimization"],
      icon: <Zap className="h-6 w-6 text-fuchsia-400" />,
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      company: "MINTRIX",
      position: "AI Developer",
      duration: "Nov 2024 - April 2025",
      location: "Remote",
      description: "Developed RAG chatbot and CRM integration for learning platform",
      achievements: [
        "Enhanced user interaction through AI chatbot with Retrieval-Augmented Generation capabilities",
        "Implemented CRM integration to capture and analyze user engagement data",
        "Optimized API performance for AI-based learning system integration",
        "Built adaptive learning algorithms to personalize educational content"
      ],
      technologies: ["Python", "LangChain", "Weaviate", "LangSmith", "Redis", "RAG", "Education Tech"],
      icon: <Code className="h-6 w-6 text-pink-400" />,
      color: "from-pink-500 to-rose-500"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in building scalable backend systems and AI solutions across different industries.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-6xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border border-violet-500/20 bg-black/60 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color}`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-white mb-2">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-gray-300 mb-2">
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-lg">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-violet-300 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-violet-300 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-violet-900/30 border border-violet-500/30 text-violet-300 hover:bg-violet-900/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
