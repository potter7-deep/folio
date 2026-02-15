import Desktop from './Desktop';
import Mobile from './Mobile';

function Header() {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <a href="#about" className="text-2xl font-bold text-slate-900 dark:text-white">
        Dan <span className="text-teal-500">Maina</span>
      </a>

      {/* Desktop Navigation */}
      <Desktop />

      {/* Mobile Navigation */}
      <Mobile />
    </nav>
  );
}

export default Header;

