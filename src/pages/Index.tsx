
import { Link } from "react-router-dom";
import { MapPin, Calendar, Heart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Tokyo Dreams
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Un voyage magique au cœur du Japon, entre tradition millénaire et modernité futuriste. 
              Découvrez Tokyo à travers mes yeux émerveillés.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5 text-pink-500" />
              <span>Mars 2024</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-purple-500" />
              <span>Tokyo, Japon</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-5 h-5 text-red-500" />
              <span>15 jours inoubliables</span>
            </div>
          </div>
          
          <Link 
            to="/articles" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir mes aventures
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mes moments favoris</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌸</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Hanami à Ueno</h3>
              <p className="text-gray-600">
                L'expérience magique des cerisiers en fleurs dans le parc d'Ueno, 
                entourée de familles japonaises célébrant le printemps.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏮</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Nuits de Shibuya</h3>
              <p className="text-gray-600">
                L'effervescence nocturne de Shibuya, ses néons colorés et 
                l'énergie incroyable de cette métropole qui ne dort jamais.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⛩️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Temple Senso-ji</h3>
              <p className="text-gray-600">
                La sérénité du temple le plus ancien de Tokyo, un havre de paix 
                au milieu de l'agitation urbaine d'Asakusa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
