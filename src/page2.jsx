import { useEffect } from 'react';

const StairsLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 300); // Match total animation time
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-end justify-center z-50">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="w-6 bg-blue-500 rounded mx-0.5"
          style={{
            height: `${(i + 1) * 20}px`,
            animation: 'rise 6s ease forwards',
            animationDelay: `${i * 0.1}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default StairsLoader;
