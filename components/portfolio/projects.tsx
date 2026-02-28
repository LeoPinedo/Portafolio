import { ExternalLink, Github, Folder } from "lucide-react"
import Image from "next/image"
import { SectionHeading } from "./section-heading"

const basePath = process.env.BASE_PATH || ""

const featuredProjects = [
  {
    title: "Desarrollo de landing page Zipago Comercio",
    description:
      "Un pagina de landing para llamar a los usuarios y convertirlos en proximos clientes, optimizado en rendimiento y accesibilidad todo siendo responsive.",
    technologies: ["React","Next.js", "Node.js", "Tailwind", "TypeScript"],
    external: "https://www.zipago.pe/",
    github: null as string | null,
    image: null as string | null, // Poner imagen en public/zipago-landing.png para mostrarla
  },
  {
    title: "Rediseño de la plataforma Zipago Comercio",
    description:
      "Una con un diseño nuevo respetando la paleta de colores del landing page de comercio con un mejor rendimiento y accesibilidad responsive.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    external: "https://www.zrelcloudadm.com/ZIPAGO_RECAUDO/ZIPAGO_WebApp",
    github: null as string | null,
    image: null as string | null, // public/zipago-plataforma.png
  },
  {
    title: "Desarrollo de aplicacion movil para Zipago Comercio (Android)",
    description:
      "Una aplicacion movil para que los usuarios puedan realizar consultas de sus pagos y gestiones de su cuenta, optimizado en rendimiento y accesibilidad todo siendo responsive para moviles",
    technologies: ["React","Next.js", "Node.js", "WebSockets", "Android","MYSQL","Jwt","Java","Kotlin"],
    image: null as string | null, // public/zipago-movil.png
  },
]

{/*
const otherProjects = [
  {
    title: "CLI de Gestion de Tareas",
    description:
      "Herramienta de linea de comandos para gestionar tareas y proyectos con integracion a GitHub Issues.",
    technologies: ["Node.js", "Commander", "Chalk"],
    github: "https://github.com",
  },
  {
    title: "API REST de Blog",
    description:
      "API RESTful para un sistema de blog con autenticacion JWT, roles de usuario y CRUD completo.",
    technologies: ["Express", "PostgreSQL", "JWT"],
    github: "https://github.com",
  },
  {
    title: "Componentes UI",
    description:
      "Biblioteca de componentes reutilizables construida con React y Storybook para equipos de desarrollo.",
    technologies: ["React", "Storybook", "CSS Modules"],
    github: "https://github.com",
  },
  {
    title: "Generador de Markdown",
    description:
      "Aplicacion web que convierte datos estructurados en documentos Markdown con vista previa en tiempo real.",
    technologies: ["TypeScript", "React", "Marked"],
    github: "https://github.com",
  },
]
*/}
export function Projects() {
  return (
    <section id="projects" className="py-24">
      <SectionHeading number="03" title="Proyectos" />

      {/* Featured Projects */}
      <div className="flex flex-col gap-24">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-secondary lg:w-3/5">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-primary/5">
                  <span className="font-mono text-4xl text-primary/20">
                    {"{ }"}
                  </span>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div
              className={`relative z-10 flex flex-col lg:w-2/5 ${
                index % 2 !== 0
                  ? "lg:items-start lg:text-left"
                  : "lg:items-end lg:text-right"
              }`}
            >
              <p className="font-mono text-sm text-primary">
                Proyecto Destacado
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-foreground">
                {project.title}
              </h3>
              <div className="mt-4 rounded-lg bg-card p-5 shadow-lg shadow-background/50">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <ul
                className={`mt-4 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground ${
                  index % 2 !== 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver codigo de ${project.title}`}
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demo de ${project.title}`}
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      {/*
      <h3 className="mt-24 text-center text-2xl font-semibold text-foreground">
        Otros Proyectos Notables
      </h3>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {otherProjects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col rounded-lg bg-card p-6 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <Folder className="h-10 w-10 text-primary" />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver codigo de ${project.title}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <h4 className="mt-5 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h4>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      */}
    </section>
  )
}
