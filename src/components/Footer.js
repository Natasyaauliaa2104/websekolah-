import Link from "next/link";
import { school } from "@/data/school";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-xl font-bold">{school.nama}</h2>
          <p className="mt-2 text-sm text-green-100">{school.slogan}</p>
        </div>
        <div>
          <h3 className="font-semibold">Alamat</h3>
          <p className="mt-2 text-sm text-green-100">{school.alamat}</p>
          <p className="mt-1 text-sm text-green-100">Telp. {school.telepon}</p>
          <p className="text-sm text-green-100">{school.email}</p>
        </div>
        <div>
          <h3 className="font-semibold">Menu</h3>
          <ul className="mt-2 space-y-1 text-sm text-green-100">
            <li>
              <Link href="/" className="hover:text-white hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/berita" className="hover:text-white hover:underline">
                Berita
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="hover:text-white hover:underline">
                Galeri
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-sm text-green-100">
        © {school.tahun} {school.nama}. Hak cipta dilindungi.
      </div>
    </footer>
  );
}
