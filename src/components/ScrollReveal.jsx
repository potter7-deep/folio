import useScrollReveal from '../hooks/useScrollReveal';
import '../ScrollReveal.css';

/**
 * ScrollReveal - A wrapper component that reveals its content 
 * with smooth Ferrari-style animations when it enters the viewport
 * 
 * @param {React.ReactNode} children - The content to reveal
 * @param {string} animation - Animation type: 'fade-up', 'fade-left', 'fade-right', 'fade-in', 'zoom-in'
 * @param {number} delay - Delay in milliseconds before animation starts
 * @param {number} duration - Animation duration in milliseconds
 * @param {string} className - Additional CSS classes
 */
function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 800,
  className = '',
  threshold = 0.1
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animation} ${isVisible ? 'revealed' : ''} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;

