export const metadata = {
  title: 'Contact - Nipux',
};

export default function Contact() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 space-y-8">
      <h1 className="text-4xl font-bold text-indigo-400 drop-shadow">Contact</h1>
      <form className="space-y-4 max-w-lg">
        <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
        <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none" rows={5}></textarea>
        <button type="submit" className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-white">Send</button>
      </form>
    </main>
  );
}
