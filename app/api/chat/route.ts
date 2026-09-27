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
Ayush is a Backend Engineer & AI Systems Specialist with expertise in building scalable backend systems and integrating next-generation AI solutions. He has 27+ repositories showcasing AI & Agentic Systems work, with professional experience at MINTRIX, Dream Skrin, Qlaws.ai, and TheAgentic.

TECHNICAL SKILLS:
Languages: Python, C++, Java, Flutter, JavaScript
Databases: MongoDB, PostgreSQL, MySQL, Weaviate, SQLite, Redis
Technologies & Frameworks: Node.js, React, Flask, FastAPI, Streamlit, LangChain, WebSockets
AI/ML & GenAI: LLMs, Transformer Architectures, GenAI, Machine Learning, Deep Learning, NLP, RAG
Agents Framework: OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, MCP
DevOps: Docker, Kubernetes, CI/CD, Apache Kafka, Prometheus, Grafana

PROFESSIONAL EXPERIENCE:
1. **TheAgentic – Backend Engineer (September 2025 - Present)**
   - FastAPI and LangGraph services for automated workflows
   - Risk pipeline aggregating market data into token assessments
   - Embedding-based semantic search for candidate-job matching

2. **Qlaws.ai – Legal Solution (January 2025 - August 2025)**
   - Implemented AI-powered legal document processing system
   - Refactored summarization pipeline and migrated to Weaviate vector database
   - Developed drafting agent automating LOI to SPA document creation
   - Designed dual-architecture chatbot (Redis/PostgreSQL) for legal document queries

3. **Dream Skrin – Supply Chain Intelligence, Internship (October 2024 - January 2025)**
   - Built intelligence layer for supply chain and inventory optimization
   - Designed distributed Central Intelligence Layer unifying supply chain operations
   - Developed real-time demand forecasting using XGBoost
   - Optimized vendor allocation and routing using OR-Tools, reducing delivery delays by 30%

4. **MINTRIX – AI-Based Learning, Internship (May 2024 - October 2024)**
   - Developed RAG chatbot and CRM integration for learning platform
   - Enhanced user interaction through AI chatbot with Retrieval-Augmented Generation
   - Implemented CRM integration to capture and analyze user engagement data
   - Built adaptive learning algorithms to personalize educational content

PROJECTS:
1. **GridLocalizer** — outage localization from pole telemetry. Live: https://gridlocalizer.vercel.app
2. **KilnDB** — storage engine from scratch (WAL, MVCC, B+ trees). Live: https://kilndb.onrender.com
3. **PuneRentals** — map-first rental intelligence. Live: https://pune-rent-three.vercel.app
4. **FinShield** — multi-agent fraud detection. Live: https://finshield-bibp.onrender.com
5. **TrialSync** — clinical trial patient matching with text-to-SQL and scoring agents. https://github.com/AyushSid28/TrialSync
6. **HealthSync AI** — LangGraph clinical report pipeline. https://github.com/AyushSid28/HealthSyncAI
7. **ParcelPilot Support** — grounded support copilot. Live: https://parcelpilotsupport.onrender.com
Also: DirectMesh, RecallFlow, GeoPulse, onchain-scout, Summarization Agent, SiteForge.

Two resumes: Backend CV at /resume.pdf and AI CV at /resume-ai.pdf.

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
