# Imágenes de proyectos

Para reemplazar el placeholder `{ }` por una imagen en la sección **Proyectos**:

1. **Guarda aquí** una imagen por proyecto (por ejemplo: `zipago-landing.jpg`, `zipago-plataforma.jpg`, `zipago-app.jpg`).

2. **En `components/portfolio/projects.tsx`** asigna la ruta en cada proyecto:

```ts
image: "/projects/zipago-landing.jpg",   // primer proyecto
image: "/projects/zipago-plataforma.jpg", // segundo
image: "/projects/zipago-app.jpg",        // tercero
```

Las rutas empiezan por `/projects/` porque Next.js sirve lo que está en `public/` desde la raíz. Si dejas `image: null`, se seguirá mostrando el placeholder.

Formatos recomendados: **jpg**, **png** o **webp**. Relación 16:9 queda bien en el recuadro.
