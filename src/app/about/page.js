import SectionTitle from "@/components/SectionTitle";
import { school } from "@/data/school";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="font-serif text-3xl font-bold text-white md:text-5xl">
            Tentang {school.nama}
          </h1>
          <p className="mt-3 max-w-2xl text-green-100">{school.slogan}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-14">
        <section>
          <SectionTitle>Profil sekolah</SectionTitle>
          <p className="max-w-3xl leading-relaxed text-gray-700">
            {school.profil}
          </p>
        </section>

        <section>
          <SectionTitle>Sejarah singkat</SectionTitle>
          <div className="max-w-3xl space-y-4 leading-relaxed text-gray-700">
            {school.sejarah.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border-l-4 border-brand bg-mint p-6">
            <h2 className="font-serif text-2xl font-bold text-brand-deep">
              Visi
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700">{school.visi}</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="font-serif text-2xl font-bold text-brand-deep">
              Misi
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed text-gray-700">
              {school.misi.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <SectionTitle>Fasilitas</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {school.fasilitas.map((f) => (
              <div
                key={f.nama}
                className="rounded-xl border border-gray-200 p-5 hover:border-brand"
              >
                <h3 className="font-semibold text-brand-dark">{f.nama}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.ket}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Program unggulan</SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            {school.program.map((p) => (
              <div key={p.nama} className="rounded-xl bg-mint p-5">
                <h3 className="font-semibold text-brand-deep">{p.nama}</h3>
                <p className="mt-1 text-sm text-gray-700">{p.ket}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle>Ekstrakurikuler</SectionTitle>
            <ul className="flex flex-wrap gap-2">
              {school.ekstrakurikuler.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-brand px-4 py-1.5 text-sm font-medium text-brand-dark"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle>Prestasi</SectionTitle>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              {school.prestasi.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle>Alamat dan kontak</SectionTitle>
          <address className="space-y-1 not-italic text-gray-700">
            <p className="font-semibold text-ink">{school.nama}</p>
            <p>{school.alamat}</p>
            <p>Telp. {school.telepon}</p>
            <p>Email: {school.email}</p>
          </address>
        </section>
      </div>
    </>
  );
}
