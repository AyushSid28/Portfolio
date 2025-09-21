"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronDown, ChevronUp, Brain, Code, School, Sparkles, Zap, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const [expandedCard, setExpandedCard] = useState<string | null>("academic")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const cards = [
    {
      id: "academic",
      title: "Professional Background",
      icon: <School className="h-5 w-5 text-violet-400" />,
      content: (
        <div>
          <p className="mb-2">
            B.Tech in Computer Science & Engineering from Symbiosis Institute of Technology, Pune.
          </p>
          <p className="mb-2">
            Strong foundation in computer science fundamentals with specialized focus on AI & Agentic Systems.
          </p>
          <p>
            Passionate about building scalable backend systems and integrating next-generation AI solutions.
          </p>
        </div>
      ),
    },
    {
      id: "ai",
      title: "AI Passion",
      icon: <Brain className="h-5 w-5 text-fuchsia-400" />,
      content: (
        <div>
          <p className="mb-2">
            Specialized in AI/ML & GenAI including LLMs, Transformer Architectures, Machine Learning, Deep Learning, and NLP.
          </p>
          <p className="mb-2">
            Expert in Agents Framework including OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, and MCP.
          </p>
          <p>Passionate about building AI-powered solutions for legal tech, document processing, and multi-agent systems.</p>
        </div>
      ),
    },
    {
      id: "dev",
      title: "Development Journey",
      icon: <Code className="h-5 w-5 text-pink-400" />,
      content: (
        <div>
          <p className="mb-2">
            Experienced in Python, C++, Java, Flutter, JavaScript with expertise in Node.js, React, Flask, FastAPI, and Streamlit.
          </p>
          <p className="mb-2">
            Proficient in databases including MongoDB, PostgreSQL, MySQL, Weaviate, SQLite, and Redis.
          </p>
          <p>
            Skilled in DevOps with Docker, Kubernetes, CI/CD, Apache Kafka, Prometheus, and Grafana.
          </p>
        </div>
      ),
    },
    {
      id: "research",
      title: "Research Interests",
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      content: (
        <div>
          <p className="mb-2">
            Professional experience at Qlaws.ai implementing AI-powered legal document processing systems with Weaviate vector database.
          </p>
          <p className="mb-2">
            Built intelligence layer for supply chain optimization at Dream Skrin with 30% reduction in delivery delays.
          </p>
          <p>
            Developed RAG chatbot and CRM integration at MINTRIX for AI-based learning platform with adaptive algorithms.
          </p>
        </div>
      ),
    },
    {
      id: "global",
      title: "Global Perspective",
      icon: <Globe className="h-5 w-5 text-cyan-400" />,
      content: (
        <div>
          <p className="mb-2">
            Built comprehensive projects including SiteForge (agentic website development) and MarketMinds (stock analysis with 85% accuracy).
          </p>
          <p className="mb-2">
            Developed Learnix AI-powered e-learning platform with comprehensive school management system and RAG chatbot.
          </p>
          <p>
            Certified in Oracle Generative AI Course (2025) with focus on cutting-edge AI technologies and applications.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives my passion for AI and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-md opacity-75"></div>
              <div className="relative bg-black rounded-xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/ayush.jpg"
                  alt="Ayush Siddhant"
                  width={450}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="mt-6 bg-black/60 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Quick Bio</h3>
              <p className="text-gray-300 mb-4">
                Backend Engineer and AI & Agentic Systems specialist with a passion for building scalable backend systems 
                and integrating next-generation AI solutions to solve complex real-world problems.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Education:</span>
                  <span className="text-gray-200">B.Tech CSE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-gray-200">Pune, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Specialization:</span>
                  <span className="text-gray-200">AI & Agentic Systems</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Languages:</span>
                  <span className="text-gray-200">English, Hindi</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Accordion Cards */}
          <div className="lg:col-span-2">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <Card className="border border-violet-500/20 bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
                  <CardHeader
                    className="cursor-pointer flex flex-row items-center justify-between"
                    onClick={() => toggleCard(card.id)}
                  >
                    <div className="flex items-center">
                      {card.icon}
                      <CardTitle className="ml-2 text-xl">{card.title}</CardTitle>
                    </div>
                    {expandedCard === card.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </CardHeader>
                  {expandedCard === card.id && <CardContent className="text-gray-300 pt-0">{card.content}</CardContent>}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
