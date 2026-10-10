import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl font-bold text-brand-deep">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 text-gray-600">
        Alamat yang Anda buka tidak tersedia. Kembali ke halaman utama atau
        daftar berita.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button href="/">Ke Home</Button>
        <Button href="/berita">Ke Berita</Button>
      </div>
    </div>
  );
}
