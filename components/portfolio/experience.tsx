"use client"

import { useState } from "react"
import { SectionHeading } from "./section-heading"

const experiences = [
  {
    company: "Zigleet",
    role: "Desarrollador Junior",
    period: "2025 - Presente",
    description: [
      "Lideré el diseño y desarrollo de la app móvil Zipago Comercio, optimizando layouts para responsividad y usabilidad.",
      "Implementé mejoras técnicas en funcionalidades existentes y coordiné con diseño y marketing para traducir objetivos de negocio en soluciones de UX.",
      "Desarrollé y mejoré la landing page de servicios garantizando el cumplimiento de guías de marca.",
      "Contribuí al incremento del engagement de usuarios mediante mejoras de interfaz en las plataformas de Zipago Comercio.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "HTML", "CSS", "JavaScript"],
  },
  
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24">
      <SectionHeading number="02" title="Experiencia" />
      <div className="flex flex-col gap-6 md:flex-row md:gap-0">
        {/* Tab list */}
        <div
          className="flex overflow-x-auto border-b border-border md:flex-col md:border-b-0 md:border-l"
          role="tablist"
          aria-label="Experiencia laboral"
        >
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${index}`}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap px-5 py-3 text-left font-mono text-sm transition-colors md:border-l-2 md:border-b-0 ${
                activeTab === index
                  ? "border-b-2 border-primary bg-secondary/50 text-primary md:border-b-0 md:border-l-2"
                  : "border-b-2 border-transparent text-muted-foreground hover:bg-secondary/30 hover:text-foreground md:border-b-0 md:border-l-2"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        <div className="min-h-[320px] md:pl-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              id={`panel-${index}`}
              role="tabpanel"
              aria-labelledby={exp.company}
              className={activeTab === index ? "block" : "hidden"}
            >
              <h3 className="text-lg font-medium text-foreground">
                {exp.role}{" "}
                <span className="text-primary">{exp.company}</span>
              </h3>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                {exp.period}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {exp.description.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
