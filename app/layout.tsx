import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import VoiceAssistant from "@/components/voice-assistant"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayush Siddhant - Backend Engineer & AI Systems Specialist | AyushSid.dev",
  description:
    "Backend Engineer & AI Systems Specialist with 2+ years experience in Python, FastAPI, LangGraph, and Agentic AI. Building scalable systems and next-generation AI solutions. View projects, experience, and skills.",
  keywords: [
    "Backend Engineer",
    "AI Systems Specialist", 
    "Python Developer",
    "FastAPI",
    "LangGraph",
    "Agentic AI",
    "Machine Learning",
    "MongoDB",
    "Redis",
    "AWS",
    "Portfolio"
  ],
  authors: [{ name: "Ayush Siddhant" }],
  creator: "Ayush Siddhant",
  openGraph: {
    title: "Ayush Siddhant - Backend Engineer & AI Systems Specialist",
    description: "Backend Engineer & AI Systems Specialist with 2+ years experience in Python, FastAPI, LangGraph, and Agentic AI.",
    url: "https://ayushsid.dev",
    siteName: "AyushSid.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Siddhant - Backend Engineer & AI Systems Specialist",
    description: "Backend Engineer & AI Systems Specialist with 2+ years experience in Python, FastAPI, LangGraph, and Agentic AI.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <VoiceAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}