import Link from "next/link";

import { ROUTES } from "../constants";

const footerNavigation = [
  { label: "Work", href: ROUTES.PROJECTS },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: ROUTES.CONTACT },
];

function PanelMark() {
  return (
    <span
      aria-hidden="true"
      className="relative block h-10 w-9 shrink-0 border-2 border-panel-white"
    >
      <span className="absolute inset-y-0 left-[9px] w-px bg-panel-white" />
      <span className="absolute right-[5px] top-1/2 h-1 w-1 -translate-y-1/2 bg-panelguys-blue" />
    </span>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-panelguys-blue bg-graphite text-panel-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid gap-12 border-b border-panel-white/20 pb-14 md:grid-cols-12 md:gap-x-8 lg:pb-20">
          <div className="md:col-span-6 lg:col-span-5">
            <Link
              href={ROUTES.HOME}
              aria-label="The Panel Guys home"
              className="inline-flex items-center gap-4 outline-none focus-visible:ring-2 focus-visible:ring-panelguys-blue focus-visible:ring-offset-4 focus-visible:ring-offset-graphite"
            >
              <PanelMark />
              <span className="font-display text-2xl font-bold uppercase leading-[0.86] tracking-[-0.02em]">
                The Panel
                <span className="block text-panelguys-blue">Guys</span>
              </span>
            </Link>
            <p className="mt-7 max-w-md font-sans text-base leading-relaxed text-panel-white/70 sm:text-lg">
              Commercial cool rooms and insulated-panel environments, presented
              through the work itself.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="md:col-span-3 lg:col-start-7 lg:col-span-2"
          >
            <p className="mb-5 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stainless">
              Index
            </p>
            <ul role="list" className="space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block border-b border-transparent py-1 font-display text-base font-medium outline-none transition-colors duration-300 hover:border-panelguys-blue hover:text-panelguys-blue focus-visible:border-panelguys-blue focus-visible:text-panelguys-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 lg:col-start-10 lg:col-span-3">
            <p className="mb-5 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stainless">
              Start a conversation
            </p>
            <Link
              href={ROUTES.CONTACT}
              className="group flex min-h-12 items-center justify-between border-t border-panel-white/40 py-4 font-display text-xl font-semibold outline-none transition-colors duration-300 hover:border-panelguys-blue hover:text-panelguys-blue focus-visible:border-panelguys-blue focus-visible:text-panelguys-blue"
            >
              Discuss a project
              <span
                aria-hidden="true"
                className="ml-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                {"\u2192"}
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 font-sans text-xs text-panel-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} The Panel Guys.</p>
          <p className="uppercase tracking-[0.14em]">
            Specialist panel environments
          </p>
        </div>
      </div>
    </footer>
  );
}
