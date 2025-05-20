const FloatingTopBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1.5 md:h-2 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-subtle-shimmer"
          style={{
            backgroundSize: '400% 100%',
          }}
        />
      </div>
      {/* Defining keyframes globally for Tailwind to pick up */}
      <style jsx global>{`
        @keyframes subtle-shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        .animate-subtle-shimmer {
          animation: subtle-shimmer 7s linear infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingTopBar;
