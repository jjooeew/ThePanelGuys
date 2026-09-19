import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discuss a Project",
  description:
    "Discuss custom commercial cool rooms, freezers, storage rooms, repairs and maintenance with The Panel Guys. Serving Northland to Taupō.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
