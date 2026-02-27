export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-sm text-primary">04. Contacto</p>
        <h2 className="mt-4 text-balance text-4xl font-bold text-foreground">
          Hablemos
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una
          pregunta, una propuesta o simplemente quieras saludar, hare lo posible
          por responderte.
        </p>
        <a
          href="mailto:tu@email.com"
          className="mt-10 inline-block rounded-lg border border-primary px-8 py-4 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
        >
          Enviar Mensaje
        </a>
      </div>
    </section>
  )
}
