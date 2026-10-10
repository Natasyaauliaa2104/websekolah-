import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { berita } from "@/data/berita";

export const metadata = { title: "Galeri" };

export default function GaleriPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle sub="Cuplikan kegiatan di SMA Ulil Albab Batam.">
        Galeri kegiatan
      </SectionTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {berita.map((b) => (
          <figure
            key={b.id}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={b.gambar}
                alt={b.judul}
                fill
                unoptimized
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <figcaption className="p-3 text-sm font-medium text-gray-700">
              {b.judul}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
