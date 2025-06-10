export default function Contact() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#44a5ae] mb-8">Contact</h1>
      <form className="flex flex-col gap-4 bg-white rounded-xl shadow p-6">
        <input type="text" placeholder="Votre nom" className="border p-2 rounded" required />
        <input type="email" placeholder="Votre email" className="border p-2 rounded" required />
        <textarea placeholder="Votre message" className="border p-2 rounded min-h-[100px]" required />
        <button type="submit" className="bg-[#44a5ae] text-white px-4 py-2 rounded hover:bg-[#36818a] transition">Envoyer</button>
      </form>
    </main>
  );
} 