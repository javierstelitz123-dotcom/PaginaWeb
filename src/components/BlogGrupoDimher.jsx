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
      imagen: "from-blue-400 to-cyan-600",
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
      imagen: "from-green-400 to-emerald-600",
      extracto: "Los primeros pasos son fundamentales. Aprende a establecer bases sólidas para tu desarrollo profesional con consejos de expertos en recursos humanos.",
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
      extracto: "Un líder no solo dirige, transforma. Conoce las claves del liderazgo que está revolucionando el mundo corporativo y cómo puedes aplicarlo.",
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
      extracto: "La IA está cambiando la forma en que las empresas financieras operan. Descubre las tendencias tecnológicas que marcarán la diferencia.",
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
      extracto: "Una cultura empresarial sólida es la base de equipos productivos y felices. Aprende cómo construir un ambiente laboral inspirador.",
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
      imagen: "from-blue-400 to-cyan-600",
      extracto: "No necesitas ser un experto para empezar a invertir. Esta guía te mostrará los primeros pasos hacia la construcción de tu patrimonio.",
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
      imagen: "from-green-400 to-emerald-600",
      extracto: "Las habilidades técnicas te consiguen el trabajo, pero las habilidades blandas te ayudan a crecer. Descubre cuáles son las más valoradas.",
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
      extracto: "El tiempo es el recurso más valioso de un líder. Aprende técnicas avanzadas para maximizar tu productividad sin sacrificar tu bienestar.",
      likes: 198,
      comentarios: 25,
      trending: false
    },
    {
      id: 9,
      titulo: "Blockchain y su Impacto en las Finanzas Corporativas",
      categoria: 'tecnologia',
      autor: "Patricia Ruiz",
      fecha: "27 Octubre 2024",
      lecturaMin: 11,
      imagen: "from-indigo-400 to-purple-600",
      extracto: "La tecnología blockchain está revolucionando las transacciones financieras. Conoce cómo puede beneficiar a tu empresa.",
      likes: 334,
      comentarios: 52,
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

  const toggleLike = (id) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  // LIKE AL POST FINANZAS
  const toggleFinanzasLike = () => {
    const newState = !finanzasLiked;
    setFinanzasLiked(newState);

    const newLikes = newState ? finanzasLikes + 1 : finanzasLikes - 1;
    setFinanzasLikes(newLikes);

    localStorage.setItem("finanzasLikes", JSON.stringify(newLikes));
    localStorage.setItem("finanzasLiked", JSON.stringify(newState));
  };

  // ABRIR/CERRAR COMENTARIOS
  const toggleComments = () => {
    setCommentsOpen(!commentsOpen);
  };

  // AGREGAR COMENTARIO
  const addComment = () => {
    if (newComment.trim() === "") return;

    const comment = {
      id: Date.now(),
      text: newComment,
      likes: 0,
      liked: false,
      replies: []
    };

    const updated = [...comments, comment];
    setComments(updated);
    localStorage.setItem("finanzasComments", JSON.stringify(updated));

    setNewComment("");
  };

  // LIKE A COMENTARIO
  const toggleCommentLike = (id) => {
    const updated = comments.map(c => {
      if (c.id === id) {
        return {
          ...c,
          liked: !c.liked,
          likes: c.liked ? c.likes - 1 : c.likes + 1
        };
      }
      return c;
    });

    setComments(updated);
    localStorage.setItem("finanzasComments", JSON.stringify(updated));
  };

  // RESPONDER COMENTARIO
  const replyToComment = (id, replyText) => {
    const updated = comments.map(c => {
      if (c.id === id) {
        return {
          ...c,
          replies: [...c.replies, { id: Date.now(), text: replyText }]
        };
      }
      return c;
    });

    setComments(updated);
    localStorage.setItem("finanzasComments", JSON.stringify(updated));
  };

  return (
    <div className="blog-dimher-wrapper">
      {/* Hero */}
      <div className="blog-hero-gradient">
        <div className="blog-hero-inner">
          <div className="blog-badge">
            <BookOpen className="icon" />
            <span>Blog Grupo Dimher</span>
          </div>

          <h1 className="blog-hero-title">
            Inspiración y Conocimiento
          </h1>

          <p className="blog-hero-sub">
            Artículos, consejos y tendencias para impulsar tu crecimiento profesional y financiero
          </p>

          {/* Buscador */}
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

      {/* Contenido Principal */}
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
                data-cat={cat.id}  // ← agregado
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
              <TrendingUp className="icon" /> {/* Icono negro y grande */}
              <h2>Artículos Destacados</h2>  {/* Texto negro, grande y grueso */}
            </div>

            <div className="blog-destacados-grid">
              {articulosDestacados.map(art => (
                <div key={art.id} className="blog-card-dest">

                  {/* FONDO SUPERIOR */}
                  <div className="blog-card-dest-bg">
                    <div className="blog-card-dest-img">
                      <i className="lucide lucide-trending-up"></i>
                    </div>
                  </div>

                  {/* CONTENIDO */}
                  <div className="blog-card-dest-inner">

                    <div className="blog-card-dest-meta">
                      <span className={`blog-card-dest-tag ${categorias.find(c => c.id === art.categoria).color}`}>
                        {categorias.find(c => c.id === art.categoria).name}
                      </span>

                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        {art.lecturaMin} min
                      </span>
                    </div>

                    <h3 className="blog-card-dest-title">{art.titulo}</h3>
                    <p className="blog-card-dest-text">{art.extracto}</p>

                    {/* FOOTER */}
                    <div className="blog-card-dest-footer">
                      <div className="flex items-center gap-2">
                        <div className="blog-author-circle">{art.autor.charAt(0)}</div>
                        <span className="text-sm text-gray-600">{art.autor}</span>
                      </div>

                      <button className="blog-leer-btn">
                        Leer <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>

              ))}
            </div>
          </div>
        )}

        {/* Lista de Artículos */}
        <div>
          <h2 className="blog-todos-title">
            {selectedCategory === "todos"
              ? "Todos los Artículos"
              : `Artículos de ${categorias.find(c => c.id === selectedCategory)?.name}`}
          </h2>

          {selectedCategory === "finanzas" && filteredArticulos.length > 0 && (
            <div className="finanzas-featured">

              {/* IMAGEN */}
              <img 
                src="https://osirismacias.com/wp-content/uploads/sites/45/2022/09/metas-financieras-600x475.jpg"
                alt="Metas Financieras"
                className="finanzas-featured-img"
              />

              <div className="finanzas-featured-inner">
                
                <span className="blog-card-dest-tag">Finanzas</span>

                <h3 className="finanzas-featured-title">
                  {filteredArticulos[0].titulo}
                </h3>

                <p className="finanzas-featured-text">
                  {filteredArticulos[0].extracto}
                </p>

                {/* META: FECHA + AUTOR */}
                <div className="meta-finanzas">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>15 Noviembre 2024</span>
                  </div>

                  <div className="meta-item autor-inline">
                    <User size={16} />
                    <span className="autor-nombre">{filteredArticulos[0].autor}</span>
                  </div>
                </div>

                {/* FOOTER COMPLETO CON ICONOS Y BOTÓN */}
                <div className="finanzas-footer">

                  {/* ICONOS INTERACTIVOS */}
                  <div className="finanzas-icons">

                    {/* ❤️ LIKE AL POST */}
                    <div className="icon-item" onClick={toggleFinanzasLike} style={{cursor: "pointer"}}>
                      <Heart 
                        size={18} 
                        color={finanzasLiked ? "red" : "#777"} 
                        fill={finanzasLiked ? "red" : "none"} 
                      />
                      <span>{finanzasLikes}</span>
                    </div>

                    {/* 💬 COMENTARIOS */}
                    <div className="icon-item" onClick={toggleComments} style={{cursor: "pointer"}}>
                      <MessageCircle size={18} />
                      <span>{comments.length}</span>
                    </div>

                    {/* 🔗 COMPARTIR */}
                    <div className="icon-item">
                      <Share2 size={18} /> 
                    </div>

                  </div>

                  {/* BOTÓN LEER MÁS */}
                  <button className="finanzas-leer-mas">
                    Leer más
                  </button>
                </div>

                {/* DESPLIEGUE DE COMENTARIOS */}
                {commentsOpen && (
                  <div className="comments-box">

                    <h4>Comentarios</h4>

                    <textarea
                      placeholder="Escribe un comentario..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="comment-textarea"
                    />

                    <button onClick={addComment} className="comment-btn">Comentar</button>

                    <div className="comments-list">
                      {comments.map(comment => (
                        <div key={comment.id} className="comment-item">

                          <p>{comment.text}</p>

                          <div className="comment-actions">

                            <span 
                              onClick={() => toggleCommentLike(comment.id)} 
                              style={{cursor: "pointer"}}
                            >
                              <Heart 
                                size={14} 
                                color={comment.liked ? "red" : "#777"} 
                                fill={comment.liked ? "red" : "none"} 
                              /> {comment.likes}
                            </span>

                            <span 
                              className="comment-reply" 
                              onClick={() => {
                                const replyText = prompt("Escribe tu respuesta:");
                                if (replyText) replyToComment(comment.id, replyText);
                              }}
                            >
                              Responder
                            </span>
                          </div>

                          {comment.replies.length > 0 && (
                            <div className="comment-replies">
                              {comment.replies.map(r => (
                                <div key={r.id} className="reply-item">
                                  {r.text}
                                </div>
                              ))}
                            </div>
                          )}

                        </div>
                      ))}
                    </div>

                  </div>
                )}

              </div>
            </div>
          )}
          {/* ⬆️⬆️ AQUI TERMINA el contenedor destacado solo-finanzas ⬆️⬆️ */}

          {filteredArticulos.length === 0 && (
            <div className="blog-empty">
              <div className="blog-empty-icon">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3>No se encontraron artículos</h3>
              <p>Intenta con otra búsqueda o categoría</p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter */}
      <div className="blog-newsletter">
        <div className="blog-newsletter-inner">
          <h2 className="text-4xl font-black text-white mb-4">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Recibe los mejores artículos directamente en tu correo cada semana
          </p>

          <div className="blog-newsletter-form">
            <input
              type="email"
              placeholder="tu@email.com"
              className="blog-newsletter-input"
            />
            <button className="blog-newsletter-btn">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
