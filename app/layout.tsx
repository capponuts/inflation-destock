import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inflation Destock 85",
  description: "Boutique en ligne de déstockage et bonnes affaires en Vendée !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <header className="w-full bg-[#44a5ae] shadow-md sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2 font-bold text-white text-xl">
              <img src="/logo-inflation-destock-85.png" alt="Logo" className="w-10 h-10 rounded-full border-2 border-white" />
              Inflation Destock 85
            </a>
            <ul className="flex gap-4 text-white font-semibold text-base">
              <li><a href="/">Accueil</a></li>
              <li><a href="/catalogue">Catalogue</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/mentions-legales">Mentions légales</a></li>
              <li><a href="/cgv">CGV</a></li>
              <li><a href="/panier" className="bg-[#e6c343] text-[#222] px-3 py-1 rounded hover:bg-[#ffe066] transition">Panier</a></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="mt-20 w-full flex flex-col items-center gap-2 py-6 border-t border-[#44a5ae]/30 bg-white/60">
          <nav className="flex flex-wrap justify-center gap-4 mb-2 text-[#44a5ae] font-semibold">
            <a href="/">Accueil</a>
            <a href="/catalogue">Catalogue</a>
            <a href="/contact">Contact</a>
            <a href="/a-propos">À propos</a>
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/cgv">CGV</a>
            <a href="/panier">Panier</a>
          </nav>
          <span className="text-[#222] text-sm">© {new Date().getFullYear()} Inflation Destock 85 - Tous droits réservés</span>
          <span className="text-[#e6c343] text-xs">Site réalisé avec Next.js, Tailwind CSS, Lucide & Framer Motion</span>
        </footer>
      </body>
    </html>
  );
}
