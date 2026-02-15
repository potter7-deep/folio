import { useEffect } from 'react';

const StairsLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated rings */}
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 border-4 border-teal-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-teal-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin" style={{ animationDuration: '1s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-20 text-slate-400 text-sm font-medium tracking-widest uppercase">
        <span className="inline-block animate-pulse">Loading</span>
        <span className="inline-block animate-pulse delay-75">.</span>
        <span className="inline-block animate-pulse delay-150">.</span>
      </div>
    </div>
  );
};

export default StairsLoader;

