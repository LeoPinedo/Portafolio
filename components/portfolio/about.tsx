import { SectionHeading } from "./section-heading"

const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Python",
]

export function About() {
  return (
    <section id="about" className="py-24">
      <SectionHeading number="01" title="Sobre Mi" />
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="leading-relaxed text-muted-foreground">
            Soy un desarrollador apasionado por crear software que viva en
            internet. Mi interes en el desarrollo web comenzo cuando decidi
            personalizar una pagina web super simple, y resulta que modificar HTML y CSS
            me enseño mucho sobre como funciona la web.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Hoy en dia, tengo el privilegio de haber trabajado por ahora en dos proyectos que van desde aplicaciones empresariales hasta proyectos
            open source. Mi enfoque principal es construir productos digitales
            accesibles e inclusivos para una variedad de clientes.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Estas son algunas tecnologias con las que he trabajado recientemente:
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
              >
                <span className="text-primary">{">"}</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-start justify-center lg:justify-end">
          <div className="group relative">
            <div className="relative h-64 w-64 overflow-hidden rounded-lg bg-primary/10">
              <div className="flex h-full w-full items-center justify-center font-mono text-6xl text-primary/40">
                {"</>"}
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 h-64 w-64 rounded-lg border-2 border-primary/30 transition-all group-hover:-bottom-2 group-hover:-right-2" />
          </div>
        </div>
      </div>
    </section>
  )
}
