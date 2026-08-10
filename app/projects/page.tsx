import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PROJECTS } from "../constants";

export const metadata: Metadata = {
  title: "Completed Work",
  description:
    "Explore completed commercial cool-room and insulated-panel environments by The Panel Guys.",
};

const PORTRAIT_IMAGES = new Set([
  "/images/Sawmill-Brewery/5.jpg",
  "/images/Healthcare-Logistics/21.jpg",
  "/images/Healthcare-Logistics/22.jpg",
  "/images/Aroa-Biosurgery/28.jpg",
  "/images/Tokyo-Foods/63.jpg",
  "/images/Tokyo-Foods/64.jpg",
]);

function getImageDimensions(src: string) {
  if (PORTRAIT_IMAGES.has(src)) {
    return { width: 3024, height: 4032 };
  }

  if (src.endsWith("34-tidied.png")) {
    return { width: 1536, height: 1024 };
  }

  return { width: 4032, height: 3024 };
}

function getProjectCaption(project: (typeof PROJECTS)[number]) {
  return [project.category, project.location].filter(Boolean).join(" / ");
}

export default function Projects() {
  const primorIndex = PROJECTS.findIndex(
    (project) => project.title === "Primor Produce",
  );
  const leadProject = PROJECTS[primorIndex >= 0 ? primorIndex : 0];
  const remainingProjects = PROJECTS.filter(
    (project) => project.id !== leadProject?.id,
  );

  return (
    <div className="min-h-screen bg-[#f2f4f2] text-[#11161a]">
      <Navbar />

      <main>
        <header className="border-b border-[#11161a]/25 pt-36 sm:pt-40 lg:pt-48">
          <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-x-5 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-x-8 lg:px-12 lg:pb-24">
            <p className="col-span-4 mb-8 font-display text-xs font-semibold uppercase tracking-[0.22em] text-[#11161a]/60 lg:col-span-3 lg:mb-0">
              Work / Project index
            </p>
            <div className="col-span-4 lg:col-span-8 lg:col-start-5">
              <h1 className="max-w-4xl font-display text-[clamp(3.25rem,7.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.035em]">
                Selected environments
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#11161a]/70 sm:text-xl">
                A photographic index of completed cool-room and insulated-panel
                projects.
              </p>
            </div>
          </div>
        </header>

        {leadProject && (
          <section
            aria-labelledby={`project-${leadProject.id}`}
            className="border-b border-[#11161a]/25 py-16 sm:py-20 lg:py-28"
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-x-5 px-5 sm:px-8 lg:grid-cols-12 lg:gap-x-8 lg:px-12">
              <div className="col-span-4 lg:col-span-9">
                <Link
                  href={`/projects/${leadProject.id}`}
                  className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#11161a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f2f4f2]"
                  aria-label={`View ${leadProject.title} project`}
                >
                  <Image
                    src={leadProject.image}
                    alt={`${leadProject.title} completed ${leadProject.category.toLowerCase()} environment`}
                    {...getImageDimensions(leadProject.image)}
                    priority
                    sizes="(min-width: 1024px) 72vw, 100vw"
                    className="h-auto w-full bg-[#d9dedd] object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.01]"
                  />
                </Link>
              </div>

              <div className="col-span-4 mt-7 self-end lg:col-span-3 lg:mt-0">
                <p className="border-t border-[#11161a] pt-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#11161a]/60">
                  01 / {getProjectCaption(leadProject)}
                </p>
                <h2
                  id={`project-${leadProject.id}`}
                  className="mt-5 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-5xl"
                >
                  <Link
                    href={`/projects/${leadProject.id}`}
                    className="underline decoration-transparent underline-offset-8 transition-colors hover:decoration-[#50b5ed] focus-visible:outline-none focus-visible:decoration-[#50b5ed]"
                  >
                    {leadProject.title}
                  </Link>
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-[#11161a]/70">
                  {leadProject.description}
                </p>
                <Link
                  href={`/projects/${leadProject.id}`}
                  className="mt-7 inline-flex min-h-11 items-center border-b border-[#11161a] font-display text-sm font-semibold uppercase tracking-[0.16em] outline-none transition-colors hover:border-[#50b5ed] hover:text-[#11161a]/65 focus-visible:ring-2 focus-visible:ring-[#11161a]"
                >
                  View project <span aria-hidden="true" className="ml-3">↗</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        <section aria-label="More completed projects">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            {remainingProjects.map((project, index) => {
              const imageDimensions = getImageDimensions(project.image);
              const isPortrait = imageDimensions.height > imageDimensions.width;
              const alignRight = index % 2 === 1;
              const wide = !isPortrait && index % 4 === 0;
              const imageColumns = wide
                ? "lg:col-span-9"
                : isPortrait
                  ? "lg:col-span-5"
                  : "lg:col-span-7";
              const imageStart = alignRight
                ? isPortrait
                  ? "lg:col-start-8"
                  : "lg:col-start-6"
                : "lg:col-start-1";
              const copyStart = alignRight
                ? "lg:col-start-1"
                : isPortrait
                  ? "lg:col-start-7"
                  : wide
                    ? "lg:col-start-10"
                    : "lg:col-start-9";
              const copyColumns = wide
                ? "lg:col-span-3"
                : isPortrait
                  ? "lg:col-span-5"
                  : "lg:col-span-4";

              return (
                <article
                  key={project.id}
                  aria-labelledby={`project-${project.id}`}
                  className="grid grid-cols-4 gap-x-5 border-b border-[#11161a]/25 py-16 sm:py-20 lg:grid-cols-12 lg:gap-x-8 lg:py-28"
                >
                  <div
                    className={`col-span-4 ${imageColumns} ${imageStart} ${alignRight ? "lg:order-2" : ""}`}
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#11161a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f2f4f2]"
                      aria-label={`View ${project.title} project`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} completed ${project.category.toLowerCase()} environment`}
                        {...imageDimensions}
                        sizes={
                          isPortrait
                            ? "(min-width: 1024px) 42vw, 100vw"
                            : wide
                              ? "(min-width: 1024px) 72vw, 100vw"
                              : "(min-width: 1024px) 58vw, 100vw"
                        }
                        className="h-auto w-full bg-[#d9dedd] object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.01]"
                      />
                    </Link>
                  </div>

                  <div
                    className={`col-span-4 mt-7 self-end ${copyColumns} ${copyStart} ${alignRight ? "lg:row-start-1 lg:mt-0" : "lg:mt-0"}`}
                  >
                    <p className="border-t border-[#11161a] pt-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#11161a]/60">
                      {String(index + 2).padStart(2, "0")} /{" "}
                      {getProjectCaption(project)}
                    </p>
                    <h2
                      id={`project-${project.id}`}
                      className="mt-5 font-display text-[clamp(2.35rem,4.5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.03em]"
                    >
                      <Link
                        href={`/projects/${project.id}`}
                        className="underline decoration-transparent underline-offset-8 transition-colors hover:decoration-[#50b5ed] focus-visible:outline-none focus-visible:decoration-[#50b5ed]"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-7 text-[#11161a]/70">
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.id}`}
                      className="mt-7 inline-flex min-h-11 items-center border-b border-[#11161a] font-display text-sm font-semibold uppercase tracking-[0.16em] outline-none transition-colors hover:border-[#50b5ed] hover:text-[#11161a]/65 focus-visible:ring-2 focus-visible:ring-[#11161a]"
                    >
                      View project <span aria-hidden="true" className="ml-3">↗</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[#11161a] text-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-x-5 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-x-8 lg:px-12 lg:py-24">
            <p className="col-span-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-white/55 lg:col-span-3">
              Start a conversation
            </p>
            <div className="col-span-4 mt-8 lg:col-span-7 lg:col-start-5 lg:mt-0">
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-6xl">
                Planning a controlled environment?
              </h2>
              <Link
                href="/contact"
                className="mt-9 inline-flex min-h-12 items-center bg-[#50b5ed] px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-[#11161a] outline-none transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#11161a]"
              >
                Discuss a project <span aria-hidden="true" className="ml-4">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
