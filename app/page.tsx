import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { PlannerObras } from "@/components/portfolio/planner-obras"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <PlannerObras />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
