import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { getProject, getProjects } from "@/lib/projects";
import type { Project } from "@/lib/project-types";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

function parseProjectId(id: string) {
  const projectId = Number(id);
  return /^[1-9]\d*$/.test(id) && Number.isSafeInteger(projectId)
    ? projectId
    : null;
}

function getProjectCaption(project: Project) {
  return [project.category, project.location].filter(Boolean).join(" / ");
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const projectId = parseProjectId(id);
  const project = projectId === null ? null : getProject(projectId);

  if (!project?.image) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectId = parseProjectId(id);
  if (projectId === null) notFound();
  const project = getProject(projectId);
  const projects = getProjects();

  if (!project?.image) {
    notFound();
  }

  const visibleProjects = projects.filter((candidate) => candidate.image !== null);
  const projectIndex = visibleProjects.findIndex(
    (candidate) => candidate.id === project.id,
  );
  const previousProject =
    visibleProjects[(projectIndex - 1 + visibleProjects.length) % visibleProjects.length];
  const nextProject = visibleProjects[(projectIndex + 1) % visibleProjects.length];
  const supportingImages = project.gallery.filter(
    (image, index, images) =>
      image.src !== project.image?.src &&
      images.findIndex((candidate) => candidate.src === image.src) === index,
  );
  const showProjectNavigation = projectIndex >= 0 && visibleProjects.length > 1;

  return (
    <div className="min-h-screen bg-[#f2f4f2] text-[#11161a]">
      <Navbar />

      <main>
        <div className="border-b border-[#11161a]/25 pt-32 sm:pt-36">
          <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#11161a]/55">
                <li>
                  <Link
                    href="/projects"
                    className="outline-none transition-colors hover:text-[#11161a] focus-visible:ring-2 focus-visible:ring-[#11161a]"
                  >
                    Work
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#11161a]" aria-current="page">
                  {project.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <article>
          <header className="border-b border-[#11161a]/25 py-12 sm:py-16 lg:py-24">
            <div className="mx-auto grid max-w-[1440px] grid-cols-4 items-start gap-x-5 gap-y-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-x-8 lg:px-12">
              <div className="col-span-4 lg:col-span-4 lg:sticky lg:top-32">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#11161a]/60">
                  {getProjectCaption(project)}
                </p>
                <h1 className="mt-6 font-display text-[clamp(3.2rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.04em]">
                  {project.title}
                </h1>
                <p className="mt-8 max-w-lg whitespace-pre-line text-lg leading-8 text-[#11161a]/72">
                  {project.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex min-h-12 items-center button-primary px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#11161a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f2f4f2]"
                >
                  Discuss a project <span aria-hidden="true" className="ml-4">→</span>
                </Link>
              </div>

              <figure className="col-span-4 lg:col-span-8 lg:col-start-5">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="h-auto w-full bg-[#d9dedd] object-cover"
                />
                <figcaption className="mt-3 flex justify-between gap-4 border-t border-[#11161a] pt-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#11161a]/55">
                  <span>{project.title}</span>
                  <span>Primary view / 01</span>
                </figcaption>
              </figure>
            </div>
          </header>

          <section
            aria-labelledby="project-record"
            className="border-b border-[#11161a]/25 py-16 sm:py-20 lg:py-28"
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-x-5 gap-y-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-x-8 lg:px-12">
              <div className="col-span-4 lg:col-span-3">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[#11161a]/55">
                  Project record
                </p>
                <h2
                  id="project-record"
                  className="mt-5 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em]"
                >
                  The brief
                </h2>
              </div>

              <div className="col-span-4 lg:col-span-5 lg:col-start-5">
                <p className="whitespace-pre-line text-xl leading-9 text-[#11161a]/78">
                  {project.description}
                </p>
              </div>

              <dl className="col-span-4 border-t border-[#11161a] lg:col-span-3 lg:col-start-10">
                <div className="grid grid-cols-2 gap-4 border-b border-[#11161a]/25 py-4">
                  <dt className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#11161a]/50">
                    Project
                  </dt>
                  <dd className="text-sm font-medium">{project.title}</dd>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-[#11161a]/25 py-4">
                  <dt className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#11161a]/50">
                    Sector
                  </dt>
                  <dd className="text-sm font-medium">{project.category}</dd>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-[#11161a]/25 py-4">
                  <dt className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#11161a]/50">
                    Location
                  </dt>
                  <dd className="text-sm font-medium">{project.location}</dd>
                </div>
              </dl>
            </div>
          </section>

          {supportingImages.length > 0 && (
            <section
              aria-labelledby="supporting-views"
              className="border-b border-[#11161a]/25 py-16 sm:py-20 lg:py-28"
            >
              <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-4 gap-x-5 lg:grid-cols-12 lg:gap-x-8">
                  <p className="col-span-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-[#11161a]/55 lg:col-span-3">
                    Supporting views
                  </p>
                  <h2
                    id="supporting-views"
                    className="col-span-4 mt-5 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] lg:col-span-7 lg:col-start-5 lg:mt-0 sm:text-5xl"
                  >
                    The completed environment, from more than one line of sight.
                  </h2>
                </div>

                <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-24">
                  {supportingImages.map((image, index) => {
                    const isPortrait = image.height > image.width;
                    const alignRight = index % 2 === 1;

                    return (
                      <figure
                        key={image.src}
                        className="grid grid-cols-4 gap-x-5 lg:grid-cols-12 lg:gap-x-8"
                      >
                        <div
                          className={`col-span-4 ${
                            isPortrait ? "lg:col-span-6" : "lg:col-span-9"
                          } ${
                            alignRight
                              ? isPortrait
                                ? "lg:col-start-7"
                                : "lg:col-start-4"
                              : "lg:col-start-1"
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            sizes={
                              isPortrait
                                ? "(min-width: 1024px) 50vw, 100vw"
                                : "(min-width: 1024px) 72vw, 100vw"
                            }
                            className="h-auto w-full bg-[#d9dedd] object-cover"
                          />
                          <figcaption className="mt-3 flex justify-between gap-4 border-t border-[#11161a] pt-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#11161a]/55">
                            <span>{getProjectCaption(project)}</span>
                            <span>
                              View / {String(index + 2).padStart(2, "0")}
                            </span>
                          </figcaption>
                        </div>
                      </figure>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {showProjectNavigation && <nav
            aria-label="Project navigation"
            className="border-b border-[#11161a]/25"
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
              <Link
                href={`/projects/${previousProject.id}`}
                className="group border-b border-[#11161a]/25 px-5 py-12 outline-none transition-colors hover:bg-white focus-visible:bg-white sm:px-8 lg:border-r lg:border-b-0 lg:px-12 lg:py-16"
              >
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#11161a]/50">
                  ← Previous project
                </span>
                <span className="mt-4 block font-display text-3xl font-semibold leading-none tracking-[-0.02em] underline decoration-transparent underline-offset-8 transition-colors group-hover:decoration-brand-navy group-focus-visible:decoration-brand-navy sm:text-4xl">
                  {previousProject.title}
                </span>
              </Link>

              <Link
                href={`/projects/${nextProject.id}`}
                className="group px-5 py-12 text-left outline-none transition-colors hover:bg-white focus-visible:bg-white sm:px-8 lg:px-12 lg:py-16 lg:text-right"
              >
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#11161a]/50">
                  Next project →
                </span>
                <span className="mt-4 block font-display text-3xl font-semibold leading-none tracking-[-0.02em] underline decoration-transparent underline-offset-8 transition-colors group-hover:decoration-brand-navy group-focus-visible:decoration-brand-navy sm:text-4xl">
                  {nextProject.title}
                </span>
              </Link>
            </div>
          </nav>}

          <section className="bg-[#11161a] text-white">
            <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-x-5 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-x-8 lg:px-12 lg:py-24">
              <p className="col-span-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-white/55 lg:col-span-3">
                Enquiry
              </p>
              <div className="col-span-4 mt-8 lg:col-span-7 lg:col-start-5 lg:mt-0">
                <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-6xl">
                  Have a project to discuss?
                </h2>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex min-h-12 items-center bg-white px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy outline-none transition-colors hover:bg-panel-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#11161a]"
                >
                  Contact The Panel Guys <span aria-hidden="true" className="ml-4">→</span>
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
