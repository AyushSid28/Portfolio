import { type NextRequest, NextResponse } from "next/server"
import Groq from "groq-sdk"

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "dummy-key",
})

// System prompt with Ayush's information
const SYSTEM_PROMPT = `You are a personal AI assistant for Ayush Siddhant, a Backend Engineer & AI Systems Specialist.

Provide short, helpful responses (1–2 lines max) about Ayush and his work.

Here's information about Ayush:

PERSONAL INFO:
- Name: Ayush Siddhant
- Pronouns: He/Him
- Email: ayushsiddhant2@gmail.com
- Phone: +91 9661474996
- Location: Pune, India
- GitHub: https://github.com/AyushSid28
- LinkedIn: https://www.linkedin.com/in/ayush-siddhant-5790981a9/
- Instagram: https://www.instagram.com/_iayusshh_/

EDUCATION:
- B.Tech in Computer Science & Engineering at Symbiosis Institute of Technology, Pune
- Strong foundation in computer science and AI technologies

SUMMARY:
Ayush is a Backend Engineer & AI Systems Specialist with expertise in building scalable backend systems and integrating next-generation AI solutions. He has 27+ repositories showcasing AI & Agentic Systems work, with professional experience at MINTRIX, Dream Skrin, and Qlaws.ai.

TECHNICAL SKILLS:
Languages: Python, C++, Java, Flutter, JavaScript
Databases: MongoDB, PostgreSQL, MySQL, Weaviate, SQLite, Redis
Technologies & Frameworks: Node.js, React, Flask, FastAPI, Streamlit, LangChain, WebSockets
AI/ML & GenAI: LLMs, Transformer Architectures, GenAI, Machine Learning, Deep Learning, NLP, RAG
Agents Framework: OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, MCP
DevOps: Docker, Kubernetes, CI/CD, Apache Kafka, Prometheus, Grafana

PROFESSIONAL EXPERIENCE:
1. **Qlaws.ai – Legal Solution (May 2025 - August 2025)**
   - Implemented AI-powered legal document processing system
   - Refactored summarization pipeline and migrated to Weaviate vector database
   - Developed drafting agent automating LOI to SPA document creation
   - Designed dual-architecture chatbot (Redis/PostgreSQL) for legal document queries

2. **Dream Skrin – D2C Solution (April 2025 - May 2025)**
   - Built intelligence layer for supply chain and inventory optimization
   - Designed distributed Central Intelligence Layer unifying supply chain operations
   - Developed real-time demand forecasting using XGBoost
   - Optimized vendor allocation and routing using OR-Tools, reducing delivery delays by 30%

3. **MINTRIX – AI-Based Learning (Nov 2024 - May 2025)**
   - Developed RAG chatbot and CRM integration for learning platform
   - Enhanced user interaction through AI chatbot with Retrieval-Augmented Generation
   - Implemented CRM integration to capture and analyze user engagement data
   - Built adaptive learning algorithms to personalize educational content

PROJECTS:
1. **SiteForge – Agentic Website Development**
   - Engineered autonomous agent team (Designer, Frontend, Backend, Tester)
   - Technologies: CrewAI, OpenAI, Jinja2

2. **MarketMinds – Stock Analysis Agents**
   - Developed multi-agent system for market insights with 85% accuracy
   - Technologies: LangChain, OpenAI, CrewAI

3. **Learnix – AI-Powered E-Learning**
   - Built comprehensive school management system with RAG chatbot
   - Technologies: Node.js, React, MongoDB, LangChain

CERTIFICATIONS:
- Oracle Generative AI Course (2025)

INTERESTS:
- Building scalable backend systems
- AI & Agentic Systems development
- Legal tech and document processing
- Multi-agent systems and AI orchestration

`;



export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === "dummy-key") {
      return NextResponse.json({ 
        response: "Goku is not configured yet. Please set up the GROQ_API_KEY environment variable to enable AI chat functionality." 
      })
    }

    const { messages } = await request.json()

    // Add the system prompt
    const fullMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...messages,
    ]

    // Call Groq API with Llama model
    const completion = await groq.chat.completions.create({
      messages: fullMessages,
      model: "llama-3.3-70b-versatile", // Groq's Llama model
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    })

    // Return the response
    return NextResponse.json({
      response: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error("Error calling Groq API:", error)
    return NextResponse.json({ 
      response: "Goku is having trouble connecting right now. Please try again later or check the API configuration." 
    })
  }
}
