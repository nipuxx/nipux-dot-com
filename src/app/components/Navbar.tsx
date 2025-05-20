import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-gray-900/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between text-gray-50">
        <Link href="/" className="text-lg font-semibold">Nipux</Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-indigo-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
