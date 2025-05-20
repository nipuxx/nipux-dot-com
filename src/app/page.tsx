import Image from 'next/image';
import FloatingTopBar from './components/FloatingTopBar';

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <FloatingTopBar />
      <Image
        src="/images/main-background.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full w-full max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition-all duration-300">
          your server,
        </h1>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition-all duration-300 mt-1 sm:mt-2">
          your nipux
        </h1>
      </div>
    </main>
  );
}
