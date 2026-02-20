import { useEffect } from 'react';

const StairsLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated logo/icon */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
          <span className="text-3xl font-bold text-white">DM</span>
        </div>
        {/* Pulse rings */}
        <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-teal-500/50 animate-ping"></div>
      </div>
      
      {/* Skeleton loader bars */}
      <div className="flex items-end gap-1 h-12 mb-4">
        <div className="w-3 bg-teal-500/60 rounded-full animate-bounce" style={{ height: '40%', animationDelay: '0s' }}></div>
        <div className="w-3 bg-cyan-500/60 rounded-full animate-bounce" style={{ height: '70%', animationDelay: '0.1s' }}></div>
        <div className="w-3 bg-teal-500/60 rounded-full animate-bounce" style={{ height: '100%', animationDelay: '0.2s' }}></div>
        <div className="w-3 bg-cyan-500/60 rounded-full animate-bounce" style={{ height: '60%', animationDelay: '0.3s' }}></div>
        <div className="w-3 bg-teal-500/60 rounded-full animate-bounce" style={{ height: '80%', animationDelay: '0.4s' }}></div>
      </div>
      
      {/* Loading text with fade */}
      <div className="text-slate-400 text-sm font-medium tracking-widest uppercase">
        <span className="inline-block animate-pulse">Building Experience</span>
      </div>
    </div>
  );
};

export default StairsLoader;

