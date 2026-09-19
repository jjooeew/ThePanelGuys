import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CAPABILITIES, CONTACT_INFO, PROJECTS, ROUTES, TESTIMONIALS } from "./constants";

const projectById = (id: number) => {
  const project = PROJECTS.find((item) => item.id === id);
  if (!project) throw new Error(`Missing project ${id}`);
  return project;
};

const primor = projectById(5);
const healthcare = projectById(3);
const aroa = projectById(4);
const testimonial = TESTIMONIALS[0];

function ProjectCaption({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: string;
}) {
  return (
    <figcaption className="grid grid-cols-[auto_1fr] gap-4 border-t panel-rule pt-4">
      <span className="font-display text-sm font-semibold tabular-nums">{index}</span>
      <span className="flex flex-col gap-1">
        <span className="font-display text-xl font-semibold leading-none">
          {project.title}
        </span>
        <span className="text-sm text-graphite/60">
          {project.category} / {project.location}
        </span>
      </span>
    </figcaption>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="border-b panel-rule pt-28 lg:pt-32">
        <div className="casebook-container grid min-h-[calc(100svh-8rem)] gap-12 pb-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-20">
          <div className="lg:col-span-5 lg:pr-8">
            <p className="eyebrow mb-8 flex items-center gap-3 text-graphite/65">
              <span className="h-px w-10 shrink-0 bg-brand-navy" />
              Chiller & freezer construction
            </p>
            <h1 className="text-balance max-w-[10ch] text-[clamp(3.4rem,7.2vw,7.25rem)] leading-[0.87]">
              Custom cool rooms & freezers, built precisely.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-graphite/72 md:text-xl">
              We design and construct commercial cool rooms and freezers, with
              repairs and maintenance available from {CONTACT_INFO.SERVICE_AREA}.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                href={ROUTES.CONTACT}
                className="button-primary focus-ring inline-flex min-h-12 items-center px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.11em] transition-colors"
              >
                Discuss a project <span className="ml-4" aria-hidden="true">→</span>
              </Link>
              <Link
                href={ROUTES.PROJECTS}
                className="focus-ring group inline-flex min-h-12 items-center border-b border-graphite/45 font-display text-sm font-semibold uppercase tracking-[0.11em]"
              >
                View completed work
                <span className="ml-3 transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <figure className="lg:col-span-7 lg:ml-auto lg:w-[min(100%,40rem)]">
            <Link
              href="/projects/1"
              className="focus-ring group block overflow-hidden bg-graphite"
              aria-label="View the Sawmill Brewery project"
            >
              <div className="panel-reveal relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/Sawmill-Brewery/5.jpg"
                  alt="Tall refrigerated storage aisle at Sawmill Brewery, lined with loaded pallet racking"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="image-zoom object-cover"
                />
              </div>
            </Link>
            <div className="mt-4 flex items-start justify-between gap-6 border-t panel-rule pt-4 text-sm">
              <span className="font-display font-semibold uppercase tracking-[0.1em]">
                Sawmill Brewery
              </span>
              <span className="text-right text-graphite/60">
                Brewery storage / Auckland
              </span>
            </div>
          </figure>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-labelledby="selected-work-heading">
        <div className="casebook-container">
          <header className="grid gap-8 border-t panel-rule pt-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow mb-5 text-graphite/55">Selected environments</p>
              <h2 id="selected-work-heading" className="text-balance max-w-[12ch] text-5xl leading-[0.95] md:text-7xl">
                Proof at working scale.
              </h2>
            </div>
            <div className="flex items-end justify-between gap-6 md:col-span-5">
              <p className="max-w-sm text-base leading-7 text-graphite/65">
                Completed insulated environments shown as they operate—around
                people, products, access, and real warehouse constraints.
              </p>
              <Link
                href={ROUTES.PROJECTS}
                className="focus-ring shrink-0 border-b border-graphite pb-1 font-display text-sm font-semibold uppercase tracking-[0.1em]"
              >
                All work ↗
              </Link>
            </div>
          </header>

          <div className="mt-16 grid gap-x-8 gap-y-20 lg:grid-cols-12">
            <figure className="lg:col-span-7">
              <Link href={`/projects/${primor.id}`} className="focus-ring group block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                  <Image
                    src={primor.image}
                    alt="Large Primor Produce controlled room with multiple doors, a forklift, and workers visible for scale"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="image-zoom object-cover"
                  />
                </div>
              </Link>
              <div className="mt-5"><ProjectCaption project={primor} index="01" /></div>
            </figure>

            <figure className="lg:col-span-5 lg:mt-24">
              <Link href={`/projects/${healthcare.id}`} className="focus-ring group block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-graphite">
                  <Image
                    src={healthcare.image}
                    alt="Tall healthcare logistics warehouse aisle leading into an insulated storage area"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="image-zoom object-cover"
                  />
                </div>
              </Link>
              <div className="mt-5"><ProjectCaption project={healthcare} index="02" /></div>
            </figure>

            <div className="grid gap-8 border-t panel-rule pt-8 lg:col-span-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-4 lg:col-start-2">
                <p className="eyebrow mb-5 text-graphite/55">Controlled environments</p>
                <h3 className="text-balance text-4xl leading-none md:text-5xl">
                  Precision beyond food storage.
                </h3>
                <p className="mt-6 text-base leading-7 text-graphite/65">
                  Clean panel junctions, repeated access points, and controlled
                  circulation for specialist healthcare settings.
                </p>
                <Link
                  href={`/projects/${aroa.id}`}
                  className="focus-ring mt-8 inline-block border-b border-graphite pb-1 font-display text-sm font-semibold uppercase tracking-[0.1em]"
                >
                  View Aroa Biosurgery ↗
                </Link>
              </div>
              <figure className="lg:col-span-5 lg:col-start-7">
                <Link href={`/projects/${aroa.id}`} className="focus-ring group block overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden bg-graphite">
                    <Image
                      src={aroa.image}
                      alt="Clean Aroa Biosurgery corridor with numbered insulated panel room doors"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="image-zoom object-cover"
                    />
                  </div>
                </Link>
                <div className="mt-5"><ProjectCaption project={aroa} index="03" /></div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 bg-brand-navy py-24 text-panel-white md:py-32" aria-labelledby="capabilities-heading">
        <div className="casebook-container">
          <header className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow mb-5 text-stainless">Capabilities</p>
              <h2 id="capabilities-heading" className="text-balance max-w-[11ch] text-5xl leading-[0.95] md:text-7xl">
                From a custom build to ongoing care.
              </h2>
            </div>
            <p className="max-w-md self-end text-lg leading-8 text-panel-white/65 md:col-span-5">
              Cool rooms, freezers and storage rooms for commercial clients.
              We build new spaces and carry out repairs and maintenance on
              existing enclosures, from {CONTACT_INFO.SERVICE_AREA}.
            </p>
          </header>

          <div className="mt-16 border-b border-white/20">
            {CAPABILITIES.map((capability) => (
              <div
                key={capability.id}
                className="grid gap-5 border-t border-white/20 py-8 md:grid-cols-12 md:items-start md:py-10"
              >
                <span className="font-display text-sm font-semibold text-stainless md:col-span-1">
                  {capability.number}
                </span>
                <h3 className="text-3xl leading-none md:col-span-4 md:text-4xl">
                  {capability.title}
                </h3>
                <p className="max-w-xl text-base leading-7 text-panel-white/75 md:col-span-6 md:col-start-7">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36" aria-labelledby="primor-heading">
        <div className="casebook-container">
          <header className="grid gap-8 border-t panel-rule pt-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow mb-5 text-graphite/55">Project focus / Primor Produce</p>
              <h2 id="primor-heading" className="text-balance max-w-[13ch] text-5xl leading-[0.95] md:text-7xl">
                Room to keep a large operation moving.
              </h2>
            </div>
            <p className="max-w-sm self-end text-base leading-7 text-graphite/65 md:col-span-4">
              Multiple insulated environments sit within the active produce
              facility, with generous access and clear working space around the
              enclosure.
            </p>
          </header>
        </div>

        <div className="mt-14 overflow-hidden bg-graphite">
          <div className="relative aspect-[4/3] md:aspect-[16/8.7]">
            <Image
              src="/images/Primor-Produce/40.jpg"
              alt="Wide view across the large Primor Produce controlled environment"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="casebook-container mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <figure className="lg:col-span-7">
            <div className="relative aspect-[3/2] overflow-hidden bg-graphite">
              <Image
                src="/images/Primor-Produce/34-tidied.png"
                alt="Long white insulated-panel elevation at Primor Produce with blue high-speed doors and yellow safety barriers"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm text-graphite/55">
              Insulated elevation / high-speed access doors
            </figcaption>
          </figure>
          <div className="border-t panel-rule pt-6 lg:col-span-4 lg:col-start-9">
            <p className="eyebrow mb-5 text-graphite/55">The visible result</p>
            <p className="text-xl leading-8 text-graphite/75">
              Long, uninterrupted panel runs and clearly defined thresholds make
              the scale of the completed enclosure legible at a glance.
            </p>
            <Link
              href={`/projects/${primor.id}`}
              className="focus-ring mt-8 inline-block border-b border-graphite pb-1 font-display text-sm font-semibold uppercase tracking-[0.1em]"
            >
              Explore the project ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y panel-rule bg-white py-24 md:py-32" aria-labelledby="testimonial-heading">
        <div className="casebook-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
              <Image
                src="/images/Manly-Park-Kitchen/17.jpg"
                alt="Manly Park Kitchen team working inside the completed temperature-controlled production space"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex justify-between gap-6 border-t panel-rule pt-4 text-sm">
              <span className="font-display font-semibold uppercase tracking-[0.1em]">Manly Park Kitchen</span>
              <span className="text-graphite/55">Completed environment in use</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-5 lg:pl-10">
            <p className="eyebrow mb-8 text-graphite/55">Client perspective</p>
            <blockquote>
              <p id="testimonial-heading" className="font-display text-3xl font-medium leading-[1.08] md:text-4xl">
                “{testimonial.content}”
              </p>
              <footer className="mt-10 border-t panel-rule pt-5">
                <cite className="not-italic">
                  <span className="block font-display text-xl font-semibold">{testimonial.name}</span>
                  <span className="mt-1 block text-sm text-graphite/55">{testimonial.role}</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white md:py-20">
        <div className="casebook-container grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-5 text-stainless">{CONTACT_INFO.SERVICE_AREA}</p>
            <h2 className="text-balance max-w-[13ch] text-5xl leading-[0.92] md:text-7xl">
              A new room, or work on an existing one?
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href={ROUTES.CONTACT}
              className="focus-ring inline-flex min-h-12 items-center border border-white bg-white px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.11em] text-brand-navy transition-colors hover:bg-panel-white"
            >
              Discuss your project <span className="ml-4" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
