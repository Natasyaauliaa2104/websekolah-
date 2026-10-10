import Link from "next/link";

// Tombol link reusable dengan tema hijau #148C32.
export default function Button({ href, children, variant = "solid" }) {
  const gaya =
    variant === "solid"
      ? "bg-brand text-white hover:bg-brand-dark"
      : "border-2 border-white text-white hover:bg-white hover:text-brand-dark";

  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${gaya}`}
    >
      {children}
    </Link>
  );
}
