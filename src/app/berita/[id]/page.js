import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { berita, getBeritaById } from "@/data/berita";

// Membuat halaman /berita/[id] untuk setiap berita saat build.
export function generateStaticParams() {
  return berita.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = getBeritaById(id);
  return { title: item ? item.judul : "Berita tidak ditemukan" };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const item = getBeritaById(id);

  if (!item) notFound();

  const lainnya = berita.filter((b) => b.id !== item.id).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/berita"
        className="text-sm font-semibold text-brand hover:text-brand-dark hover:underline"
      >
        Kembali ke Berita
      </Link>

      <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink md:text-4xl">
        {item.judul}
      </h1>
      <time className="mt-2 block text-sm font-medium text-brand-dark">
        {item.tanggal}
      </time>

      <div className="relative mt-6 aspect-[3/2] w-full overflow-hidden rounded-xl bg-mint">
        <Image
          src={item.gambar}
          alt={item.judul}
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">
        {item.isi.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Link
        href="/berita"
        className="mt-10 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Kembali ke Berita
      </Link>

      <aside className="mt-14 border-t border-gray-200 pt-8">
        <h2 className="font-serif text-xl font-bold text-brand-deep">
          Berita lainnya
        </h2>
        <ul className="mt-4 space-y-3">
          {lainnya.map((b) => (
            <li key={b.id}>
              <Link
                href={`/berita/${b.id}`}
                className="font-medium text-ink hover:text-brand hover:underline"
              >
                {b.judul}
              </Link>
              <span className="ml-2 text-sm text-gray-500">{b.tanggal}</span>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
