import Image from "next/image";
import Link from "next/link";

export default function BeritaCard({ item }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg">
      <div className="relative aspect-[3/2] w-full bg-mint">
        <Image
          src={item.gambar}
          alt={item.judul}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-sm font-medium text-brand-dark">
          {item.tanggal}
        </time>
        <h3 className="mt-1 font-serif text-lg font-bold leading-snug text-ink">
          {item.judul}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {item.ringkasan}
        </p>
        <Link
          href={`/berita/${item.id}`}
          className="mt-4 inline-block self-start rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}
