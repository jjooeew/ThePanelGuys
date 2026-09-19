import Image from "next/image";

export default function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`brand-logo ${className}`}>
      <Image
        src="/brand/the-panel-guys.png"
        alt="The Panel Guys Ltd — Chiller & Freezer Construction"
        width={1536}
        height={1024}
        priority={priority}
        sizes="(min-width: 768px) 320px, 240px"
        className="brand-logo-image"
      />
    </span>
  );
}
