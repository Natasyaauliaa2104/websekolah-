import BeritaCard from "@/components/BeritaCard";
import { berita } from "@/data/berita";

export const metadata = { title: "Berita" };

export default function BeritaPage() {
  return (
    <>
      <section className="bg-brand-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="font-serif text-3xl font-bold text-white md:text-5xl">
            Berita sekolah
          </h1>
          <p className="mt-3 max-w-2xl text-green-100">
            Kegiatan, prestasi, dan pengumuman terbaru dari SMA Ulil Albab
            Batam.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {berita.map((item) => (
            <BeritaCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
