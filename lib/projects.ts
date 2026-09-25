import { PROJECTS } from "@/app/constants";
import type { Project, ProjectImage } from "./project-types";

const portraits = new Set([
  "/images/Sawmill-Brewery/5.jpg",
  "/images/Healthcare-Logistics/21.jpg",
  "/images/Healthcare-Logistics/22.jpg",
  "/images/Aroa-Biosurgery/28.jpg",
  "/images/Tokyo-Foods/63.jpg",
  "/images/Tokyo-Foods/64.jpg",
]);

const projects: Project[] = PROJECTS.map((project): Project => {
  const gallery: ProjectImage[] = [...new Set(project.gallery)].map((src) => ({
    src,
    ...(portraits.has(src)
      ? { width: 3024, height: 4032 }
      : src.endsWith("34-tidied.png")
        ? { width: 1536, height: 1024 }
        : { width: 4032, height: 3024 }),
    alt: `${project.title} — ${project.category.toLowerCase()}`,
  }));
  return {
    ...project,
    image: gallery.find((photo) => photo.src === project.image) ?? null,
    gallery,
  };
}).sort((a, b) => (a.id === 5 ? 0 : a.id) - (b.id === 5 ? 0 : b.id));

export function getProjects() {
  return projects;
}

export function getProject(id: number) {
  return projects.find((project) => project.id === id) ?? null;
}
