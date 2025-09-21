"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Database, Brain, Server, Layers, Cpu } from "lucide-react"
import Image from "next/image"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95, logo: "/tech/languages/python.png?height=60&width=60" },
        { name: "JavaScript", level: 90, logo: "/tech/languages/js.png?height=60&width=60" },
        { name: "Java", level: 80, logo: "/tech/languages/java.png?height=60&width=60" },
        { name: "C++", level: 75, logo: "/tech/languages/cpp.png?height=60&width=60" },
      ],
      color: "from-violet-500 to-fuchsia-500",
      direction: 1,
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 90, logo: "/tech/frameworks/react.png?height=60&width=60" },
        { name: "Node.js", level: 85, logo: "/tech/frameworks/node.png?height=60&width=60" },
        { name: "FastAPI", level: 85, logo: "/tech/languages/python.png?height=60&width=60" },
        { name: "LangChain", level: 75, logo: "/tech/ai-ml/l.png?height=60&width=60" },
        { name: "LangGraph", level: 85, logo: "/tech/ai-ml/langgraph.png?height=60&width=60" },
      ],
      color: "from-fuchsia-500 to-pink-500",
      direction: -1,
    },
    {
      title: "Agentic AI Frameworks",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "LangGraph", level: 90, logo: "/tech/ai-ml/langgraph.png?height=60&width=60" },
        { name: "OpenAI Agents SDK", level: 85, logo: "/tech/ai-ml/openai-agents-sdk.png?height=60&width=60" },
        { name: "CrewAI", level: 80, logo: "/tech/ai-ml/crewai.png?height=60&width=60" },
        { name: "AutoGen", level: 75, logo: "/tech/ai-ml/autogen.png?height=60&width=60" },
      ],
      color: "from-pink-500 to-rose-500",
      direction: 1,
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 85, logo: "/tech/databases/mdb.png?height=60&width=60" },
        { name: "PostgreSQL", level: 80, logo: "/tech/databases/sql2.png?height=60&width=60" },
        { name: "Redis", level: 75, logo: "/tech/databases/redis.png?height=60&width=60" },
        { name: "Weaviate", level: 85, logo: "/tech/databases/weaviate.png?height=60&width=60" },
        { name: "MySQL", level: 80, logo: "/tech/databases/sql1.png?height=60&width=60" },
        { name: "Pinecone", level: 75, logo: "/tech/databases/pinecone.png?height=60&width=60" },
      ],
      color: "from-rose-500 to-orange-500",
      direction: -1,
    },
    {
      title: "Cloud & DevOps",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "AWS", level: 85, logo: "/tech/cloud-devops/aws.png?height=60&width=60" },
        { name: "Azure", level: 80, logo: "/tech/cloud-devops/azure.png?height=60&width=60" },
        { name: "Docker", level: 85, logo: "/tech/cloud-devops/docker.png?height=60&width=60" },
        { name: "Kubernetes", level: 80, logo: "/tech/cloud-devops/kubernetes.png?height=60&width=60" },
        { name: "Vercel", level: 85, logo: "/tech/cloud-devops/vercel.png?height=60&width=60" },
      ],
      color: "from-orange-500 to-amber-500",
      direction: 1,
    },
  ]


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black -z-10"></div>

      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="skills-particles"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-gradient">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical expertise and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item} className="relative">
              <div className="mb-6 flex items-center">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>{category.icon}</div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Clean grid layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex flex-col items-center p-4 bg-black/40 border border-violet-500/20 rounded-lg hover:border-violet-500/40 transition-all duration-300 hover:bg-black/60">
                      <div className="relative w-12 h-12 mb-3">
                        <Image
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-200 text-center">{skill.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

