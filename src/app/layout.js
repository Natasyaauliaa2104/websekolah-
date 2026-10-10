import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "SMA Ulil Albab Batam",
    template: "%s | SMA Ulil Albab Batam",
  },
  description:
    "Website profil SMA Ulil Albab Batam: berilmu, berakhlak, berprestasi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-white text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
