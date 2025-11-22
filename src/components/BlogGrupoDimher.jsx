import React, { useState } from 'react';
import './BlogGrupoDimher.css';
import { 
  Search, Calendar, User, Tag, Clock, TrendingUp, BookOpen, 
  MessageCircle, Share2, Heart, ChevronRight, Filter 
} from 'lucide-react';

export default function BlogGrupoDimher() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());

  // Estados para la sección Finanzas destacada
  const [finanzasLikes, setFinanzasLikes] = useState(
    JSON.parse(localStorage.getItem("finanzasLikes")) || 245
  );
  const [finanzasLiked, setFinanzasLiked] = useState(
    JSON.parse(localStorage.getItem("finanzasLiked")) || false
  );
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("finanzasComments")) || []
  );
  const [newComment, setNewComment] = useState('');

  // 📌 Nueva función para navegar a categorías
  const irACategoria = (categoria) => {
    const section = document.getElementById(categoria);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  const categorias = [
    { id: 'todos', name: 'Todos', color: 'from-purple-500 to-pink-500' },
    { id: 'finanzas', name: 'Finanzas', color: 'from-blue-500 to-cyan-500' },
    { id: 'carrera', name: 'Desarrollo Profesional', color: 'from-green-500 to-emerald-500' },
    { id: 'liderazgo', name: 'Liderazgo', color: 'from-orange-500 to-red-500' },
    { id: 'tecnologia', name: 'Tecnología', color: 'from-indigo-500 to-purple-500' },
    { id: 'cultura', name: 'Cultura Empresarial', color: 'from-pink-500 to-rose-500' }
  ];

  const articulos = [
    {
      id: 1,
      titulo: "5 Estrategias para Alcanzar tus Metas Financieras en 2025",
      categoria: 'finanzas',
      autor: "María González",
      fecha: "15 Noviembre 2024",
      lecturaMin: 8,
      imagen: "https://osirismacias.com/wp-content/uploads/sites/45/2022/09/metas-financieras-600x475.jpg",
      extracto: "Descubre cómo planificar tus finanzas personales con métodos probados que te ayudarán a lograr la libertad financiera que siempre has deseado.",
      likes: 245,
      comentarios: 32,
      trending: true
    },
    {
      id: 2,
      titulo: "Cómo Construir una Carrera Exitosa desde Cero",
      categoria: 'carrera',
      autor: "Carlos Ramírez",
      fecha: "12 Noviembre 2024",
      lecturaMin: 6,
      imagen: "https://media.licdn.com/dms/image/v2/D4D12AQFOZ0PV5jGTog/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1656016261162?e=2147483647&v=beta&t=9mrP2iYOOLzVpCJ81i3DgRMGV3zOlIh2kOl7MS3eXFo",
      extracto: "Los primeros pasos son fundamentales. Aprende a establecer bases sólidas para tu desarrollo profesional.",
      likes: 189,
      comentarios: 28,
      trending: true
    },
    {
      id: 3,
      titulo: "El Poder del Liderazgo Transformacional en las Empresas",
      categoria: 'liderazgo',
      autor: "Ana Martínez",
      fecha: "10 Noviembre 2024",
      lecturaMin: 10,
      imagen: "from-orange-400 to-red-600",
      extracto: "Un líder no solo dirige, transforma. Conoce las claves del liderazgo moderno.",
      likes: 312,
      comentarios: 45,
      trending: true
    },
    {
      id: 4,
      titulo: "Inteligencia Artificial en el Sector Financiero",
      categoria: 'tecnologia',
      autor: "Roberto Silva",
      fecha: "08 Noviembre 2024",
      lecturaMin: 7,
      imagen: "from-indigo-400 to-purple-600",
      extracto: "La IA está cambiando el mundo financiero. Estas son las tendencias clave.",
      likes: 278,
      comentarios: 38,
      trending: false
    },
    {
      id: 5,
      titulo: "Cultura Organizacional: El Secreto del Éxito Empresarial",
      categoria: 'cultura',
      autor: "Laura Pérez",
      fecha: "05 Noviembre 2024",
      lecturaMin: 9,
      imagen: "from-pink-400 to-rose-600",
      extracto: "Una gran cultura empresarial crea equipos de alto impacto.",
      likes: 156,
      comentarios: 21,
      trending: false
    },
    {
      id: 6,
      titulo: "Inversiones Inteligentes para Principiantes",
      categoria: 'finanzas',
      autor: "Diego Torres",
      fecha: "03 Noviembre 2024",
      lecturaMin: 5,
      imagen: "https://wortev.capital/wp-content/uploads/2020/05/Inversiones-inteligentes-como-empiezo-WORTEV-CAPITAL.jpg",
      extracto: "Esta guía te mostrará cómo comenzar a invertir sin conocimientos previos.",
      likes: 423,
      comentarios: 67,
      trending: true
    },
    {
      id: 7,
      titulo: "Habilidades Blandas: Tu Ventaja Competitiva",
      categoria: 'carrera',
      autor: "Isabel Moreno",
      fecha: "01 Noviembre 2024",
      lecturaMin: 6,
      imagen: "https://www.squarepoint.es/wp-content/uploads/sites/3/2024/01/grupo-jovenes-empresarios-aplauden-su-colega-despues-presentacion.jpg",
      extracto: "Las habilidades blandas son clave para tu crecimiento profesional.",
      likes: 267,
      comentarios: 34,
      trending: false
    },
    {
      id: 8,
      titulo: "Gestión del Tiempo para Líderes Ocupados",
      categoria: 'liderazgo',
      autor: "Fernando López",
      fecha: "29 Octubre 2024",
      lecturaMin: 7,
      imagen: "from-orange-400 to-red-600",
      extracto: "Maximiza tu productividad con estas técnicas avanzadas.",
      likes: 198,
      comentarios: 25,
      trending: false
    }
  ];

  const articulosDestacados = articulos.filter(art => art.trending).slice(0, 3);

  const filteredArticulos = articulos.filter(art => {
    const matchCategory =
      selectedCategory === 'todos' || art.categoria === selectedCategory;
    const matchSearch =
      art.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.extracto.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="blog-dimher-wrapper">

      {/* HERO */}
      <div className="blog-hero-gradient">
        <div className="blog-hero-inner">
          <div className="blog-badge">
            <BookOpen className="icon" />
            <span>Blog Grupo Dimher</span>
          </div>

          <h1 className="blog-hero-title">Inspiración y Conocimiento</h1>

          <p className="blog-hero-sub">
            Artículos, consejos y tendencias para impulsar tu crecimiento profesional y financiero
          </p>

          <div className="blog-search-wrapper">
            <Search className="blog-search-icon" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="blog-search-input"
            />
          </div>
        </div>
      </div>

      {/* 🧭 Anclas invisibles */}
      <div id="finanzas" className="blog-category-anchor"></div>
      <div id="carrera" className="blog-category-anchor"></div>
      <div id="liderazgo" className="blog-category-anchor"></div>
      <div id="tecnologia" className="blog-category-anchor"></div>
      <div id="cultura" className="blog-category-anchor"></div>

      {/* CONTENIDO */}
      <div className="blog-main">

        {/* Categorías */}
        <div className="blog-categorias-wrapper">
          <div className="blog-categorias-head">
            <Filter className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-800">Categorías</h2>
          </div>

          <div className="blog-categorias-list">
            {categorias.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                data-cat={cat.id}
                className={`blog-cat-btn ${
                  selectedCategory === cat.id ? "blog-cat-active" : ""
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

   {/* Destacados */}
{selectedCategory === "todos" && searchTerm === "" && (
  <div className="blog-destacados">
    <div className="blog-destacados-title">
      <TrendingUp className="icon" />
      <h2>Artículos Destacados</h2>
    </div>

    <div className="blog-destacados-grid">
      {articulosDestacados.map(art => (
        <div key={art.id} className="blog-card-dest">

          {/* IMAGEN */}
          <div
            className="blog-card-dest-bg"
            style={{
              backgroundImage: `url(${art.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />

          {/* CONTENIDO */}
          <div className="blog-card-dest-inner">

            {/* METADATA SUPERIOR */}
            <div className="blog-card-dest-meta">
              <span
                className={`blog-card-dest-tag ${categorias.find(c => c.id === art.categoria).color}`}
                data-cat={art.categoria}
              >
                {categorias.find(c => c.id === art.categoria).name}
              </span>

              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                {art.lecturaMin} min
              </span>
            </div>

            {/* TÍTULO */}
            <h3 className="blog-card-dest-title">{art.titulo}</h3>

            {/* EXTRACTO */}
            <p className="blog-card-dest-text">{art.extracto}</p>

            {/* BLOQUE INFERIOR */}
            <div className="meta-finanzas" style={{ marginTop: "14px" }}>

              {/* ICONO + AUTOR */}
              <div className="meta-item autor-inline">
                <div className="autor-icon">{art.autor.charAt(0)}</div>
                <span className="autor-nombre">{art.autor}</span>
              </div>

              {/* BOTÓN LEER */}
              <button
                className="blog-leer-small-btn"
                onClick={() => irACategoria(art.categoria)}
                style={{ marginLeft: "auto" }}
              >
                Leer
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
)}


        {/* LISTA DE ARTÍCULOS */}
        <div>
          <h2 className="blog-todos-title">
            {selectedCategory === "todos"
              ? "Todos los Artículos"
              : `Artículos de ${categorias.find(c => c.id === selectedCategory)?.name}`}
          </h2>

          {filteredArticulos.length === 0 && (
            <div className="blog-empty">
              <div className="blog-empty-icon">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3>No se encontraron artículos</h3>
              <p>Intenta con otra búsqueda o categoría</p>
            </div>
          )}

          {filteredArticulos.map(art => (
            <div key={art.id} className="blog-card-dest" style={{ marginBottom: '40px' }}>
              <div
                className="blog-card-dest-bg"
                style={{
                  backgroundImage: `url(${art.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />

              <div className="blog-card-dest-inner">

                {/* META SUPERIOR */}
                <div className="blog-card-dest-meta">
                  <span
                    className={`blog-card-dest-tag ${categorias.find(c => c.id === art.categoria).color}`}
                    data-cat={art.categoria}
                  >
                    {categorias.find(c => c.id === art.categoria).name}
                  </span>

                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {art.lecturaMin} min
                  </span>
                </div>

                <h3 className="blog-card-dest-title">{art.titulo}</h3>
                <p className="blog-card-dest-text">{art.extracto}</p>

                {/* META INFERIOR */}
                <div className="meta-finanzas">

                  <div className="meta-item">
                    <Calendar className="w-4 h-4" />
                    {art.fecha}
                  </div>

                  <div className="meta-item autor-inline">
                    <div className="autor-icon">{art.autor.charAt(0)}</div>
                    <span className="autor-nombre">{art.autor}</span>
                  </div>

                </div>

                {/* BOTÓN LEER MÁS */}
                <button 
                  className="blog-leer-small-btn"
                  onClick={() => irACategoria(art.categoria)}
                >
                  Leer más
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="blog-newsletter">
        <div className="blog-newsletter-inner">
          <h2 className="text-4xl font-bold text-white mb-4">
            Suscríbete a nuestro newsletter
          </h2>

          <p className="text-white mb-6">
            Recibe las últimas novedades y artículos directamente en tu correo.
          </p>

          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="blog-newsletter-input"
            />
            <button
              type="submit"
              className="blog-newsletter-btn"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
