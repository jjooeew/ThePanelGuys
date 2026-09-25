"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "../constants";
import BrandLogo from "./BrandLogo";

const navigation = [
  { label: "Work", href: ROUTES.PROJECTS },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: ROUTES.CONTACT },
];

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stainless/60 bg-white text-brand-navy">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[104px] max-w-[1440px] items-center justify-between px-5 sm:h-[120px] sm:px-8 lg:px-16"
      >
        <Link
          href={ROUTES.HOME}
          aria-label="The Panel Guys home"
          onClick={() => setIsOpen(false)}
          className="focus-ring block shrink-0"
        >
          <BrandLogo priority className="w-48 sm:w-56" />
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
                    className="group relative flex h-full items-center px-4 font-display text-xs font-semibold uppercase tracking-[0.16em] outline-none transition-colors duration-300 hover:text-brand-steel focus-visible:bg-brand-navy focus-visible:text-white lg:px-6"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-0 h-0.5 bg-brand-navy transition-transform duration-300 lg:inset-x-6 ${
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
            className="button-primary ml-4 inline-flex min-h-11 items-center px-5 font-display text-xs font-bold uppercase tracking-[0.14em] outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 lg:ml-6 lg:px-6"
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
          className="relative flex h-11 w-11 items-center justify-center border border-brand-navy bg-transparent outline-none transition-colors hover:bg-brand-navy hover:text-white focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 md:hidden"
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
          className="border-t border-stainless/60 bg-white px-5 pb-6 pt-2 md:hidden"
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
                    className="flex min-h-14 items-center justify-between py-3 font-display text-xl font-semibold outline-none transition-colors hover:text-brand-steel focus-visible:bg-brand-navy focus-visible:px-3 focus-visible:text-white"
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="font-sans text-[0.65rem] font-medium tabular-nums tracking-[0.16em] text-brand-steel"
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
            className="button-primary mx-auto mt-6 flex min-h-12 max-w-[1440px] items-center justify-between px-5 font-display text-sm font-bold uppercase tracking-[0.14em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
          >
            Discuss a project <span aria-hidden="true">{"\u2192"}</span>
          </Link>
        </div>
      )}
    </header>
  );
}
