import { useEffect } from 'react';
import './Animation.css';

const letters = ['D', 'A', 'N', ' ', 'M', 'A', 'I', 'N', 'A'];

const StairsLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-screen" aria-label="Loading screen">
      <div className="loader-glow" />
      <div className="loader-grid" aria-hidden="true" />

      <div className="loader-core">
        <div className="loader-orbit" aria-hidden="true">
          <span className="loader-orbit-ring ring-one" />
          <span className="loader-orbit-ring ring-two" />
        </div>

        <div className="loader-logo" aria-label="Dan Maina">
          {letters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className={`loader-letter${letter === ' ' ? ' loader-space' : ''}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        <div className="loader-bar" aria-hidden="true">
          <div className="loader-bar-fill" />
        </div>

        <div className="loader-meta" aria-live="polite">
          <span className="loader-status-dot" aria-hidden="true" />
          <p className="loader-caption">Securing the cloud</p>
        </div>
      </div>
    </div>
  );
};

export default StairsLoader;

