
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Heart, Share2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Article = () => {
  const { id } = useParams();
  
  const articles = {
    "1": {
      title: "Premier jour à Tokyo : l'arrivée magique",
      date: "15 Mars 2024",
      readTime: "5 min",
      image: "🏙️",
      gradient: "from-blue-400 to-purple-600",
      content: `
        <p class="text-lg leading-relaxed mb-6">L'avion commence sa descente vers Narita, et mes yeux se collent au hublot. En contrebas s'étend une mer de lumières scintillantes qui semble n'avoir aucune fin. Tokyo... Cette ville dont j'ai tant rêvé se dévoile enfin sous mes yeux émerveillés.</p>

        <p class="mb-6">Le décalage horaire me donne l'impression de vivre dans un rêve éveillé. Il est 22h locales mais mon corps croit qu'il est encore midi. Peu importe, l'excitation prend le dessus sur la fatigue.</p>

        <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">Le choc de Shibuya</h3>

        <p class="mb-6">Première destination après avoir posé mes bagages à l'hôtel : le célèbre carrefour de Shibuya. Rien, absolument rien, ne m'avait préparée à cette déferlante sensorielle. Des milliers de personnes traversent simultanément dans un ballet parfaitement orchestré, tandis que les écrans géants projettent leurs lumières colorées sur la foule.</p>

        <p class="mb-6">Je reste plantée là, au milieu de cette marée humaine, le sourire aux lèvres et les yeux grands ouverts. C'est exactement ce que j'espérais : être totalement désorientée et absolument enchantée.</p>

        <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">Premiers pas, premières découvertes</h3>

        <p class="mb-6">La politesse légendaire des Japonais n'est pas un mythe. Malgré la barrière de la langue, chaque interaction est empreinte d'une bienveillance touchante. Un simple "arigato gozaimasu" maladroitement prononcé déclenche des sourires chaleureux.</p>

        <p class="mb-6">Ce premier jour marque le début d'une aventure qui changera ma perception du voyage et peut-être même de la vie. Tokyo, me voici !</p>
      `
    },
    "2": {
      title: "Hanami à Ueno : la beauté des sakura",
      date: "18 Mars 2024",
      readTime: "7 min",
      image: "🌸",
      gradient: "from-pink-400 to-rose-600",
      content: `
        <p class="text-lg leading-relaxed mb-6">Le réveil est difficile ce matin, mais l'excitation de découvrir les fameux cerisiers en fleurs me donne des ailes. Direction le parc d'Ueno, réputé pour être l'un des meilleurs endroits de Tokyo pour admirer les sakura en pleine floraison.</p>

        <p class="mb-6">En sortant de la station, je suis immédiatement frappée par l'atmosphère festive qui règne dans les rues. Des familles entières se dirigent vers le parc, chargées de bâches bleues, de paniers de nourriture et de sourires radieux.</p>

        <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">Un spectacle à couper le souffle</h3>

        <p class="mb-6">L'entrée dans le parc me laisse sans voix. Partout où le regard se porte, des cerisiers en fleurs créent un plafond rose et blanc d'une beauté saisissante. Les pétales qui voltigent dans la brise printanière donnent l'impression d'évoluer dans un conte de fées.</p>

        <p class="mb-6">Sous chaque arbre, des groupes de Japonais ont installé leurs bâches pour le hanami traditionnel. Certains pique-niquent en famille, d'autres boivent du saké entre amis, mais tous partagent cette même contemplation paisible de la beauté éphémère des fleurs.</p>

        <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">L'art de célébrer l'instant présent</h3>

        <p class="mb-6">Une famille me fait signe de les rejoindre. Sans parler un mot de japonais, nous partageons des onigiri et du thé vert chaud. Les enfants me montrent comment attraper les pétales qui tombent et me tendent des branches fleuries en cadeau.</p>

        <p class="mb-6">Cette expérience m'enseigne quelque chose de profond sur la culture japonaise : l'art de célébrer la beauté fugace, de se rassembler pour admirer ensemble ce qui ne durera pas. Une leçon de vie magnifique sous un ciel de pétales roses.</p>
      `
    },
    "3": {
      title: "Nuit blanche à Shibuya : l'énergie de Tokyo",
      date: "20 Mars 2024",
      readTime: "6 min",
      image: "🌃",
      gradient: "from-purple-400 to-indigo-600",
      content: `
        <p class="text-lg leading-relaxed mb-6">22h passées, et Tokyo s'illumine de mille feux. Loin de s'endormir, la ville semble au contraire prendre une nouvelle dimension, plus électrique, plus vibrante. Ce soir, je décide d'explorer Tokyo by night, et Shibuya sera mon terrain de jeu.</p>

        <p class="mb-6">Les néons clignotants transforment les rues en couloirs de lumière multicolores. Chaque panneau publicitaire, chaque enseigne contribue à créer cette ambiance si particulière, ce mix entre futurisme et pop culture qui fait l'identité visuelle de Tokyo.</p>

        <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">L'effervescence nocturne</h3>

        <p class="mb-6">Contrairement à ce qu'on pourrait imaginer, la nuit tokyoïte n'a rien d'inquiétant. Au contraire, une énergie positive émane de cette foule nocturne. Salarymen qui sortent du bureau, jeunes en tenues extravagantes, touristes comme moi... tous semblent portés par cette vague d'énergie urbaine.</p>

        <p class="mb-6">Je découvre les izakayas, ces petits bars traditionnels cachés au détour d'une ruelle. L'ambiance y est chaleureuse, presque familiale, en contraste total avec l'agitation de la rue principale.</p>

        <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">Quand Tokyo ne dort jamais</h3>

        <p class="mb-6">3h du matin, et les trains de nuit transportent encore des milliers de personnes. Les konbini (supérettes) sont bondés, les karaokés résonnent de chants plus ou moins justes, et moi, je me laisse porter par cette énergie incroyable.</p>

        <p class="mb-6">Cette nuit blanche m'aura permis de saisir une facette essentielle de Tokyo : cette capacité à vivre intensément, à chaque instant, dans une harmonie parfaite entre tradition et modernité.</p>
      `
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article non trouvé</h1>
          <Link to="/articles" className="text-purple-600 hover:text-purple-700">
            Retour aux articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/articles"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour aux articles
        </Link>

        <div className={`h-64 bg-gradient-to-br ${article.gradient} rounded-xl flex items-center justify-center mb-8`}>
          <span className="text-6xl">{article.image}</span>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full transition-colors">
              <Heart className="w-4 h-4" />
              J'aime
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full transition-colors">
              <Share2 className="w-4 h-4" />
              Partager
            </button>
          </div>
        </header>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Vous avez aimé cet article ?</h3>
          <p className="text-gray-600 mb-4">
            Découvrez d'autres moments magiques de mon voyage à Tokyo !
          </p>
          <Link 
            to="/articles"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
          >
            Voir tous les articles
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Article;
