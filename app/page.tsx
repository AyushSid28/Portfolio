import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Timeline from "@/components/timeline"
import Experience from "@/components/experience"
import HeroWebGL from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradients and effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black -z-10"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-10 -z-10"></div>

      <Navbar />
      <HeroWebGL />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
