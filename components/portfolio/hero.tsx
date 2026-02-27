import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-6 py-24 lg:px-0"
    >
      <p className="mb-4 font-mono text-sm text-primary">Hola, mi nombre es</p>
      <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Leonardo Pinedo Fernandez.
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        Soy un desarrollador de software especializado en construir experiencias
        digitales excepcionales. Actualmente enfocado en crear aplicaciones web
        accesibles y con optimizaciones.
      </p>
      <div className="mt-10 flex items-center gap-5">
        <a
          href="https://github.com/LeoPinedo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/leo-pinedo-453b7a21a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:leopinedofernandez@gmail.com"
          aria-label="Email"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
