"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "DirectMesh: AI-Powered D2C Platform",
      description: "AI-powered D2C platform with omnichannel agents for WhatsApp, Email, SMS, and Web Chat. Features RFM segmentation, analytics, and marketing automation.",
      image: "/projects/DirectMash.png?height=400&width=600",
      tags: ["Python", "FastAPI", "PostgreSQL", "AI Agents", "WhatsApp API", "SMS", "Email", "RFM Analysis", "Marketing Automation"],
      category: "ai",
      featured: true,
      github: "https://github.com/AyushSid28/DirectMesh",
      demo: "https://github.com/AyushSid28/DirectMesh",
    },
    {
      title: "SiteForge: Autonomous Website Development",
      description: "Autonomous multi-agent system that transforms natural language prompts into fully functional websites with specialized design, frontend, backend, and QA agents.",
      image: "/projects/SiteForge.png?height=400&width=600",
      tags: ["Python", "CrewAI", "OpenAI", "Multi-Agent Systems", "Web Development", "Automation", "Quality Assurance", "Jinja2"],
      category: "ai",
      featured: true,
      github: "https://github.com/AyushSid28/SiteForge",
      demo: "https://github.com/AyushSid28/SiteForge",
    },
    {
      title: "MarketMinds: Stock Analysis AI System",
      description: "Multi-agent AI system for automated stock research and analysis. Selects trending Indian companies for investment with sophisticated market analysis.",
      image: "/projects/MarketMinds.png?height=400&width=600",
      tags: ["Python", "CrewAI", "Stock Analysis", "Multi-Agent Systems", "Financial AI", "Market Research", "Investment Analysis"],
      category: "ai",
      featured: true,
      github: "https://github.com/AyushSid28/MarketMinds",
      demo: "https://github.com/AyushSid28/MarketMinds",
    },
    {
      title: "RecallFlow: Memory Management System",
      description: "Intelligent memory management system that enhances AI agent capabilities through advanced memory storage, retrieval, and context management.",
      image: "/projects/RecallFlow.png",
      tags: ["Python", "Memory Management", "AI Agents", "Context Management", "Data Retrieval", "Machine Learning"],
      category: "ai",
      featured: false,
      github: "https://github.com/AyushSid28/RecallFlow",
      demo: "https://github.com/AyushSid28/RecallFlow",
    },
    {
      title: "Learnix: AI-Powered E-Learning Platform",
      description: "Comprehensive e-learning platform built with Node.js, EJS, and JavaScript. Features modern web technologies for engaging educational experiences.",
      image: "/projects/Learnix.png?height=400&width=600",
      tags: ["Node.js", "EJS", "JavaScript", "CSS", "E-Learning", "Web Development", "Educational Platform"],
      category: "web",
      featured: false,
      github: "https://github.com/dsrocks12/LearnixAI",
      demo: "https://github.com/dsrocks12/LearnixAI",
    },
    {
      title: "Coach_LOOP: AI Coaching Platform",
      description: "AI-powered coaching platform providing personalized guidance across finance, relationships, and fitness domains with integrated payment systems.",
      image: "/projects/CoachLoop.png",
      tags: ["Python", "AI Coaching", "Feedback Systems", "Personalization", "Multi-Expertise", "Payment Integration", "Machine Learning"],
      category: "ai",
      featured: false,
      github: "https://github.com/AyushSid28/Coach_LOOP",
      demo: "https://github.com/AyushSid28/Coach_LOOP",
    },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.category === activeFilter)

  const filters = [
    { name: "All", value: "all" },
    { name: "Featured", value: "featured" },
    { name: "AI/ML", value: "ai" },
    { name: "Web", value: "web" },
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
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A selection of my recent work showcasing my skills in AI, machine learning, and full-stack development.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className={
                  activeFilter === filter.value
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0"
                    : "border-violet-500/50 text-violet-300 hover:bg-violet-500/10"
                }
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="overflow-hidden border-violet-500/20 bg-black/60 backdrop-blur-sm h-full flex flex-col transition-all duration-300 hover:border-violet-500/50 hover:translate-y-[-5px]">
                <div className="relative overflow-hidden h-48">
                  {project.featured && (
                    <div className="absolute top-0 right-0 z-10">
                      <Badge className="m-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div
                    className="absolute inset-0 bg-gray-900 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
                </div>

                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-violet-900/30 border border-violet-500/30 rounded-full text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-gray-800/30 border border-gray-600/30 rounded-full text-xs font-medium text-gray-400">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0 group w-full"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="link" className="text-violet-400 hover:text-violet-300 group" asChild>
            <a href="https://github.com/AyushSid28" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
