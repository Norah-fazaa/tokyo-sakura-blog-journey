
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

      {/* Images Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tokyo en images</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop&crop=center"
                alt="Nuit étoilée à Tokyo"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Nuit étoilée</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&crop=center"
                alt="Lumières dorées entre les arbres"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Lumières dorées</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center"
                alt="Sérénité au bord de l'eau"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Sérénité</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop&crop=center"
                alt="Sommet brumeux"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Brume matinale</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=300&fit=crop&crop=center"
                alt="Rivière entre les montagnes"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Paysage montagneux</p>
              </div>
            </div>
          </div>
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
