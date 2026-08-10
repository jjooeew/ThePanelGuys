import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discuss a Project",
  description:
    "Tell The Panel Guys about your Auckland commercial cool-room or insulated-environment project.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
