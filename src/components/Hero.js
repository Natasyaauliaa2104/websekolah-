import Image from "next/image";
import Button from "@/components/Button";
import { school } from "@/data/school";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <Image
        src="/sekolah.svg"
        alt="Gedung SMA Ulil Albab Batam"
        fill
        priority
        unoptimized
        className="-z-10 object-cover opacity-40"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 md:py-28">
        <Image
          src="/logo.svg"
          alt="Logo sekolah"
          width={88}
          height={88}
          unoptimized
          className="rounded-full bg-white p-1"
        />
        <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
          {school.nama}
        </h1>
        <p className="max-w-xl text-lg font-medium text-green-50 md:text-2xl">
          {school.slogan}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/about">Kenali sekolah kami</Button>
          <Button href="/berita" variant="outline">
            Lihat berita
          </Button>
        </div>
      </div>
    </section>
  );
}
