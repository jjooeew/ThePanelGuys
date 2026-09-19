import Link from "next/link";

import { CONTACT_INFO, ROUTES } from "../constants";
import BrandLogo from "./BrandLogo";

const footerNavigation = [
  { label: "Work", href: ROUTES.PROJECTS },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: ROUTES.CONTACT },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stainless/40 bg-graphite text-panel-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid gap-12 border-b border-panel-white/20 pb-14 md:grid-cols-12 md:gap-x-8 lg:pb-20">
          <div className="md:col-span-6 lg:col-span-5">
            <Link
              href={ROUTES.HOME}
              aria-label="The Panel Guys home"
              className="focus-ring inline-block bg-white p-4"
            >
              <BrandLogo className="w-56 sm:w-64" />
            </Link>
            <p className="mt-7 max-w-md font-sans text-base leading-relaxed text-panel-white/70 sm:text-lg">
              Custom cool rooms, freezers and storage rooms. Construction,
              repairs and maintenance from {CONTACT_INFO.SERVICE_AREA}.
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
                    className="inline-block border-b border-transparent py-1 font-display text-base font-medium outline-none transition-colors duration-300 hover:border-white hover:text-white focus-visible:border-white focus-visible:text-white"
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
              className="group flex min-h-12 items-center justify-between border-t border-panel-white/40 py-4 font-display text-xl font-semibold outline-none transition-colors duration-300 hover:border-white hover:text-white focus-visible:border-white focus-visible:text-white"
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
          <p>&copy; {currentYear} The Panel Guys Ltd.</p>
          <p className="uppercase tracking-[0.14em]">
            Chiller & freezer construction
          </p>
        </div>
      </div>
    </footer>
  );
}
