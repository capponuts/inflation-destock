import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Confetti from "./components/Confetti";

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
        <Confetti />
        <header className="w-full bg-[#44a5ae] shadow-md sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2 font-bold text-white text-xl group">
              <img src="/logo-inflation-destock-85.png" alt="Logo" className="w-10 h-10 rounded-full border-2 border-white group-hover:border-[#e6c343] transition-colors" />
              <span className="group-hover:text-[#e6c343] transition-colors">Inflation Destock 85</span>
            </a>
            <ul className="flex gap-4 text-white font-semibold text-base">
              <li><a href="/" className="hover:text-[#e6c343] transition-colors">Accueil</a></li>
              <li><a href="/catalogue" className="hover:text-[#e6c343] transition-colors">Catalogue</a></li>
              <li><a href="/contact" className="hover:text-[#e6c343] transition-colors">Contact</a></li>
              <li><a href="/a-propos" className="hover:text-[#e6c343] transition-colors">À propos</a></li>
              <li><a href="/panier" className="bg-[#e6c343] text-[#222] px-3 py-1 rounded hover:bg-[#ffe066] transition">Panier</a></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="mt-20 w-full flex flex-col items-center gap-2 py-6 border-t border-[#44a5ae]/30 bg-white/60">
          <nav className="flex flex-wrap justify-center gap-4 mb-2 text-[#222] font-semibold">
            <a href="/" className="hover:text-[#e6c343] transition-colors">Accueil</a>
            <a href="/catalogue" className="hover:text-[#e6c343] transition-colors">Catalogue</a>
            <a href="/contact" className="hover:text-[#e6c343] transition-colors">Contact</a>
            <a href="/a-propos" className="hover:text-[#e6c343] transition-colors">À propos</a>
            <a href="/mentions-legales" className="hover:text-[#e6c343] transition-colors">Mentions légales</a>
            <a href="/cgv" className="hover:text-[#e6c343] transition-colors">CGV</a>
            <a href="/panier" className="hover:text-[#e6c343] transition-colors">Panier</a>
          </nav>
          <span className="text-[#222] text-sm">© {new Date().getFullYear()} Inflation Destock 85 - Tous droits réservés | Création <a href="https://kapinfo.fr" target="_blank" rel="noopener noreferrer" className="text-[#44a5ae] hover:text-[#e6c343] transition-colors">Kapinfo.fr</a></span>
        </footer>
      </body>
    </html>
  );
}
