
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Premier jour à Tokyo : l'arrivée magique",
      excerpt: "Mon premier contact avec cette métropole fascinante, entre décalage horaire et émerveillement total devant l'effervescence de Shibuya.",
      date: "15 Mars 2024",
      readTime: "5 min",
      image: "🏙️",
      gradient: "from-blue-400 to-purple-600"
    },
    {
      id: 2,
      title: "Hanami à Ueno : la beauté des sakura",
      excerpt: "Une expérience inoubliable sous les cerisiers en fleurs du parc d'Ueno, entourée de familles japonaises célébrant le printemps.",
      date: "18 Mars 2024",
      readTime: "7 min",
      image: "🌸",
      gradient: "from-pink-400 to-rose-600"
    },
    {
      id: 3,
      title: "Nuit blanche à Shibuya : l'énergie de Tokyo",
      excerpt: "Plongée dans l'univers nocturne de Shibuya, ses néons éblouissants et l'énergie incroyable de cette ville qui ne dort jamais.",
      date: "20 Mars 2024",
      readTime: "6 min",
      image: "🌃",
      gradient: "from-purple-400 to-indigo-600"
    },
    {
      id: 4,
      title: "Temple Senso-ji : la sérénité d'Asakusa",
      excerpt: "Découverte du plus ancien temple de Tokyo et de l'atmosphère unique du quartier traditionnel d'Asakusa.",
      date: "22 Mars 2024",
      readTime: "8 min",
      image: "⛩️",
      gradient: "from-orange-400 to-red-600"
    },
    {
      id: 5,
      title: "Tsukiji et les saveurs de Tokyo",
      excerpt: "Exploration du célèbre marché aux poissons et dégustation des meilleures spécialités culinaires de la capitale japonaise.",
      date: "25 Mars 2024",
      readTime: "6 min",
      image: "🍣",
      gradient: "from-green-400 to-teal-600"
    },
    {
      id: 6,
      title: "Derniers instants : sayonara Tokyo",
      excerpt: "Mes dernières heures dans cette ville extraordinaire, entre nostalgie et gratitude pour cette aventure inoubliable.",
      date: "30 Mars 2024",
      readTime: "5 min",
      image: "✈️",
      gradient: "from-gray-400 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Mes aventures à Tokyo
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Plongez dans mes récits de voyage et découvrez Tokyo à travers mes yeux émerveillés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`h-32 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                <span className="text-4xl">{article.image}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Link 
                  to={`/article/${article.id}`}
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group-hover:gap-3 transition-all"
                >
                  Lire la suite
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Articles;
