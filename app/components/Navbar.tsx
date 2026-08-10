"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "../constants";

const navigation = [
  { label: "Work", href: ROUTES.PROJECTS },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: ROUTES.CONTACT },
];

function PanelMark() {
  return (
    <span
      aria-hidden="true"
      className="relative block h-8 w-7 shrink-0 border-2 border-graphite"
    >
      <span className="absolute inset-y-0 left-[7px] w-px bg-graphite" />
      <span className="absolute right-[4px] top-1/2 h-1 w-1 -translate-y-1/2 bg-panelguys-blue" />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const isCurrent = (href: string) => {
    if (href === ROUTES.PROJECTS) return pathname.startsWith(ROUTES.PROJECTS);
    if (href === ROUTES.CONTACT) return pathname === ROUTES.CONTACT;
    return false;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stainless/60 bg-panel-white text-graphite">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16"
      >
        <Link
          href={ROUTES.HOME}
          aria-label="The Panel Guys home"
          onClick={() => setIsOpen(false)}
          className="group flex min-h-11 items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-panelguys-blue focus-visible:ring-offset-4 focus-visible:ring-offset-panel-white"
        >
          <PanelMark />
          <span className="font-display text-[1.05rem] font-bold uppercase leading-[0.88] tracking-[-0.015em] sm:text-lg">
            The Panel
            <span className="block text-panelguys-blue">Guys</span>
          </span>
        </Link>

        <div className="hidden items-center self-stretch md:flex">
          <ul className="flex h-full items-center" role="list">
            {navigation.map((item) => {
              const current = isCurrent(item.href);

              return (
                <li key={item.label} className="h-full">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className="group relative flex h-full items-center px-5 font-display text-xs font-semibold uppercase tracking-[0.16em] outline-none transition-colors duration-300 hover:text-panelguys-blue focus-visible:bg-graphite focus-visible:text-panel-white lg:px-6"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-5 bottom-0 h-0.5 bg-panelguys-blue transition-transform duration-300 lg:inset-x-6 ${
                        current
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={ROUTES.CONTACT}
            className="ml-4 inline-flex min-h-11 items-center bg-panelguys-blue px-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-graphite outline-none transition-colors duration-300 hover:bg-graphite hover:text-panel-white focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-panel-white lg:ml-6 lg:px-6"
          >
            Discuss a project
            <span aria-hidden="true" className="ml-3">
              {"\u2192"}
            </span>
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
          className="relative flex h-11 w-11 items-center justify-center border border-graphite bg-transparent outline-none transition-colors hover:bg-graphite hover:text-panel-white focus-visible:ring-2 focus-visible:ring-panelguys-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel-white md:hidden"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 motion-reduce:transition-none ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity duration-300 motion-reduce:transition-none ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 motion-reduce:transition-none ${
                isOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-stainless/60 bg-panel-white px-5 pb-6 pt-2 md:hidden"
        >
          <ul role="list" className="mx-auto max-w-[1440px]">
            {navigation.map((item, index) => {
              const current = isCurrent(item.href);

              return (
                <li key={item.label} className="border-b border-stainless/60">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-14 items-center justify-between py-3 font-display text-xl font-semibold outline-none transition-colors hover:text-panelguys-blue focus-visible:bg-graphite focus-visible:px-3 focus-visible:text-panel-white"
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="font-sans text-[0.65rem] font-medium tabular-nums tracking-[0.16em] text-stainless"
                    >
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={ROUTES.CONTACT}
            onClick={() => setIsOpen(false)}
            className="mx-auto mt-6 flex min-h-12 max-w-[1440px] items-center justify-between bg-panelguys-blue px-5 font-display text-sm font-bold uppercase tracking-[0.14em] text-graphite outline-none transition-colors hover:bg-graphite hover:text-panel-white focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-panel-white"
          >
            Discuss a project <span aria-hidden="true">{"\u2192"}</span>
          </Link>
        </div>
      )}
    </header>
  );
}
