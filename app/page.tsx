'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { Home as HomeIcon, Heart, Smartphone, Shirt, Zap, Flame } from "lucide-react";

const categories = [
  { icon: <HomeIcon size={32} />, label: "Maison", color: "bg-[#e6c343]" },
  { icon: <Heart size={32} />, label: "Bien-être", color: "bg-[#44a5ae]" },
  { icon: <Smartphone size={32} />, label: "Multimédia", color: "bg-[#e6c343]" },
  { icon: <Shirt size={32} />, label: "Vêtements", color: "bg-[#44a5ae]" },
  { icon: <Zap size={32} />, label: "Électroménager", color: "bg-[#e6c343]" },
  { icon: <Flame size={32} />, label: "Fondants parfumés", color: "bg-[#44a5ae]" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#e6c343] via-white to-[#44a5ae] p-4 font-sans">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-4"
      >
        <Image
          src="/logo-inflation-destock-85.png"
          alt="Logo Inflation Destock 85"
          width={220}
          height={220}
          priority
          className="rounded-full shadow-lg border-4 border-white"
        />
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold text-[#222] text-center drop-shadow"
        >
          Inflation Destock 85
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-2xl text-[#222] text-center max-w-2xl"
        >
          🏠 Maison, 💆‍♀️ Bien-être, 📱 Multimédia, 👕 Vêtements (neufs & d'occasion), ⚡ Électroménager, 🕯️ Fondants parfumés… et bien plus encore !
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-base md:text-lg text-[#222] text-center max-w-2xl"
        >
          Continuez à partager, inviter, parler de nous : <span className="font-bold text-[#44a5ae]">c'est grâce à VOUS</span> que cette aventure prend de l'ampleur 🚀<br/>
          <span className="font-semibold text-[#e6c343]">Ouverture de la boutique en ligne prévue courant juillet 🛒</span>
        </motion.p>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            className={`flex flex-col items-center p-4 rounded-xl shadow-md ${cat.color} text-white w-32 group cursor-pointer`}
            whileHover={{ 
              scale: 1.08, 
              rotate: -2,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
          >
            <div className="group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <span className="mt-2 font-semibold text-lg text-white drop-shadow group-hover:text-[#222] transition-colors">{cat.label}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-12 max-w-2xl text-center text-[#222] bg-white/80 rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        Ici, vous trouverez un large choix de marchandises diverses issues de déstockage (neuves à prix réduits) ainsi que des articles d'occasion soigneusement sélectionnés.<br/>
        Jouets, articles scolaires, électroménager, vêtements, décoration, outils, accessoires… il y en a pour tous les goûts et tous les budgets !<br/>
        <span className="font-bold text-[#44a5ae]">Des nouveautés régulièrement, des prix intéressants et une ambiance conviviale.</span><br/>
        <span className="font-semibold text-[#e6c343]">Rejoignez-nous, faites de bonnes affaires et donnez une seconde vie aux objets !</span>
      </motion.div>

      {/* Section Nouveautés à venir */}
      <motion.div
        className="mt-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="text-2xl md:text-3xl font-bold text-[#e6c343] animate-pulse">🛒 Nouveautés à venir en juillet !</span>
        <p className="mt-2 text-[#222] text-lg">Restez connectés, de nouveaux articles seront ajoutés très régulièrement !</p>
        <div className="flex gap-4 mt-4">
          <a href="/catalogue" className="bg-[#44a5ae] text-white px-4 py-2 rounded shadow hover:bg-[#36818a] transition">Voir le catalogue</a>
          <a href="/panier" className="bg-[#e6c343] text-[#222] px-4 py-2 rounded shadow hover:bg-[#ffe066] transition">Voir le panier</a>
        </div>
      </motion.div>
    </div>
  );
}
