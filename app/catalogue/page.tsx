import Image from "next/image";
import Link from "next/link";

const produits = [
  { id: 1, nom: "Lampe de chevet bois", prix: 19.99, image: "/lamp.png" },
  { id: 2, nom: "Ours en peluche", prix: 8.50, image: "/teddy.png" },
  { id: 3, nom: "Chemise en velours", prix: 14.90, image: "/shirt.png" },
  { id: 4, nom: "Décoration sapin", prix: 3.99, image: "/tree.png" },
  { id: 5, nom: "Coque fleurie", prix: 5.99, image: "/case.png" },
];

export default function Catalogue() {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#44a5ae] mb-8">Catalogue</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {produits.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image src={p.image} alt={p.nom} width={120} height={120} className="mb-2" />
            <h2 className="font-semibold text-lg text-[#222] mb-1">{p.nom}</h2>
            <span className="text-[#e6c343] font-bold text-xl mb-2">{p.prix.toFixed(2)} €</span>
            <button className="bg-[#44a5ae] text-white px-4 py-2 rounded hover:bg-[#36818a] transition">Ajouter au panier</button>
          </div>
        ))}
      </div>
    </main>
  );
} 