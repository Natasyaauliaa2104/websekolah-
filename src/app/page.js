import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { school } from "@/data/school";
import { berita } from "@/data/berita";

export default function HomePage() {
  const terbaru = berita.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <SectionTitle>Sambutan {school.sambutan.nama}</SectionTitle>
          <p className="leading-relaxed text-gray-700">{school.sambutan.isi}</p>
        </div>
        <div>
          <SectionTitle>Tentang singkat sekolah</SectionTitle>
          <p className="leading-relaxed text-gray-700">
            {school.tentangSingkat}
          </p>
          <div className="mt-5">
            <Button href="/about">Selengkapnya tentang kami</Button>
          </div>
        </div>
      </section>

      <section className="bg-mint">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {school.statistik.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="font-serif text-4xl font-bold text-brand">
                {s.nilai}
              </dd>
              <dt className="mt-1 text-sm font-medium text-gray-700">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle sub="Kabar dan kegiatan terbaru dari sekolah.">
            Berita terbaru
          </SectionTitle>
          <Link
            href="/berita"
            className="mb-6 shrink-0 text-sm font-semibold text-brand hover:text-brand-dark hover:underline"
          >
            Semua berita
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {terbaru.map((item) => (
            <BeritaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-brand px-6 py-10 text-center text-white md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt=""
              width={56}
              height={56}
              unoptimized
              className="rounded-full bg-white p-0.5"
            />
            <p className="font-serif text-xl font-bold md:text-2xl">
              Ingin melihat suasana sekolah?
            </p>
          </div>
          <Button href="/galeri" variant="outline">
            Buka galeri
          </Button>
        </div>
      </section>
    </>
  );
}
