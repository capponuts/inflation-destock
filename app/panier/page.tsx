export default function Panier() {
  // Exemple de panier fictif
  const panier = [
    { id: 1, nom: "Lampe de chevet bois", prix: 19.99, quantite: 1 },
    { id: 2, nom: "Ours en peluche", prix: 8.50, quantite: 2 },
  ];
  const total = panier.reduce((acc, item) => acc + item.prix * item.quantite, 0);

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#44a5ae] mb-8">Votre panier</h1>
      {panier.length === 0 ? (
        <p className="text-lg text-[#222]">Votre panier est vide.</p>
      ) : (
        <div className="bg-white rounded-xl shadow p-6">
          <ul className="divide-y divide-gray-200 mb-4">
            {panier.map((item) => (
              <li key={item.id} className="py-2 flex justify-between items-center">
                <span>{item.nom} <span className="text-sm text-gray-500">x{item.quantite}</span></span>
                <span className="text-[#e6c343] font-bold">{(item.prix * item.quantite).toFixed(2)} €</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center font-bold text-lg mb-4">
            <span>Total</span>
            <span className="text-[#44a5ae]">{total.toFixed(2)} €</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-200 text-[#222] px-4 py-2 rounded hover:bg-gray-300 transition">Vider le panier</button>
            <button className="bg-[#44a5ae] text-white px-4 py-2 rounded hover:bg-[#36818a] transition">Passer commande</button>
          </div>
        </div>
      )}
    </main>
  );
} 