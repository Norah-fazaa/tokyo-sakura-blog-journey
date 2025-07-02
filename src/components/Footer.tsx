
import { Heart, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-purple-950 dark:to-pink-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="text-3xl mb-4 block">🌸</span>
          <h3 className="text-xl font-semibold mb-2">Tokyo Dreams</h3>
          <p className="text-gray-300 dark:text-gray-400 max-w-md mx-auto">
            Un voyage émotionnel au cœur du Japon, raconté avec passion et authenticité.
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-gray-300 dark:text-gray-400 mb-6">
          <Heart className="w-4 h-4 text-pink-400" />
          <span>Fait avec amour</span>
          <MapPin className="w-4 h-4 text-purple-400 ml-4" />
          <span>Tokyo, Japon</span>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 pt-6">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2024 Tokyo Dreams. Tous les souvenirs sont précieusement conservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
