import { SectionHeading } from "./section-heading"

const impactItems = [
  "Reduce seguimiento manual (Excel/WhatsApp disperso) en obra.",
  "Mejora trazabilidad de compromisos y minutas.",
  "Estandariza flujo de reuniones (actuales, historicas y papelera).",
  "Conecta operacion diaria (tareas) con decisiones (agenda/minuta).",
]

const imageNarrative = [
  "Dashboard general (vista de modulos/obra activa) - da contexto de la operacion diaria.",
  "Lista de reuniones con tabs (actuales, todas, papelera) - ordena historial y control de ciclo.",
  "Nueva reunion (fecha, zona horaria, privados, participantes, adjuntos) - evita omisiones al planear.",
  "Paso 3 agenda (temas/subtemas, drag and drop, prioridad, estatus, responsable) - estructura decisiones.",
  "Minuta o reunion abierta con compromisos y acciones - aterriza acuerdos en seguimiento.",
  "Kanban o tareas (asignacion, prioridad, estatus) - visibiliza avance por responsable.",
  "Carga de archivos en Drive y carpeta por obra - centraliza evidencia y documentacion.",
  "Vista movil o responsive - facilita operacion en campo.",
]

const stackGroups = [
  {
    title: "Frontend",
    items: [
      "Next.js (App Router)",
      "React + TypeScript",
      "Tailwind CSS",
      "Componentes UI tipo Radix/shadcn",
      "@hello-pangea/dnd",
      "react-dropzone",
      "sonner",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js + Express",
      "Prisma ORM",
      "PostgreSQL",
      "API REST con control de roles/permisos",
      "Soft delete y papelera en reuniones",
    ],
  },
  {
    title: "Auth e integraciones",
    items: [
      "NextAuth",
      "Google Drive API (carpetas por obra y adjuntos)",
      "Notificaciones por correo (Nodemailer / SendGrid)",
    ],
  },
  {
    title: "Buenas practicas",
    items: [
      "Migraciones versionadas con Prisma",
      "Type safety end-to-end con TypeScript",
      "Validaciones y reglas por estado (DRAFT/CLOSED) y permisos (ADMIN, etc.)",
    ],
  },
]

export function PlannerObras() {
  return (
    <section id="planner-obras" className="py-24">
      <SectionHeading number="04" title="Planner Obras" />

      <div className="space-y-8">
        <div className="rounded-lg bg-card p-6 shadow-lg shadow-background/40">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Planner Obras es una plataforma web para gestion de proyectos de
            construccion que centraliza tareas, reuniones, evidencias y
            documentacion. Permite coordinar equipos por obra, planear agendas,
            generar minutas, asignar responsables y fechas, y almacenar archivos
            en Google Drive con control por roles.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">Impacto</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {impactItems.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-secondary/30 p-4 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Flujo visual recomendado (6-8 capturas)
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {imageNarrative.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">Tecnologias</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-lg border border-border bg-secondary/20 p-4"
              >
                <p className="font-mono text-sm text-primary">{group.title}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
