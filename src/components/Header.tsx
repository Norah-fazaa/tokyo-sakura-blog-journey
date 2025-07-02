
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-pink-100 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Tokyo Dreams
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-pink-600 bg-pink-50 dark:bg-pink-900/30"
                  : "text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30"
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/articles"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/articles")
                  ? "text-pink-600 bg-pink-50 dark:bg-pink-900/30"
                  : "text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30"
              }`}
            >
              Articles
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-pink-600 bg-pink-50 dark:bg-pink-900/30"
                  : "text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30"
              }`}
            >
              Contact
            </Link>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors"
              aria-label="Changer le thème"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors"
              aria-label="Changer le thème"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 border border-pink-100 dark:border-gray-700">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/")
                    ? "text-pink-600 bg-pink-50 dark:bg-pink-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/articles"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/articles")
                    ? "text-pink-600 bg-pink-50 dark:bg-pink-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-pink-600 bg-pink-50 dark:bg-pink-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
