import React, { useState, useEffect } from "react";
import "./BlogGrupoDimher.css";
import { useLocation } from "react-router-dom";

import {
  Search,
  Calendar,
  User,
  Tag,
  Clock,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Share2,
  Heart,
  ChevronRight,
  Filter,
} from "lucide-react";

export default function BlogGrupoDimher() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoriaFromURL = params.get("categoria");
  const idFromURL = Number(params.get("id"));

  const abrirArticulo = (categoria, id) => {
  // 1. Cambiar categoría
  setSelectedCategory(categoria);

  // 2. Esperar a que React re-renderice
  setTimeout(() => {
    // 3. Ir a la categoría
    const section = document.getElementById(categoria);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
    }
  }, 100);

  // 4. Poner el id del artículo en la URL
  window.history.replaceState(null, "", `?categoria=${categoria}&id=${id}`);
};


// Función para compartir
const compartirArticulo = async (art) => {
  const shareData = {
    title: art.titulo,
    text: art.extracto,
    url: window.location.origin + `/blog?categoria=${art.categoria}&id=${art.id}`,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Enlace copiado al portapapeles.");
    }
  } catch (error) {
    console.log("Error al compartir:", error);
  }
};


  // Estados principales
  const [selectedCategory, setSelectedCategory] = useState(
    categoriaFromURL && categoriaFromURL !== "" ? categoriaFromURL : "todos"
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Likes persistidos por artículo (obj: { [id]: true })
  const [blogLikes, setBlogLikes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("blogLikes")) || {};
    } catch {
      return {};
    }
  });

  // Comentarios por post (obj: { [postId]: [ {id, authorId, authorName, text, date} ] })
  const [postComments, setPostComments] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("blogComments")) || {};
    } catch {
      return {};
    }
  });

  // UI states
  const [activeCommentBox, setActiveCommentBox] = useState(null); // postId que muestra la caja
  const [editingComment, setEditingComment] = useState(null); // comment id en edición
  const [commentText, setCommentText] = useState("");
  const [menuOpen, setMenuOpen] = useState(null); // comment id cuyo menú está abierto

  // Usuario simulado
  const currentUser = { id: 1, name: "Usuario Actual" };

  // Persistir likes y comentarios
  useEffect(() => {
    localStorage.setItem("blogLikes", JSON.stringify(blogLikes));
  }, [blogLikes]);

  useEffect(() => {
    localStorage.setItem("blogComments", JSON.stringify(postComments));
  }, [postComments]);

  // Toggle like por artículo
  const toggleBlogLike = (id) => {
    setBlogLikes((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      return updated;
    });
    
  };

useEffect(() => {
  if (location.pathname === "/blog") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}, [location.pathname]);


  // Agregar comentario (obj completo)
  const addComment = (postId) => {
    if (commentText.trim() === "") return;

    const commentObj = {
      id: Date.now(),
      authorId: currentUser.id,
      authorName: currentUser.name,
      text: commentText.trim(),
      date: new Date().toLocaleString(),
    };

    setPostComments((prev) => ({
      ...prev,
      [postId]: prev[postId] ? [...prev[postId], commentObj] : [commentObj],
    }));

    setCommentText("");
    setActiveCommentBox(null);
    setEditingComment(null);
    setMenuOpen(null);
  };

  // Eliminar comentario
  const deleteComment = (postId, commentId) => {
    setPostComments((prev) => ({
      ...prev,
      [postId]: (prev[postId] || []).filter((c) => c.id !== commentId),
    }));
    setMenuOpen(null);
  };

  // Iniciar edición
  const startEditingComment = (comment, postId) => {
    setEditingComment(comment.id);
    setCommentText(comment.text);
    setActiveCommentBox(postId);
    setMenuOpen(null);
  };

  // Guardar edición
  const saveEditedComment = (postId) => {
    if (commentText.trim() === "") return;
    setPostComments((prev) => ({
      ...prev,
      [postId]: (prev[postId] || []).map((c) =>
        c.id === editingComment ? { ...c, text: commentText.trim(), date: new Date().toLocaleString() } : c
      ),
    }));
    setEditingComment(null);
    setCommentText("");
    setActiveCommentBox(null);
    setMenuOpen(null);
  };

  // Scroll a sección por id
  const irACategoria = (categoria) => {
    const section = document.getElementById(categoria);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  // Datos (tal cual los tenías)
const categorias = [
  { id: "todos", name: "Todos" },
  { id: "analisis-terrenos", name: "Análisis de Terrenos" },
  { id: "leyes-regulaciones", name: "Leyes y Regulaciones" },
  { id: "comercializacion-lotes", name: "Comercialización de Lotes" },
  { id: "plusvalia-territorial", name: "Plusvalía Territorial" },
  { id: "infraestructura-proyectos", name: "Infraestructura en Proyectos" },
];


  const articulos = [
    {
      id: 1,
      titulo: "¿Cómo asegurar una inversión inteligente mediante el análisis del terreno?",
      categoria: "analisis-terrenos",
      autor: "María González",
      fecha: "15 Noviembre 2025",
      lecturaMin: 8,
      imagen:
        "https://www.aguirrebaeza.com/wp-content/uploads/2015/12/5179550_m.jpg",
      extracto:
        "El análisis de terrenos es el proceso de evaluación integral de una propiedad antes de su adquisición, considerando aspectos físicos, legales y de viabilidad técnica.",
      likes: 245,
      comentarios: 32,
      trending: true,
    },
    {
      id: 2,
      titulo: "Normativas clave que rigen el desarrollo inmobiliario en República Dominicana",
      categoria: "leyes-regulaciones",
      autor: "Carlos Ramírez",
      fecha: "12 Noviembre 2025",
      lecturaMin: 6,
      imagen:
        "https://presidencia.gob.do/sites/default/files/styles/large/public/news/2025-09/PHOTO-2025-09-11-20-05-30%20%281%29.jpg?itok=nAkYnjr0",
      extracto:
        "En República Dominicana, desarrollar terrenos no es solo planificar calles, levantar infraestructura y vender lotes.",
      likes: 189,
      comentarios: 28,
      trending: true,
    },
    {
      id: 3,
      titulo: "¿Cómo la visión estratégica impulsa la comercialización efectiva de lotes?",
      categoria: "comercializacion-lotes",
      autor: "Ana Martínez",
      fecha: "10 Noviembre 2025",
      lecturaMin: 10,
      imagen:
        "https://media.licdn.com/dms/image/v2/D4D12AQHxvhpu2kGoCA/article-cover_image-shrink_720_1280/B4DZkWbKByHYAM-/0/1757017846744?e=2147483647&v=beta&t=15UnuwXVIxvSCdaH0P_WmujlbnAKOPSlAHPaUTI7HGQ",
      extracto:
        "Cuando hablamos de comercialización de lotes, no se trata solo de vender terrenos; se trata de aplicar estrategias inteligentes que permitan mover inventario rápido, posicionar el proyecto y alcanzar los ingresos que el desarrollo necesita para ser rentable.",
      likes: 312,
      comentarios: 45,
      trending: true,
    },
    {
      id: 4,
      titulo: "¿Cómo Identificar Zonas con Alto Potencial Antes de Desarrollar un Terreno?",
      categoria: "plusvalia-territorial",
      autor: "Roberto Silva",
      fecha: "08 Noviembre 2025",
      lecturaMin: 7,
      imagen:
        "https://solario.pe/wp-content/uploads/2025/08/Terrenos-en-venta-en-Piura.jpg",
      extracto:
        "Factores claves que permiten anticipar el crecimiento urbano y elegir terrenos que garanticen alta rentabilidad en el mediano y largo plazo.",
      likes: 278,
      comentarios: 38,
      trending: false,
    },
    {
      id: 5,
      titulo: "Planificación de Infraestructura en Proyectos de Urbanización",
      categoria: "infraestructura-proyectos",
      autor: "Laura Pérez",
      fecha: "05 Noviembre 2025",
      lecturaMin: 9,
      imagen: "https://d2fl3xywvvllvq.cloudfront.net/wp-content/uploads/2019/02/architecture.jpg",
      extracto:  "Cuando hablamos de desarrollar terrenos, muchas personas piensan solo en el trazado de calles y la división de lotes. Pero la verdadera columna vertebral de un proyecto inmobiliario exitoso es la infraestructura. Sin infraestructura, un lote es solo tierra.",
      likes: 156,
      comentarios: 21,
      trending: false,
    },
    {
      id: 6,
      titulo: "¿Cómo evaluar si un terreno es apto para un desarrollo inmobiliario?",
      categoria: "analisis-terrenos",
      autor: "Diego Torres",
      fecha: "03 Noviembre 2024",
      lecturaMin: 5,
      imagen:
        "https://media.licdn.com/dms/image/v2/D5612AQFqYZqyDxldcQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1687286462862?e=2147483647&v=beta&t=BtwPO09rC0IT4JgzAr1jXP9Fn_hTD49RzbBLeJ5yemU",
      extracto:
        "Guía práctica y definitiva para identificar terrenos rentables, evitar riesgos y tomar decisiones seguras.",
      likes: 423,
      comentarios: 67,
      trending: true,
    },
    {
      id: 7,
      titulo: "Guía esencial para evitar fraudes inmobiliarios",
      categoria: "leyes-regulaciones",
      autor: "Isabel Moreno",
      fecha: "01 Noviembre 2024",
      lecturaMin: 6,
      imagen:
        "https://cdn-blog.arriendo.com/co/blog/wp-content/uploads/2022/11/estafas-en-finca-raiz-scaled.jpg",
      extracto:
        "Comprar un terreno puede ser la mejor decisión para crear valor… o el peor error si no verificas su legalidad.",
      likes: 267,
      comentarios: 34,
      trending: false,
    },

  ];

  const articulosDestacados = articulos.filter((art) => art.trending).slice(0, 3);

  const filteredArticulos = articulos.filter((art) => {
    const matchCategory = selectedCategory === "todos" || art.categoria === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchSearch = q === "" || art.titulo.toLowerCase().includes(q) || art.extracto.toLowerCase().includes(q);
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

      {/* Anclas */}
      <div id="finanzas" className="blog-category-anchor" />
      <div id="carrera" className="blog-category-anchor" />
      <div id="liderazgo" className="blog-category-anchor" />
      <div id="tecnologia" className="blog-category-anchor" />
      <div id="cultura" className="blog-category-anchor" />

      {/* CONTENIDO */}
      <div className="blog-main">
        {/* Categorías */}
        <div className="blog-categorias-wrapper">
          <div className="blog-categorias-head">
            <Filter className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-800">Categorías</h2>
          </div>

<div className="blog-categorias-list">
  {categorias.map((cat) => (
    <button
      key={cat.id}
      className={`blog-cat-btn ${selectedCategory === cat.id ? "blog-cat-active" : ""}`}
      data-cat={cat.id}   // <-- AQUÍ VA
      onClick={() => setSelectedCategory(cat.id)}
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
              {articulosDestacados.map((art) => (
                <div key={art.id} className="blog-card-dest">
                  <div
                    className="blog-card-dest-bg"
                    style={{
                      backgroundImage: `url(${art.imagen})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="blog-card-dest-inner">
                    <div className="blog-card-dest-meta">
                      <span className="blog-card-tag" data-cat={art.categoria}>
                        {categorias.find((c) => c.id === art.categoria)?.name}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        {art.lecturaMin} min
                      </span>
                    </div>

                    <h3 className="blog-card-dest-title">{art.titulo}</h3>
                    <p className="blog-card-dest-text">{art.extracto}</p>

                    <div className="meta-finanzas" style={{ marginTop: "14px" }}>
                      <div className="meta-item autor-inline">
                        <div className="autor-icon">{art.autor.charAt(0)}</div>
                        <span className="blog-card-author">{art.autor}</span>
                      </div>

                      <button
  className="blog-leer-small-btn"
  onClick={() => abrirArticulo(art.categoria, art.id)}
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
        <div className="blog-list-container">
        <h2 className="blog-section-title blog-todos-title">
  {selectedCategory === "todos" ? "Todos los artículos" : categorias.find((c) => c.id === selectedCategory)?.name}
</h2>


          {filteredArticulos.map((art) => (
            <div key={art.id} className="blog-card-dest" style={{ marginBottom: "40px" }}>
              <div
                className="blog-card-dest-bg"
                style={{
                  backgroundImage: `url(${art.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="blog-card-dest-inner">
                <div className="blog-card-dest-meta">
                  <span className="blog-card-tag" data-cat={art.categoria}>
                    {categorias.find((c) => c.id === art.categoria)?.name}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {art.lecturaMin} min
                  </span>
                </div>

                <h3 className="blog-card-dest-title">{art.titulo}</h3>
                <p className="blog-card-dest-text">{art.extracto}</p>

                {/* Mostrar contenido extra SOLO si coincide con idFromURL */}
{/* TEXTO COMPLETO PARA PUBLICACIÓN 1 */} 
{art.id === 1 && selectedCategory === "analisis-terrenos" && (
  <div className="blog-extra-content">
    <div className="blog-extra-full" style={{ marginTop: "20px" }}>

      <h3><strong>Análisis de Terrenos</strong></h3>
      <p>
        El análisis de terrenos es el proceso de evaluación integral de una propiedad antes de su adquisición, 
        considerando aspectos físicos, legales y de viabilidad técnica.
      </p>

      <p>
        <strong>Objetivo:</strong> Minimizar riesgos de inversión identificando problemas potenciales y determinar 
        la factibilidad técnica y económica del desarrollo proyectado antes de comprometer capital.
      </p>

      <h3 style={{ marginTop: "18px" }}><strong>¿Qué evaluar antes de comprar?</strong></h3>
      <p>
        Antes de adquirir un terreno, es fundamental realizar estudios topográficos y de mecánica de suelos que 
        revelen las características físicas del predio. Esto determina si el terreno soportará construcciones 
        y qué costos de preparación serán necesarios.
      </p>

      <h3 style={{ marginTop: "18px" }}><strong>Due Diligence Legal</strong></h3>
      <p>
        Verificar la situación jurídica es crítico: revisar escrituras, ausencia de gravámenes, sucesiones intestadas 
        y que los linderos coincidan con la documentación. Un terreno con problemas legales puede convertirse 
        en una inversión perdida.
      </p>

      <h3 style={{ marginTop: "18px" }}><strong>Servicios y Accesibilidad</strong></h3>
      <p>
        La disponibilidad de agua, drenaje, electricidad y accesos pavimentados impacta directamente en los costos 
        de urbanización. Terrenos bien ubicados con servicios cercanos reducen la inversión inicial y aceleran 
        la comercialización.
      </p>

    </div>
  </div>
)}


 
{/* 📌 TEXTO COMPLETO PARA LA SEGUNDA PUBLICACIÓN (ANÁLISIS DE TERRENOS) */} 
{art.id === 6 && (
  <div className="blog-extra-content">

    {/* TEXTO COMPLETO SOLO CUANDO SE ESTÁ EN LA CATEGORÍA Análisis de Terrenos */}
    {selectedCategory === "analisis-terrenos" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>Cómo evaluar si un terreno es apto para un desarrollo inmobiliario</strong></h2>
        <p>
          Guía práctica y definitiva para identificar terrenos rentables, evitar riesgos y tomar decisiones seguras.
          Comprar un terreno no es solo elegir un lugar bonito: es tomar una decisión estratégica que puede multiplicar 
          (o destruir) tu inversión.  
          En esta guía aprenderás, con pasos claros y aplicables, cómo determinar si un terreno es realmente viable 
          para un desarrollo inmobiliario. Al finalizar tendrás un criterio profesional para decidir con seguridad, 
          reducir riesgos y comunicar confianza a clientes o socios.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Empieza por la visión: ¿Qué quieres desarrollar?</strong></h3>
        <p>
          Antes de analizar aspectos técnicos, define el objetivo: ¿lotes residenciales, proyectos turísticos, 
          industriales o urbanizaciones?  
          El uso propuesto determina las normativas aplicables, requisitos técnicos y perfil de comprador. 
          Esta claridad ahorra tiempo y evita verificaciones innecesarias.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Análisis físico del terreno (campo)</strong></h3>
        <ul className="blog-list">
          <li><strong>Accesos y conectividad:</strong> mide carreteras, caminos y tiempo hacia zonas urbanas. Un terreno bien conectado vende más rápido.</li>
          <li><strong>Topografía:</strong> pendientes fuertes o depresiones elevan costos de movimiento de tierra y drenaje.</li>
          <li><strong>Suelo y geotecnia:</strong> solicita un estudio básico para evitar suelos inestables que encarezcan cimentaciones.</li>
          <li><strong>Hidrología e inundaciones:</strong> revisa cauces, humedales e historial de crecidas.</li>
          <li><strong>Servicios cercanos:</strong> agua, electricidad, saneamiento e internet. La ausencia de estos puede retrasar años un proyecto.</li>
          <li><strong>Vegetación y restricciones ambientales:</strong> identifica áreas protegidas, especies o bosques no edificables.</li>
        </ul>

        <h3 style={{ marginTop: "18px" }}><strong>Análisis legal y registral (seguridad jurídica)</strong></h3>
        <ul className="blog-list">
          <li><strong>Titularidad y saneamiento:</strong> exige título, historial registral y ausencia de litigios.</li>
          <li><strong>Linderos y planos:</strong> verifica coherencia entre el plano catastral y la realidad física.</li>
          <li><strong>Servidumbres y restricciones:</strong> caminos, pasos, uso agrícola o limitaciones municipales.</li>
          <li><strong>Compatibilidad municipal:</strong> uso de suelo, densi­dad, retraimientos y requisitos del ayuntamiento.</li>
          <li><strong>Normas recientes:</strong> revisa nuevas ordenanzas que puedan afectar el proyecto.</li>
        </ul>

        <h3 style={{ marginTop: "18px" }}><strong>Evaluación ambiental y permisos</strong></h3>
        <ul className="blog-list">
          <li><strong>DIA o estudios ambientales:</strong> determina si el proyecto requiere permisos ambientales.</li>
          <li><strong>Zonas protegidas o riesgo de erosión:</strong> evita paralizaciones costosas.</li>
          <li><strong>Plan de mitigación:</strong> considera costos y tiempos si hay afectación ambiental.</li>
        </ul>

        <h3 style={{ marginTop: "18px" }}><strong>Factibilidad técnica (servicios e infraestructura)</strong></h3>
        <ul className="blog-list">
          <li><strong>Factibilidad eléctrica:</strong> solicita confirmación a EDENORTE, EDESUR o EDEESTE.</li>
          <li><strong>Agua y saneamiento:</strong> disponibilidad o necesidad de pozos o plantas sépticas.</li>
          <li><strong>Vialidad interna:</strong> determina si las vías soportan el tráfico proyectado.</li>
          <li><strong>Telecomunicaciones:</strong> internet/fibra óptica es clave para la demanda actual.</li>
          <li><strong>Costos de urbanización:</strong> movimiento de tierra, calles, desagüe, alumbrado y permisos.</li>
        </ul>

        <h3 style={{ marginTop: "18px" }}><strong>Análisis de mercado y demanda</strong></h3>
        <ul className="blog-list">
          <li><strong>Perfil de comprador:</strong> inversionistas, constructores o usuarios finales.</li>
          <li><strong>Competencia:</strong> evalúa oferta y velocidad de venta en la zona.</li>
          <li><strong>Plusvalía proyectada:</strong> inversión pública, vías nuevas o crecimiento urbano.</li>
          <li><strong>Estrategias de venta:</strong> financiamiento, precios, incentivos y argumentos de valor.</li>
        </ul>

        <h3 style={{ marginTop: "18px" }}><strong>Evaluación financiera</strong></h3>
        <ul className="blog-list">
          <li>Costo total: adquisición + urbanización + permisos.</li>
          <li>Precio de venta por lote y ritmo esperado.</li>
          <li>Margen deseado y recuperación.</li>
          <li>Escenarios negativos: menor precio, retraso en ventas.</li>
          <li>Flujo de caja: preventas, préstamos o socios.</li>
        </ul>

        <h3 style={{ marginTop: "18px" }}><strong>Riesgos comunes y cómo mitigarlos</strong></h3>
        <ul className="blog-list">
          <li><strong>Títulos no saneados →</strong> saneamiento previo y revisión registral.</li>
          <li><strong>Problemas de drenaje →</strong> diseño pluvial profesional.</li>
          <li><strong>Falta de servicios →</strong> acuerdos con suplidoras o ejecución por fases.</li>
          <li><strong>Cambios normativos →</strong> constante actualización legal.</li>
          <li><strong>Sobreoferta →</strong> diferenciación y estrategia comercial.</li>
        </ul>

        <h3 style={{ marginTop: "18px" }}><strong>Cómo presentar tu análisis a socios o compradores</strong></h3>
        <ul className="blog-list">
          <li><strong>Resumen ejecutivo claro:</strong> 1 página con conclusión (apto/no apto).</li>
          <li><strong>Anexos técnicos:</strong> estudios geotécnicos, registros, planos.</li>
          <li><strong>Riesgos y mitigación:</strong> transparencia genera confianza.</li>
          <li><strong>Plan comercial:</strong> cronograma de ventas y metas.</li>
        </ul>

        <h3 style={{ marginTop: "20px" }}><strong>Conclusión</strong></h3>
        <p>
          Un análisis de terreno bien ejecutado transforma incertidumbre en oportunidad. 
          Evalúa aspectos técnicos, legales, comerciales y financieros para tomar una decisión informada.  
          Con este enfoque no solo minimizas riesgos: aumentas la confianza del mercado, mejoras tu reputación 
          y elevas las probabilidades de éxito en cualquier desarrollo.
        </p>

      </div>
    )}
  </div>
)}

{/* 📌 TEXTO EXTENDIDO SOLO PARA LA PRIMERA PUBLICACIÓN DE LEYES Y REGULACIONES */} 
{art.id === 2 && (
  <div className="blog-extra-content">

    {selectedCategory === "leyes-regulaciones" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>Leyes que protegen la inversión, garantizan el orden urbano y aseguran proyectos exitosos</strong></h2>

        <p>
          En República Dominicana, desarrollar terrenos no es solo planificar calles, levantar infraestructura y vender lotes.
          Detrás de cada proyecto responsable existe un marco legal sólido que garantiza orden, seguridad jurídica y crecimiento
          sostenible.
        </p>

        <p>
          Para un desarrollador —ya sea pequeño, mediano o grande— entender estas normativas no es opcional: es la base para evitar
          riesgos, proteger la inversión y asegurar que el proyecto pueda venderse sin contratiempos legales.
        </p>

        <p>
          Aquí te presento las leyes y regulaciones más importantes que rigen el desarrollo inmobiliario en el país, explicadas de manera clara y práctica.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Ley 675-44 de Urbanización, Ornato Público y Construcciones</strong></h3>
        <p>
          Esta es la ley principal que regula cómo se desarrollan los terrenos en zonas urbanas y de expansión.
          Establece requisitos para fraccionamientos y urbanizaciones, dimensiones mínimas de los lotes, ancho de calles, áreas verdes,
          permisos obligatorios y normas de construcción y uso del suelo.
          Sin cumplir con esta ley, ningún proyecto puede obtener aprobaciones oficiales ni venderse legalmente con confianza.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Ley 176-07 del Distrito Nacional y los Municipios — Ordenamiento Territorial</strong></h3>
        <p>
          Los ayuntamientos tienen un papel clave en la aprobación de proyectos.
          Esta ley regula el ordenamiento urbano, la zonificación, el uso permitido del suelo y los permisos municipales.
          Antes de comprar o desarrollar un terreno, es vital confirmar que su uso coincide con el tipo de proyecto que se quiere realizar.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Ley 64-00 — Ministerio de Medio Ambiente</strong></h3>
        <p>
          Todo desarrollo genera impacto, por eso esta ley exige Declaración de Impacto Ambiental (DIA), licencias ambientales según
          el tamaño del proyecto y buenas prácticas en manejo de desechos, agua, suelo y vegetación.
          Un proyecto sin permisos ambientales puede ser paralizado, multado o incluso clausurado.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Normas Eléctricas y Distribuidoras (EDENORTE, EDESUR, EDEESTE)</strong></h3>
        <p>
          Antes de instalar energía eléctrica, se requiere factibilidad eléctrica, aprobación de diseño e infraestructura conforme a
          reglamentos técnicos. Muchos proyectos se retrasan por no gestionar este permiso a tiempo.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Registro de Títulos — Ley 108-05 de Registro Inmobiliario</strong></h3>
        <p>
          La seguridad jurídica es vital. Esta ley regula el saneamiento y deslinde de propiedades, certificaciones de título,
          actualización y división de terrenos, registro de hipotecas y ventas.
          Sin un título saneado, ningún lote puede venderse con seguridad.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>¿Por qué estas normas son tan importantes?</strong></h3>
        <p>
          Porque protegen a los compradores, a los desarrolladores y a las inversiones, garantizando que los proyectos sean legales,
          seguros, con servicios reales y con plusvalía sostenible.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Conclusión</strong></h3>
        <p>
          El desarrollo inmobiliario responsable no solo requiere visión y capital, sino también un dominio profundo del marco legal
          dominicano. Conocer y aplicar estas normativas evita contratiempos, da confianza al mercado y convierte un simple proyecto
          en un desarrollo sólido, sostenible y de alto valor.
        </p>

        <p>
          Quien respeta la ley, construye futuro.  
          Y quien la domina, construye proyectos exitosos con plusvalía garantizada.
        </p>

      </div>
    )}
  </div>
)}

{/* 📌 TEXTO EXTENDIDO PARA LA SEGUNDA PUBLICACIÓN DE VALIDACIÓN LEGAL DE TERRENOS */}
{art.id === 7 && (
  <div className="blog-extra-content">
    
    {selectedCategory === "leyes-regulaciones" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>Cómo Validar la Legalidad de un Terreno Antes de Comprar</strong></h2>
        <p>
          Esta guía te enseña qué revisar, en qué orden, y por qué cada paso es crítico. 
          Siguiendo estos pasos reduces el riesgo, proteges capital y transmites confianza 
          a socios y compradores.
        </p>

        <h3><strong>¿Por qué validar la legalidad es lo primero que debes hacer?</strong></h3>
        <p>
          La seguridad jurídica es la base del negocio inmobiliario: sin un título saneado, 
          sin registros claros o sin permisos ambientales, una parcela puede quedar inmovilizada 
          por años o perder su valor. Por eso este proceso no es opcional: 
          <strong>es la protección de tu inversión.</strong>
        </p>

        <h3><strong>Paso 1 — Verifica el título y el estado registral (Registro de Títulos)</strong></h3>
        <p><strong>Qué hacer:</strong></p>
        <ul className="blog-list">
          <li>Solicita el Certificado de Título o un extracto actualizado en la Oficina de Registro de Títulos.</li>
          <li>Revisa titularidad, historial de transferencias, gravámenes, hipotecas, embargos o limitaciones.</li>
          <li>Pide una Certificación de Estado Jurídico si está disponible.</li>
        </ul>
        <p>
          <strong>Por qué:</strong> El sistema dominicano de Registro Inmobiliario (Ley 108-05) garantiza la seguridad del derecho real. 
          Un título vigente es la primera evidencia de que puedes comprar con confianza.
        </p>

        <h3><strong>Paso 2 — Revisa normativa municipal y zonificación (Ayuntamiento / Ordenamiento Territorial)</strong></h3>
        <p><strong>Qué hacer:</strong></p>
        <ul className="blog-list">
          <li>Verifica el uso de suelo permitido (residencial, comercial, industrial, mixto).</li>
          <li>Consulta ordenanzas locales, retraimientos, áreas verdes mínimas y densidad permitida.</li>
        </ul>

        <h3><strong>Paso 3 — Permisos ambientales y DIA</strong></h3>
        <p><strong>Qué hacer:</strong></p>
        <ul className="blog-list">
          <li>Confirma si el proyecto requiere Declaración o Estudio de Impacto Ambiental.</li>
          <li>Revisa si el terreno está en áreas protegidas, humedales o zonas de riesgo.</li>
          <li>Pide certificaciones ambientales vigentes.</li>
        </ul>

        <h3><strong>Paso 4 — Controles técnicos: topografía, geotecnia e hidrología</strong></h3>
        <p><strong>Qué hacer:</strong></p>
        <ul className="blog-list">
          <li>Haz un levantamiento topográfico profesional.</li>
          <li>Solicita un estudio geotécnico preliminar.</li>
          <li>Evalúa hidrología: riesgo de inundaciones y drenaje natural.</li>
        </ul>

        <h3><strong>Paso 5 — Registros adicionales y antecedentes</strong></h3>
        <p><strong>Qué hacer:</strong></p>
        <ul className="blog-list">
          <li>Revisa archivos de Mensuras Catastrales, Registro Inmobiliario y Catastro.</li>
          <li>Busca resoluciones administrativas, sanciones o reclamaciones.</li>
          <li>Consulta con la comunidad local sobre antecedentes del terreno.</li>
        </ul>

        <h3><strong>Análisis financiero y de riesgo</strong></h3>
        <p><strong>Qué hacer:</strong></p>
        <ul className="blog-list">
          <li>Suma precio + saneamiento + urbanización + tiempo de permisos.</li>
          <li>Define escenarios: optimista, base y pesimista.</li>
          <li>Determina si el negocio sigue siendo viable.</li>
        </ul>

        <h3><strong>Conclusión</strong></h3>
        <p>
          Validar la legalidad de un terreno no es burocracia: es la diferencia entre un proyecto que crece 
          y una inversión que se hunde. Si quieres proteger capital y generar confianza, 
          el due diligence debe ser tu primera inversión. 
          La verificación sistemática reduce sorpresas, protege tu reputación y atrae compradores seguros.
        </p>

      </div>
    )}

  </div>
)}


{/* 📌 TEXTO EXTENDIDO PARA LA PUBLICACIÓN DE COMERCIALIZACIÓN DE LOTES (ID 3) */} 
{art.id === 3 && (
  <div className="blog-extra-content">

    {selectedCategory === "comercializacion-lotes" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>Comercialización de Lotes</strong></h2>
        <p>
          Cuando hablamos de comercialización de lotes, no se trata solo de vender terrenos; 
          se trata de aplicar estrategias inteligentes que permitan mover inventario rápido, 
          posicionar el proyecto y alcanzar los ingresos que el desarrollo necesita para ser rentable. 
          Vender lotes con éxito es una mezcla de marketing, análisis del mercado y una buena estructura comercial.
        </p>

        <h3><strong>Segmentación de Mercado</strong></h3>
        <p>
          Primero, es fundamental entender a quién va dirigido el desarrollo. Esto es lo que llamamos 
          segmentación de mercado. No es lo mismo hablarle a un constructor, que busca lotes grandes, 
          listos para construir y con buena zonificación, que a un inversionista, que se enfoca en plusvalía, 
          precios competitivos y opciones de financiamiento. Y tampoco es igual si te diriges a un comprador final, 
          que valora las facilidades de pago, la ubicación, los servicios y el estilo de vida que el proyecto ofrece.
          Cuando defines correctamente tu público, toda tu estrategia comercial se vuelve más efectiva.
        </p>

        <h3><strong>Estrategias de Venta</strong></h3>
        <p>
          Ahora, ¿cómo conviertes ese interés en ventas reales? Aquí entran las estrategias de venta. 
          Ofrecer financiamiento directo, por ejemplo, abre la puerta a compradores que quizás no califican 
          en la banca tradicional. Los descuentos por pronto pago atraen inversionistas, y los paquetes 
          de varios lotes son ideales para constructores que buscan desarrollar. Además, la escrituración inmediata 
          y contar con servicios ya instalados se convierten en argumentos de peso, porque muestran que el proyecto 
          está listo y evita riesgos.
        </p>

        <h3><strong>Marketing Digital</strong></h3>
        <p>
          En el mercado actual, nada acelera más las ventas que un buen marketing digital. Hoy, las personas 
          compran información antes de comprar un lote. Por eso es clave usar redes sociales, Google Ads, 
          recorridos virtuales 360° y sitios web especializados. Mostrar el avance de obras, la plusvalía proyectada, 
          los beneficios del entorno y testimonios reales genera credibilidad. En un mundo saturado de opciones, 
          quien comunica mejor, vende más.
        </p>

        <h3><strong>Conclusión</strong></h3>
        <p>
          La comercialización de lotes se trata de entender a tu público, ofrecer las facilidades correctas 
          y comunicar el valor del proyecto con claridad y estrategia. Cuando dominas estos tres pilares, 
          no solo vendes lotes: creas demanda, posicionas tu marca y aseguras la rentabilidad del desarrollo.
        </p>

      </div>
    )}
  </div>
)}

{/* 📌 TEXTO EXTENDIDO PARA LA PUBLICACIÓN DE PLUSVALÍA TERRITORIAL (ID 4) */} 
{art.id === 4 && (
  <div className="blog-extra-content">

    {selectedCategory === "plusvalia-territorial" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>Evaluación de Plusvalía Territorial</strong></h2>
        <p>
          Elegir el terreno correcto es la decisión más importante de todo el proceso 
          de desarrollo inmobiliario. Puedes tener la mejor urbanización, las calles 
          más amplias o las mejores facilidades, pero si el terreno está en un área 
          sin proyección, la inversión simplemente no crece.
        </p>

        <p>
          Por eso, los desarrolladores exitosos no “compran tierra”: <strong>compran futuro</strong>.
        </p>

        <p>
          La evaluación de plusvalía territorial es el análisis profundo que permite 
          identificar cuáles zonas tienen potencial de crecimiento y cuáles no. 
          Esta práctica te ayuda a invertir antes de que la zona explote, 
          garantizando una ventaja competitiva enorme.
        </p>

        <h3><strong>El crecimiento urbano nunca es aleatorio</strong></h3>
        <p>Toda expansión de la ciudad sigue patrones. Las zonas que incrementan su valor lo hacen por una combinación de factores:</p>

        <ul className="blog-list">
          <li>Nuevas vías de acceso</li>
          <li>Proximidad a centros urbanos</li>
          <li>Infraestructura en desarrollo</li>
        </ul>

        <h3><strong>La infraestructura crea valor antes de que se construya</strong></h3>
        <p>
          Un anuncio gubernamental sobre una nueva carretera o una ampliación eléctrica 
          puede ser suficiente para duplicar la plusvalía futura de una zona.
        </p>

        <p>Un desarrollador inteligente analiza:</p>

        <ul className="blog-list">
          <li>Proyectos viales futuros</li>
          <li>Planes municipales</li>
          <li>Expansiones de servicios públicos</li>
        </ul>

        <h3><strong>Riesgos que pueden frenar la plusvalía</strong></h3>
        <p>Así como hay factores que impulsan el crecimiento, también hay señales de alerta:</p>

        <ul className="blog-list">
          <li>Zonas con conflictos legales o de títulos</li>
          <li>Problemas ambientales (inundaciones, suelos de mala calidad)</li>
        </ul>

        <h3><strong>Un terreno bien evaluado es un proyecto exitoso garantizado</strong></h3>
        <p>Cuando un terreno cumple con:</p>

        <ul className="blog-list">
          <li>Ubicación estratégica</li>
          <li>Accesibilidad</li>
          <li>Servicios cercanos</li>
          <li>Proyecciones reales de crecimiento</li>
        </ul>

        <p>
          Tienes en las manos un proyecto con <strong>plusvalía asegurada</strong>, 
          incluso antes de urbanizarlo.
        </p>

        <h3><strong>Conclusión</strong></h3>
        <p>
          La evaluación de plusvalía territorial no solo mejora tus decisiones de compra, 
          sino que multiplica tus resultados. Un buen terreno no es el que cuesta barato… 
          <strong>es el que crecerá sin que tú tengas que empujarlo</strong>.
        </p>

        <p>
          Quien domina esta habilidad no solo desarrolla terrenos: 
          <strong>anticipa el futuro y construye oportunidades</strong>.
        </p>

      </div>
    )}
  </div>
)}

{/* 📌 TEXTO EXTENDIDO PARA LA PUBLICACIÓN DE INFRAESTRUCTURA (ID 5) */} 
{art.id === 5 && (
  <div className="blog-extra-content">

    {selectedCategory === "infraestructura-proyectos" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>Cómo una Buenas Infraestructura Multiplica el Valor de un Desarrollo</strong></h2>
        <p>
          Cuando hablamos de desarrollar terrenos, muchas personas piensan solo en el trazado de calles y la división de lotes. 
          Pero la verdadera columna vertebral de un proyecto inmobiliario exitoso es la infraestructura.
        </p>

        <p><strong>Sin infraestructura, un lote es solo tierra.<br/>
        Con la infraestructura correcta, se convierte en una oportunidad.</strong></p>

        <p>
          Los desarrolladores que entienden esto no construyen “calles y postes”; construyen conectividad, confort, seguridad 
          y calidad de vida.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>La infraestructura es el motor de la plusvalía</strong></h3>
        <p>
          Una zona puede tener buen potencial, pero lo que realmente convierte un terreno común en un desarrollo de alto valor 
          es la calidad de su infraestructura:
        </p>

        <ul className="blog-list">
          <li>Calles bien diseñadas</li>
          <li>Drenaje pluvial eficiente</li>
          <li>Electricidad estable</li>
          <li>Agua disponible o facilidades de conexión</li>
          <li>Áreas verdes y espacios recreativos</li>
          <li>Señalización y accesos claros</li>
        </ul>

        <p>
          Cada elemento no solo mejora la habitabilidad, sino que incrementa el valor de los lotes y los hace más atractivos 
          para inversionistas, constructores y compradores finales.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Infraestructura inteligente: el nuevo estándar del mercado</strong></h3>
        <p>
          Los compradores actuales no buscan solamente un terreno. Buscan:
        </p>

        <ul className="blog-list">
          <li>Seguridad jurídica</li>
          <li>Conexión rápida a centros urbanos</li>
          <li>Servicios garantizados</li>
        </ul>

        <p>
          Por eso, la tendencia moderna es desarrollar con infraestructura inteligente, donde todo está planificado para 
          funcionar a largo plazo y evitar costos futuros.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Elementos clave en la planificación de infraestructura</strong></h3>

        <h4><strong>1. Diseño vial estratégico</strong></h4>
        <p>
          No todas las calles tienen la misma función. Un buen proyecto define:
        </p>

        <ul className="blog-list">
          <li>Vías principales para circulación</li>
          <li>Calles secundarias para acceso</li>
          <li>Áreas de giro y maniobra</li>
          <li>Espacios para estacionamiento</li>
        </ul>

        <p>
          Esto reduce congestión, mejora la movilidad y aumenta la seguridad del proyecto.
        </p>

        <h4><strong>2. Drenaje pluvial: el guardián del terreno</strong></h4>
        <p>
          Un sistema pluvial bien diseñado evita:
        </p>

        <ul className="blog-list">
          <li>Inundaciones</li>
          <li>Daños estructurales</li>
          <li>Pérdida de valor de los lotes</li>
        </ul>

        <p>
          La mala planificación pluvial es una de las principales razones por las que muchos proyectos fallan.
        </p>

        <h4><strong>3. Suministro eléctrico y alumbrado</strong></h4>
        <p>
          Una urbanización iluminada no solo se ve mejor: <strong>vende más rápido.</strong>
        </p>
        <p>
          La conexión eléctrica estable es garantía de habitabilidad y seguridad.
        </p>

        <h4><strong>4. Áreas verdes y zonas de convivencia</strong></h4>
        <p>
          Los desarrollos con espacios naturales logran:
        </p>

        <ul className="blog-list">
          <li>Mayor atractivo visual</li>
          <li>Mejor percepción de calidad</li>
          <li>Incremento del valor comercial</li>
          <li>Mayor velocidad de venta</li>
        </ul>

        <p>
          Una simple área verde puede aumentar la plusvalía del desarrollo entre un 8% y un 15%.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Conclusión</strong></h3>
        <p>
          La infraestructura no es un gasto: <strong>es la inversión que garantiza la rentabilidad del proyecto.</strong>
        </p>

        <p>
          Un buen lote no se vende solo porque es bonito, sino porque está respaldado por un proyecto urbanístico 
          con servicios reales, accesos claros y planificación inteligente.
        </p>

        <p>
          Los desarrolladores que dominan esta etapa no solo urbanizan terrenos… 
          construyen comunidades, multiplican la plusvalía y aseguran el éxito a largo plazo.
        </p>

      </div>
    )}
  </div>
)}


    <div className="meta-finanzas">
                  <div className="meta-item">
                    <Calendar className="w-4 h-4" />
                    <span className="blog-card-date">{art.fecha}</span>
                  </div>

                  <div className="meta-item autor-inline">
                    <div className="autor-icon">{art.autor.charAt(0)}</div>
                    <span className="autor-nombre">{art.autor}</span>
                  </div>
                </div>

                <div className="post-icons-top-line" />

                {/* Botón leer más si no está en su área */}
                {selectedCategory !== art.categoria && (
               <button
  className="blog-leer-small-btn"
  onClick={() => abrirArticulo(art.categoria, art.id)}
>
  Leer más
</button>

                )}

                {/* Acciones: like, comentar, compartir */}
                <div className="post-actions">
                  <div
                    className={`action-item ${blogLikes[art.id] ? "liked" : ""}`}
                    onClick={() => toggleBlogLike(art.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => {}}
                  >
                    <Heart className="action-icon" />
                    <span>{blogLikes[art.id] ? art.likes + 1 : art.likes}</span>
                  </div>

                  <div
                    className="action-item comment-toggle"
                    onClick={() => setActiveCommentBox(activeCommentBox === art.id ? null : art.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => {}}
                  >
                    <MessageCircle className="action-icon" />
                    <span>{(postComments[art.id] || []).length}</span>
                  </div>

                  <div
  className="action-item"
  onClick={() => compartirArticulo(art)}
  role="button"
  tabIndex={0}
>
  <Share2 className="action-icon" />
  <span>Compartir</span>
</div>

                </div>

                {/* Sección de comentarios (visible por artículo) */}
                {activeCommentBox === art.id && (
                  <div className="comments-section">
                    <div className="comment-container">
                      <div className="comment-header">
                        <div className="comment-avatar" />
                        <div className="comment-user-info">
                          <span className="comment-username">{currentUser.name}</span>
                          <span className="comment-time">• ahora</span>
                        </div>
                      </div>

                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Escribe tu comentario aquí..."
                        className="comment-textarea"
                        rows={3}
                      />

                      <div className="comment-actions">
                        {!editingComment ? (
                          <button className="comment-btn primary" onClick={() => addComment(art.id)}>
                            Agregar comentario
                          </button>
                        ) : (
                          <button className="comment-btn secondary" onClick={() => saveEditedComment(art.id)}>
                            Guardar edición
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="comments-list">
                      {(postComments[art.id] || []).map((comment) => (
                        <div key={comment.id} className="comment-item">
                          <div className="comment-avatar" />
                          <div className="comment-body">
                            <div className="comment-header">
                              <span className="comment-username">{comment.authorName}</span>
                              <span className="comment-time">• {comment.date}</span>
                            </div>
                            <p className="comment-text">{comment.text}</p>
                          </div>

                          <div className="comment-menu">
                            <button
                              className="dots-btn"
                              onClick={() => setMenuOpen(menuOpen === comment.id ? null : comment.id)}
                            >
                              ⋮
                            </button>

                            {menuOpen === comment.id && (
                              <div className="menu-popup">
                                <button onClick={() => startEditingComment(comment, art.id)}>✏ Editar</button>
                                <button onClick={() => deleteComment(art.id, comment.id)}>🗑 Eliminar</button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}






