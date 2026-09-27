"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Project = {
  title: string
  description: string
  image?: string
  monogram: string
  accent: string
  tags: string[]
  category: "ai" | "systems" | "web"
  featured: boolean
  github: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "GridLocalizer",
    description:
      "Control-room backend that turns noisy pole telemetry into one localized outage ticket per real fault, at span, transformer, or feeder level, with restore-gated closure.",
    monogram: "GL",
    accent: "from-amber-500/30 to-orange-600/10",
    tags: ["Python", "FastAPI", "Redis Streams", "PostgreSQL", "React", "Docker"],
    category: "systems",
    featured: true,
    github: "https://github.com/AyushSid28/GridLocalizer",
    demo: "https://gridlocalizer.vercel.app",
  },
  {
    title: "KilnDB",
    description:
      "Relational storage engine written from scratch: write-ahead logging, crash recovery, B+ tree indexes, MVCC, and a live console for injecting crashes and checking invariants.",
    monogram: "KD",
    accent: "from-orange-500/30 to-red-600/10",
    tags: ["Python", "WAL", "MVCC", "B+ Trees", "Crash Recovery"],
    category: "systems",
    featured: true,
    github: "https://github.com/AyushSid28/KilnDB",
    demo: "https://kilndb.onrender.com",
  },
  {
    title: "PuneRentals",
    description:
      "Map-first rental intelligence for Pune: society-level rent, deposits, and bachelor-access signals, with PostgreSQL aggregations, Redis caching, and confidence scoring.",
    monogram: "PR",
    accent: "from-emerald-500/30 to-teal-600/10",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "MapLibre", "Redis"],
    category: "web",
    featured: true,
    github: "https://github.com/AyushSid28/PuneRentals",
    demo: "https://pune-rent-three.vercel.app",
  },
  {
    title: "FinShield",
    description:
      "Multi-agent fraud system. Behavioral, temporal, geo, and device agents score a transaction, then a LangGraph decision agent returns allow, review, or block.",
    monogram: "FS",
    accent: "from-violet-500/30 to-fuchsia-600/10",
    tags: ["Python", "LangGraph", "FastAPI", "Groq", "React"],
    category: "ai",
    featured: true,
    github: "https://github.com/AyushSid28/FinShield",
    demo: "https://finshield-bibp.onrender.com",
  },
  {
    title: "TrialSync",
    description:
      "Clinical-trial matching pipeline: text-to-SQL prefilter, stemming search, demographic filters, and a scoring agent that ranks patients with an audit trail.",
    monogram: "TS",
    accent: "from-sky-500/30 to-indigo-600/10",
    tags: ["Python", "FastAPI", "PostgreSQL", "Text-to-SQL", "LLM Agents"],
    category: "ai",
    featured: true,
    github: "https://github.com/AyushSid28/TrialSync",
  },
  {
    title: "HealthSync AI",
    description:
      "LangGraph pipeline that turns clinical notes and lab values into a structured health report, with a validator loop, PDF output, and a Next.js dashboard.",
    monogram: "HS",
    accent: "from-cyan-500/30 to-blue-600/10",
    tags: ["LangGraph", "FastAPI", "Claude", "Next.js", "Supabase"],
    category: "ai",
    featured: true,
    github: "https://github.com/AyushSid28/HealthSyncAI",
  },
  {
    title: "ParcelPilot Support",
    description:
      "Grounded support copilot for orders, cancellations, and SLAs. Policy is computed in code, customer data stays isolated, and actions queue only after confirmation.",
    monogram: "PP",
    accent: "from-lime-500/30 to-emerald-600/10",
    tags: ["Python", "FastAPI", "Groq", "React"],
    category: "ai",
    featured: false,
    github: "https://github.com/AyushSid28/ParcelPilotSupport",
    demo: "https://parcelpilotsupport.onrender.com",
  },
  {
    title: "onchain-scout",
    description:
      "Crypto risk backend that scores social profiles, tweet-level scam patterns, and token market signals, with persisted analysis history.",
    monogram: "OC",
    accent: "from-fuchsia-500/30 to-purple-700/10",
    tags: ["Python", "FastAPI", "PostgreSQL", "LLM Agents"],
    category: "ai",
    featured: false,
    github: "https://github.com/AyushSid28/onchain-scout",
  },
  {
    title: "GeoPulse",
    description:
      "Train tracking backend and app: live status, route maps, station alerts, and natural-language queries, with Redis caching for repeated checks.",
    monogram: "GP",
    accent: "from-blue-500/30 to-cyan-700/10",
    tags: ["FastAPI", "PostgreSQL", "Redis", "React", "Groq"],
    category: "systems",
    featured: false,
    github: "https://github.com/AyushSid28/GeoPulse",
  },
  {
    title: "DirectMesh",
    description:
      "Omnichannel D2C agents for WhatsApp, email, SMS, and web chat, with RFM segmentation and analytics on customer events.",
    image: "/projects/DirectMash.png",
    monogram: "DM",
    accent: "from-violet-500/30 to-fuchsia-600/10",
    tags: ["Python", "FastAPI", "PostgreSQL", "AI Agents"],
    category: "ai",
    featured: false,
    github: "https://github.com/AyushSid28/DirectMesh",
  },
  {
    title: "RecallFlow",
    description:
      "Persistent memory backend for agent chats: cross-session retrieval, streaming replies, memory decay, and deletion APIs.",
    image: "/projects/RecallFlow.png",
    monogram: "RF",
    accent: "from-indigo-500/30 to-violet-700/10",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    category: "ai",
    featured: false,
    github: "https://github.com/AyushSid28/RecallFlow",
  },
  {
    title: "Summarization Agent",
    description:
      "Legal-document summarization with LangGraph: extraction, summary, and feedback agents, plus a web API and Prometheus monitoring.",
    monogram: "SA",
    accent: "from-rose-500/30 to-orange-700/10",
    tags: ["Python", "LangGraph", "Weaviate", "RAG"],
    category: "ai",
    featured: false,
    github: "https://github.com/AyushSid28/Summarization_Agent",
  },
  {
    title: "SiteForge",
    description:
      "Multi-agent system that turns a prompt into a website, with separate design, frontend, backend, and QA roles.",
    image: "/projects/SiteForge.png",
    monogram: "SF",
    accent: "from-fuchsia-500/30 to-pink-700/10",
    tags: ["Python", "CrewAI", "OpenAI", "Multi-Agent"],
    category: "ai",
    featured: false,
    github: "https://github.com/AyushSid28/SiteForge",
  },
  {
    title: "MarketMinds",
    description:
      "Crew that researches trending companies and writes an investment-style analysis from researcher, analyst, and reporter roles.",
    image: "/projects/MarketMinds.png",
    monogram: "MM",
    accent: "from-amber-500/20 to-yellow-700/10",
    tags: ["Python", "CrewAI", "Stock Analysis"],
    category: "ai",
    featured: false,
    github: "https://github.com/AyushSid28/MarketMinds",
  },
]

const filters = [
  { name: "All", value: "all" },
  { name: "Featured", value: "featured" },
  { name: "AI", value: "ai" },
  { name: "Systems", value: "systems" },
  { name: "Web", value: "web" },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("featured")
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.category === activeFilter)

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
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
            Systems work from the backend resume, plus agent pipelines aimed at AI roles. Live demos open where a deploy exists.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveFilter(filter.value)
                  setShowAll(false)
                }}
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
          {visibleProjects.map((project) => (
            <motion.div key={project.title} variants={item} className="group">
              <Card className="overflow-hidden border-violet-500/20 bg-black/60 backdrop-blur-sm h-full flex flex-col transition-all duration-300 hover:border-violet-500/50 hover:-translate-y-1">
                <div className="relative overflow-hidden h-44">
                  {project.featured && (
                    <div className="absolute top-0 right-0 z-10">
                      <Badge className="m-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0">
                        Featured
                      </Badge>
                    </div>
                  )}
                  {project.image ? (
                    <div
                      className="absolute inset-0 bg-gray-900 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex items-center justify-center`}>
                      <span className="text-5xl font-semibold tracking-tight text-white/80">{project.monogram}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs uppercase tracking-wider text-white/70">
                    {project.category === "ai" ? "AI" : project.category === "systems" ? "Systems" : "Web"}
                  </span>
                </div>

                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-violet-900/30 border border-violet-500/30 rounded-full text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button size="sm" variant="outline" className="border-violet-500/40 text-violet-200 hover:bg-violet-500/10 flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0 flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length > 6 && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Show fewer" : `Show ${filteredProjects.length - 6} more`}
            </Button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button variant="link" className="text-violet-400 hover:text-violet-300 group" asChild>
            <a href="https://github.com/AyushSid28" className="flex items-center">
              View GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
