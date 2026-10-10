"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { school } from "@/data/school";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const aktif = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Logo SMA Ulil Albab Batam"
            width={44}
            height={44}
            unoptimized
          />
          <span className="font-serif text-lg font-bold leading-tight text-brand-deep">
            {school.nama}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {menu.map((m) => (
            <li key={m.href}>
              <Link
                href={m.href}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors hover:bg-mint hover:text-brand-dark ${
                  aktif(m.href) ? "bg-mint text-brand-dark" : "text-ink"
                }`}
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-ink hover:bg-mint md:hidden"
          aria-expanded={open}
          aria-label="Buka menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-gray-200 bg-white px-4 pb-3 md:hidden">
          {menu.map((m) => (
            <li key={m.href}>
              <Link
                href={m.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint ${
                  aktif(m.href) ? "text-brand-dark" : "text-ink"
                }`}
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
