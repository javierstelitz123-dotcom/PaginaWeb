import React, { useState, useEffect } from 'react';
import './BlogGrupoDimher.css';
import { 
  Search, Calendar, User, Tag, Clock, TrendingUp, BookOpen, 
  MessageCircle, Share2, Heart, ChevronRight, Filter 
} from 'lucide-react';

export default function BlogGrupoDimher() {
  

  // ✅ Estado general
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  // ❤️ Likes
  const [blogLikes, setBlogLikes] = useState(
    JSON.parse(localStorage.getItem("blogLikes")) || {}
  );

  const toggleBlogLike = (id) => {
    setBlogLikes(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("blogLikes", JSON.stringify(updated));
      return updated;
    });
  };

  // ❗ Estado antiguo para finanzas (si lo usas)
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
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);



// 👉 Usuario actual simulado (en futuro puedes cambiarlo a login real)
const currentUser = {
  id: 1,
  name: "Usuario Actual"
};

// 📌 Estado para comentarios por cada post
const [postComments, setPostComments] = useState(() => {
  const saved = localStorage.getItem("blogComments");
  return saved ? JSON.parse(saved) : {};
});

const [activeCommentBox, setActiveCommentBox] = useState(null);
const [editingComment, setEditingComment] = useState(null);
const [commentText, setCommentText] = useState('');



  // Guardar comentarios en localStorage automáticamente
useEffect(() => {
  localStorage.setItem("blogComments", JSON.stringify(postComments));
}, [postComments]);
// 👉 Agregar comentario
const addComment = (postId) => {
  if (commentText.trim() === "") return;
   const newComment = {
    id: Date.now(),
    authorId: currentUser.id,
    authorName: currentUser.name,
    text: commentText,
    date: new Date().toLocaleString()
  };


    const newEntry = { id: Date.now(), text: commentText };
    setPostComments(prev => ({
      ...prev,
      [postId]: prev[postId] ? [...prev[postId], newEntry] : [newEntry]
    }));

    setCommentText('');
    setActiveCommentBox(null);
  };

// 👉 Eliminar comentario
const deleteComment = (postId, commentId) => {
  setPostComments(prev => ({
    ...prev,
    [postId]: prev[postId].filter(c => c.id !== commentId)
  }));
};



// 👉 Editar comentario
const startEditingComment = (comment, postId) => {
  setEditingComment(comment.id);
  setCommentText(comment.text);
  setActiveCommentBox(postId);
};


// 👉 Guardar edición
const saveEditedComment = (postId) => {
  setPostComments(prev => ({
    ...prev,
    [postId]: prev[postId].map(c =>
      c.id === editingComment ? { ...c, text: commentText } : c
    )
  }));


  setEditingComment(null);
  setCommentText("");
  setActiveCommentBox(null);
};
  // 🔽 Función de scroll
  const irACategoria = (categoria) => {
    const section = document.getElementById(categoria);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  // 🔽 Tus categorías y artículos
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
      fecha: "15 Noviembre 2025",
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
      fecha: "12 Noviembre 2025",
      lecturaMin: 6,
      imagen: "https://media.licdn.com/dms/image/v2/D4D12AQFOZ0PV5jGTog/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1656016261162?e=2147483647&v=beta&t=9mrP2iYOOLzVpCJ81i3DgRMGV3zOlIh2kOl7MS3eXFo",
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
      fecha: "10 Noviembre 2025",
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
      fecha: "08 Noviembre 2025",
      lecturaMin: 7,
      imagen: "from-indigo-400 to-purple-600",
      extracto: "LLa IA está cambiando la forma en que las empresas financieras operan. Descubre las tendencias tecnológicas que marcarán la diferencia.",
      likes: 278,
      comentarios: 38,
      trending: false
    },
    {
      id: 5,
      titulo: "Cultura Organizacional: El Secreto del Éxito Empresarial",
      categoria: 'cultura',
      autor: "Laura Pérez",
      fecha: "05 Noviembre 2025",
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
      imagen: "https://wortev.capital/wp-content/uploads/2020/05/Inversiones-inteligentes-como-empiezo-WORTEV-CAPITAL.jpg",
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
      imagen: "https://www.squarepoint.es/wp-content/uploads/sites/3/2024/01/grupo-jovenes-empresarios-aplauden-su-colega-despues-presentacion.jpg",
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

      {/* Anclas */}
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

                  <div
                    className="blog-card-dest-bg"
                    style={{
                      backgroundImage: `url(${art.imagen})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />

                  <div className="blog-card-dest-inner">

                    <div className="blog-card-dest-meta">
                      <span
                        className={`blog-card-dest-tag ${
                          categorias.find(c => c.id === art.categoria).color
                        }`}
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

                    <div className="meta-finanzas" style={{ marginTop: "14px" }}>
                      <div className="meta-item autor-inline">
                        <div className="autor-icon">{art.autor.charAt(0)}</div>
                       <span className="blog-card-author">{art.autor}</span>

                      </div>

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
              : `Artículos de ${
                  categorias.find(c => c.id === selectedCategory)?.name
                }`}
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

                <div className="blog-card-dest-meta">
                  <span
                    className={`blog-card-dest-tag ${
                      categorias.find(c => c.id === art.categoria).color
                    }`}
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

{/* 📌 TEXTO SOLO PARA LA PRIMERA PUBLICACIÓN */}
{/* 📌 TEXTO SOLO PARA LA PRIMERA PUBLICACIÓN */}
{art.id === 1 && (
  <div className="blog-extra-content">

    {/* TEXTO BREVE PARA LA VISTA INICIAL */}
    <p className="blog-extra-text">
    </p>

    {/* TEXTO COMPLETO SOLO CUANDO SE ESTÁ EN LA CATEGORÍA FINANZAS */}
    {selectedCategory === "finanzas" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h3><strong>Introducción</strong></h3>
        <p>
          La planificación financiera es la base del éxito económico. En 2025, 
          con la economía global en constante evolución, es más importante que 
          nunca tener un plan claro y ejecutable para alcanzar tus objetivos financieros.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>1. Establece Metas SMART</strong></h3>
        <p>
          Las metas financieras deben ser Específicas, Medibles, Alcanzables, 
          Relevantes y con un Tiempo definido. En lugar de decir "quiero ahorrar más", 
          establece: <em>"ahorraré $500 mensuales durante 12 meses para un fondo de 
          emergencia de $6,000".</em>
        </p>

        <p style={{ marginTop: "10px" }}><strong>Ejemplo práctico:</strong></p>
        <ul className="blog-list">
          <li>Meta a corto plazo: Ahorrar $2,000 en 6 meses</li>
          <li>Meta a mediano plazo: Pagar deudas de tarjetas en 18 meses</li>
          <li>Meta a largo plazo: Acumular $50,000 para enganche de vivienda en 5 años</li>
        </ul>

        <h3 style={{ marginTop: "18px" }}><strong>2. Crea un Presupuesto 50/30/20</strong></h3>
        <p>
          Esta regla divide tus ingresos en tres categorías: 50% para necesidades, 
          30% para deseos y 20% para ahorros e inversiones. Es simple pero efectiva 
          para mantener tus finanzas balanceadas.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>3. Automatiza tus Ahorros</strong></h3>
        <p>
          La automatización elimina la tentación de gastar. Configura transferencias 
          automáticas el día que recibes tu salario. Si no ves el dinero, no lo extrañarás.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>4. Diversifica tus Inversiones</strong></h3>
        <p>
          No pongas todos tus huevos en la misma canasta. Considera fondos indexados, 
          bonos, bienes raíces y criptomonedas según tu perfil de riesgo. La diversificación 
          protege tu patrimonio de la volatilidad del mercado.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>5. Revisa y Ajusta Trimestralmente</strong></h3>
        <p>
          Tus metas financieras no están escritas en piedra. Revísalas cada trimestre 
          y ajusta según cambios en tu vida, ingresos o prioridades. La flexibilidad 
          es clave para el éxito financiero a largo plazo.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>Conclusión</strong></h3>
        <p>
          Alcanzar la libertad financiera requiere disciplina, paciencia y estrategia. 
          Comienza hoy con estos cinco pasos y verás resultados tangibles en tu patrimonio 
          personal. Recuerda: el mejor momento para planificar fue ayer, el segundo mejor 
          momento es ahora.
        </p>

      </div>
    )}
  </div>
  
)}  
{/* 📌 TEXTO COMPLETO PARA LA SEGUNDA PUBLICACIÓN (INVERSIONES INTELIGENTES) */}
{art.id === 6 && (
  <div className="blog-extra-content">

    {/* TEXTO INICIAL MUY BREVE (VISIBLE EN TODOS) */}

    {/* TEXTO COMPLETO SOLO CUANDO SE ESTÁ EN LA CATEGORÍA FINANZAS */}
    {selectedCategory === "finanzas" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>Desmitificando el Mundo de las Inversiones</strong></h2>
        <p>
          Muchas personas creen que invertir es solo para los ricos o para expertos financieros. 
          La realidad es otra: cualquiera puede empezar a invertir con conocimientos básicos y un plan sólido. 
          No se trata de cuánto dinero tienes, sino de comenzar lo antes posible y mantener la consistencia.
        </p>

        <h3 style={{ marginTop: "18px" }}><strong>El Poder del Interés Compuesto</strong></h3>
        <p>
          Albert Einstein llamó al interés compuesto “la octava maravilla del mundo”. 
          Cuando inviertes, no solo ganas rendimientos sobre tu inversión inicial, 
          sino también sobre las ganancias acumuladas. Así es como pequeñas cantidades 
          se convierten en grandes resultados con el tiempo.
        </p>

        <h4><strong>Ejemplo real:</strong></h4>
        <ul className="blog-list">
          <li>Si inviertes $200 mensuales con un rendimiento del 8% anual:</li>
          <li>En 10 años: <strong>$36,500</strong></li>
          <li>En 20 años: <strong>$118,000</strong></li>
          <li>En 30 años: <strong>$298,000</strong></li>
        </ul>
        <p>
          Tu aportación total sería solo $72,000 en 30 años, ¡pero el interés compuesto 
          añade más de $226,000 adicionales!
        </p>

        <h3 style={{ marginTop: "20px" }}><strong>Tipos de Inversiones para Principiantes</strong></h3>

        <h4><strong>1. Fondos Indexados</strong></h4>
        <p>
          Replican un índice del mercado (por ejemplo, el S&P 500).  
          Ventajas: diversificación automática, bajas comisiones y no requieren gestión activa.
        </p>

        <h4><strong>2. Fondos de Inversión</strong></h4>
        <p>
          Son gestionados por profesionales. Ideales si quieres delegar tus decisiones, 
          aunque las comisiones suelen ser más altas.
        </p>

        <h4><strong>3. Certificados de Depósito (CDs)</strong></h4>
        <p>
          Son inversiones de bajo riesgo donde prestas dinero al banco durante un plazo fijo. 
          Ideales para dinero que no necesitarás pronto.
        </p>

        <h4><strong>4. Bonos</strong></h4>
        <p>
          Son préstamos al gobierno o empresas. Dan ingresos más estables y ayudan a balancear el riesgo total.
        </p>

        <h4><strong>5. Acciones Individuales</strong> (con precaución)</h4>
        <p>
          Pueden ser muy lucrativas, pero volátiles. Nunca coloques más del 5–10% 
          en una sola acción sin experiencia previa.
        </p>

        <h3 style={{ marginTop: "20px" }}><strong>Los 5 Pasos para Empezar a Invertir</strong></h3>

        <p><strong>Paso 1: Construye tu Fondo de Emergencia</strong></p>
        <p>
          Antes de invertir, asegúrate de tener entre 3 y 6 meses de gastos ahorrados. 
          Esto te evitará vender tus inversiones en pérdida por una emergencia.
        </p>

        <p><strong>Paso 2: Define tus Objetivos</strong></p>
        <p>
          Tu estrategia depende de si buscas ahorrar para retiro, comprar casa o generar ingresos pasivos.
        </p>

        <p><strong>Paso 3: Conoce tu Tolerancia al Riesgo</strong></p>
        <p>
          Si una caída del 20% te quita el sueño, necesitas opciones más conservadoras.
        </p>

        <p><strong>Paso 4: Abre una Cuenta de Inversión</strong></p>
        <p>
          Plataformas como Vanguard, Fidelity o brokers locales son excelentes para empezar.
        </p>

        <p><strong>Paso 5: Invierte de Forma Pequeña y Consistente</strong></p>
        <p>
          No esperes “tener dinero”. Empieza con lo que puedas: incluso $50 al mes son suficientes.
        </p>

        <h3 style={{ marginTop: "20px" }}><strong>Errores Comunes que Debes Evitar</strong></h3>

        <ul className="blog-list">
          <li><strong>Intentar predecir el mercado.</strong> Nadie lo logra consistentemente.</li>
          <li><strong>No diversificar.</strong> Distribuye entre activos y sectores.</li>
          <li><strong>Seguir modas.</strong> Invierte basado en análisis, no en rumores.</li>
          <li><strong>Ignorar comisiones.</strong> Busca fondos con menos de 0.5% anual.</li>
          <li><strong>Pánico en caídas.</strong> Mantén la calma y sigue tu plan.</li>
        </ul>

        <h3 style={{ marginTop: "20px" }}><strong>Estrategia Simple para Principiantes: Regla 80/20</strong></h3>
        <p>
          80% en fondos indexados diversificados  
          20% en bonos  
          A medida que te acerques al retiro, aumenta el porcentaje en bonos.
        </p>

        <h3 style={{ marginTop: "20px" }}><strong>Conclusión</strong></h3>
        <p>
          Invertir no tiene que ser complicado ni intimidante. Comienza con los fundamentos, 
          invierte de forma constante y mantén una visión de largo plazo.  
          Tu yo del futuro te lo agradecerá.
        </p>

      </div>
    )}
  </div>
)}
{/* 📌 TEXTO EXTENDIDO SOLO PARA LA PRIMERA PUBLICACIÓN DE DESARROLLO PROFESIONAL */}
{art.id === 2 && (
  <div className="blog-extra-content">

    {/* SE MUESTRA SOLO SI SELECCIONAN LA CATEGORÍA DESARROLLO PROFESIONAL */}
    {selectedCategory === "carrera" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>El Inicio del Viaje Profesional</strong></h2>
        <p>
          Construir una carrera exitosa no sucede de la noche a la mañana. 
          Requiere planificación estratégica, desarrollo continuo de habilidades 
          y la capacidad de adaptarse a un mercado laboral en constante cambio.
        </p>

        <h3><strong>Define tu Norte Profesional</strong></h3>
        <p>
          Antes de dar el primer paso, pregúntate: ¿Dónde quiero estar en 5 años? 
          ¿Qué tipo de profesional quiero ser? Tener claridad sobre tus objetivos 
          te permitirá tomar decisiones más acertadas.
        </p>

        <h4><strong>Ejercicio de autoevaluación:</strong></h4>
        <ul className="blog-list">
          <li>Identifica tus fortalezas y debilidades</li>
          <li>Define qué te apasiona realmente</li>
          <li>Investiga las tendencias de tu industria</li>
          <li>Establece metas profesionales a corto, mediano y largo plazo</li>
        </ul>

        <h3><strong>Invierte en tu Educación</strong></h3>
        <p>
          El aprendizaje nunca termina. Ya sea a través de educación formal, cursos 
          online, certificaciones o autodidactismo, mantente actualizado con las 
          últimas tendencias y tecnologías de tu campo.
        </p>

        <h3><strong>Construye tu Red de Contactos</strong></h3>
        <p>
          El networking no es solo intercambiar tarjetas. 
          Es construir relaciones genuinas que pueden abrir puertas inesperadas. 
          Asiste a eventos de la industria, participa en comunidades profesionales 
          y mantén contacto regular con colegas.
        </p>

        <h3><strong>Desarrolla tu Marca Personal</strong></h3>
        <p>
          En la era digital, tu presencia online es tu currículum viviente. 
          Optimiza tu perfil de LinkedIn, comparte contenido relevante, participa 
          en discusiones profesionales y posiciónate como experto en tu área.
        </p>

        <h3><strong>Acepta Proyectos Desafiantes</strong></h3>
        <p>
          La zona de confort es enemiga del crecimiento. 
          Busca oportunidades que te obliguen a desarrollar nuevas habilidades. 
          Los errores son maestros valiosos.
        </p>

        <h3><strong>Busca Mentores</strong></h3>
        <p>
          Un buen mentor puede acelerar tu crecimiento profesional años luz. 
          Busca personas que ya están donde tú quieres llegar y aprende de sus experiencias.
        </p>

        <h3><strong>Conclusión</strong></h3>
        <p>
          Construir una carrera exitosa es un maratón, no un sprint. 
          Mantén la paciencia, la persistencia y nunca dejes de aprender. 
          Tu éxito está directamente relacionado con tu disposición a crecer, 
          adaptarte y superar obstáculos.
        </p>

      </div>
    )}
  </div>
)}

{/* 📌 TEXTO EXTENDIDO PARA LA SEGUNDA PUBLICACIÓN DE DESARROLLO PROFESIONAL */}
{art.id === 7 && (
  <div className="blog-extra-content">
    
    {selectedCategory === "carrera" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>La Nueva Moneda del Mercado Laboral</strong></h2>
        <p>
          En una era donde la inteligencia artificial puede escribir código y analizar datos, 
          las habilidades humanas se vuelven más valiosas que nunca. 
          Las habilidades blandas son lo que te hace irreemplazable en el mundo laboral moderno.
        </p>

        <h3><strong>¿Qué Son las Habilidades Blandas?</strong></h3>
        <p>
          Las habilidades blandas (soft skills) son atributos personales que te permiten 
          interactuar efectivamente con otros. A diferencia de las habilidades técnicas (hard skills), 
          son transferibles entre industrias y roles. Son la diferencia entre un empleado competente 
          y un líder excepcional.
        </p>

        <h3><strong>Las 10 Habilidades Blandas Más Demandadas</strong></h3>

        <h4><strong>1. Comunicación Efectiva</strong></h4>
        <p>
          No se trata solo de hablar bien, sino de transmitir ideas claramente, escuchar activamente 
          y adaptar tu mensaje a diferentes audiencias. Un comunicador efectivo puede inspirar equipos, 
          negociar acuerdos y resolver conflictos.
        </p>
        <p><strong>Cómo desarrollarla:</strong></p>
        <ul className="blog-list">
          <li>Practica la escucha activa sin interrumpir</li>
          <li>Simplifica ideas complejas</li>
          <li>Pide retroalimentación sobre tu comunicación</li>
          <li>Lee libros y practica presentaciones públicas</li>
        </ul>

        <h4><strong>2. Inteligencia Emocional</strong></h4>
        <p>
          La capacidad de reconocer, entender y gestionar tus propias emociones y las de otros. 
          Los líderes con alta inteligencia emocional crean ambientes de trabajo más saludables 
          y equipos más productivos.
        </p>
        <p><strong>Componentes clave:</strong></p>
        <ul className="blog-list">
          <li>Autoconciencia</li>
          <li>Autorregulación</li>
          <li>Empatía</li>
          <li>Habilidades sociales</li>
        </ul>

        <h4><strong>3. Pensamiento Crítico</strong></h4>
        <p>
          Analizar información objetivamente, cuestionar suposiciones y tomar decisiones basadas 
          en evidencia. En un mundo de información abundante, el pensamiento crítico te ayuda 
          a separar señal del ruido.
        </p>

        <h4><strong>4. Resolución de Problemas</strong></h4>
        <p>
          Identificar obstáculos, generar soluciones creativas e implementar planes de acción. 
          Las empresas valoran a quienes no solo señalan problemas, sino que proponen soluciones.
        </p>

        <h4><strong>5. Adaptabilidad</strong></h4>
        <p>
          La capacidad de ajustarte rápidamente a nuevas circunstancias, tecnologías y metodologías. 
          En un mundo que cambia constantemente, la rigidez es obsolescencia.
        </p>

        <h4><strong>6. Trabajo en Equipo</strong></h4>
        <p>
          Colaborar efectivamente con personas de diferentes estilos de trabajo y perspectivas. 
          Los proyectos complejos requieren equipos diversos trabajando en armonía.
        </p>

        <h4><strong>7. Gestión del Tiempo</strong></h4>
        <p>
          Priorizar tareas, cumplir deadlines y mantener productividad sin sacrificar calidad. 
          El tiempo es tu recurso más limitado; gestionarlo bien es una superpotencia.
        </p>

        <h4><strong>8. Liderazgo</strong></h4>
        <p>
          Influir, inspirar y guiar a otros hacia objetivos comunes. No necesitas un título de gerente 
          para ser líder; el liderazgo puede ejercerse desde cualquier posición.
        </p>

        <h4><strong>9. Creatividad e Innovación</strong></h4>
        <p>
          Pensar fuera de la caja, conectar ideas no relacionadas y proponer enfoques novedosos. 
          La creatividad impulsa la innovación que mantiene a las empresas competitivas.
        </p>

        <h4><strong>10. Resiliencia</strong></h4>
        <p>
          Recuperarte de fracasos, mantener motivación ante adversidades y aprender de errores. 
          La resiliencia te permite convertir obstáculos en oportunidades de crecimiento.
        </p>

        <h3><strong>Por Qué las Habilidades Blandas Son tu Ventaja Competitiva</strong></h3>
        <p><strong>Son difíciles de automatizar:</strong> la IA no puede replicar empatía, creatividad o liderazgo.</p>
        <p><strong>Son transferibles:</strong> si cambias de industria, tus soft skills viajan contigo.</p>
        <p><strong>Multiplican el impacto de tus habilidades técnicas:</strong> un técnico competente con buenas soft skills sobresale.</p>

        <h3><strong>Estrategias para Desarrollar Habilidades Blandas</strong></h3>

        <h4><strong>1. Busca Retroalimentación Constante</strong></h4>
        <p>
          Solicita opiniones a colegas y mentores. La retroalimentación honesta es oro para el crecimiento.
        </p>

        <h4><strong>2. Sal de tu Zona de Confort</strong></h4>
        <p>
          Acepta proyectos que te desafíen. Si te cuesta presentar, ofrece hacerlo tú.
        </p>

        <h4><strong>3. Observa a los Mejores</strong></h4>
        <p>
          Identifica personas con soft skills fuertes. Analiza cómo manejan situaciones difíciles.
        </p>

        <h4><strong>4. Practica la Reflexión</strong></h4>
        <p>
          Reflexiona al final del día: ¿qué salió bien? ¿Qué mejorarías?
        </p>

        <h4><strong>5. Invierte en Formación</strong></h4>
        <p>
          Cursos, talleres, coaching. Invertir en habilidades humanas es invertir en tu futuro.
        </p>

        <h3><strong>Midiendo el Progreso</strong></h3>
        <p>
          Aunque no se certifican fácilmente, pueden medirse mediante retroalimentación 360°, 
          evaluaciones y la forma en que otros responden a ti.
        </p>

        <h3><strong>El Mito del "Nací Así"</strong></h3>
        <p>
          Las soft skills NO son innatas. Se desarrollan con práctica, constancia y conciencia personal.
        </p>

        <h3><strong>Conclusión</strong></h3>
        <p>
          En el futuro laboral, la tecnología hará lo técnico, pero las habilidades humanas 
          serán tu verdadera ventaja competitiva. Desarrollarlas no solo te hará más empleable: 
          te hará mejor ser humano.
        </p>

      </div>
    )}

  </div>
)}
{/* 📌 TEXTO EXTENDIDO PARA LA PRIMERA PUBLICACIÓN DE LIDERAZGO */}
{art.id === 8 && (
  <div className="blog-extra-content">

    {selectedCategory === "liderazgo" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>¿Qué es el Liderazgo Transformacional?</strong></h2>
        <p>
          El liderazgo transformacional va más allá de la simple gestión. 
          Se trata de inspirar, motivar y empoderar a tu equipo para alcanzar resultados extraordinarios 
          mientras desarrollan su máximo potencial.
        </p>

        <h3><strong>Las 4 Dimensiones del Líder Transformacional</strong></h3>

        <h4><strong>1. Influencia Idealizada</strong></h4>
        <p>
          Los líderes transformacionales sirven como modelos a seguir. Actúan con integridad, 
          demuestran altos estándares éticos y ganan el respeto y la confianza de su equipo 
          a través de sus acciones, no solo sus palabras.
        </p>

        <h4><strong>2. Motivación Inspiradora</strong></h4>
        <p>
          Comunican una visión clara y convincente del futuro. Articulan expectativas altas 
          y demuestran compromiso con las metas organizacionales, inspirando a otros a dar lo mejor de sí.
        </p>

        <h4><strong>3. Estimulación Intelectual</strong></h4>
        <p>
          Fomentan la innovación y la creatividad. Desafían el status quo, cuestionan suposiciones 
          y alientan a los miembros del equipo a pensar de manera crítica y abordar problemas 
          desde nuevas perspectivas.
        </p>

        <h4><strong>4. Consideración Individualizada</strong></h4>
        <p>
          Reconocen que cada miembro del equipo es único. Actúan como mentores, prestan atención 
          a las necesidades individuales de desarrollo y crean oportunidades personalizadas de crecimiento.
        </p>

        <h3><strong>Impacto en la Cultura Organizacional</strong></h3>
        <p>Las organizaciones lideradas por líderes transformacionales experimentan:</p>
        <ul className="blog-list">
          <li>Mayor compromiso y satisfacción de los empleados</li>
          <li>Reducción significativa en la rotación de personal</li>
          <li>Aumento en la innovación y creatividad</li>
          <li>Mejor desempeño organizacional general</li>
          <li>Cultura de aprendizaje continuo y mejora</li>
        </ul>

        <h3><strong>Cómo Desarrollar tu Liderazgo Transformacional</strong></h3>

        <h4><strong>Autoconocimiento Profundo</strong></h4>
        <p>
          Comprende tus fortalezas, debilidades, valores y motivaciones. 
          La autenticidad es fundamental para el liderazgo transformacional.
        </p>

        <h4><strong>Comunica una Visión Inspiradora</strong></h4>
        <p>
          Articula claramente hacia dónde va la organización y por qué es importante. 
          Conecta el trabajo diario con un propósito mayor.
        </p>

        <h4><strong>Desarrolla Inteligencia Emocional</strong></h4>
        <p>
          Aprende a leer y responder a las emociones de tu equipo. 
          La empatía y la conexión emocional son herramientas poderosas del líder transformacional.
        </p>

        <h4><strong>Invierte en el Desarrollo de Otros</strong></h4>
        <p>
          Dedica tiempo y recursos al crecimiento de tu equipo. 
          El éxito del líder transformacional se mide por el éxito de quienes lidera.
        </p>

        <h3><strong>Casos de Éxito</strong></h3>
        <p>
          Líderes como Satya Nadella en Microsoft han demostrado el poder del liderazgo transformacional. 
          Al cambiar la cultura de la empresa de “sabelotodo” a “aprende-todo”, 
          transformó Microsoft en una de las empresas más valiosas del mundo.
        </p>

        <h3><strong>Conclusión</strong></h3>
        <p>
          El liderazgo transformacional no es un destino, es un viaje continuo de crecimiento personal 
          y profesional. Requiere valentía para desafiar el status quo, humildad para admitir 
          que no tienes todas las respuestas y un compromiso genuino con el desarrollo de otros.
          Su impacto trasciende números y métricas: se mide en vidas cambiadas y potencial liberado.
        </p>

      </div>
    )}
  </div>
)}
{/* 📌 TEXTO EXTENDIDO PARA LA PUBLICACIÓN DE LIDERAZGO (ID 3) */}
{art.id === 3 && (
  <div className="blog-extra-content">

    {selectedCategory === "liderazgo" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>¿Qué es el Liderazgo Transformacional?</strong></h2>
        <p>
          El liderazgo transformacional va más allá de la simple gestión. Se trata de inspirar, 
          motivar y empoderar a tu equipo para alcanzar resultados extraordinarios mientras 
          desarrollan su máximo potencial.
        </p>

        <h3><strong>Las 4 Dimensiones del Líder Transformacional</strong></h3>

        <h4><strong>1. Influencia Idealizada</strong></h4>
        <p>
          Los líderes transformacionales sirven como modelos a seguir. Actúan con integridad, 
          demuestran altos estándares éticos y ganan el respeto y la confianza de su equipo 
          a través de sus acciones, no solo sus palabras.
        </p>

        <h4><strong>2. Motivación Inspiradora</strong></h4>
        <p>
          Comunican una visión clara y convincente del futuro. Articulan expectativas altas 
          y demuestran compromiso con las metas organizacionales, inspirando a otros a dar 
          lo mejor de sí mismos.
        </p>

        <h4><strong>3. Estimulación Intelectual</strong></h4>
        <p>
          Fomentan la innovación y la creatividad. Desafían el status quo, cuestionan suposiciones 
          y alientan a los miembros del equipo a pensar de manera crítica y abordar problemas 
          desde nuevas perspectivas.
        </p>

        <h4><strong>4. Consideración Individualizada</strong></h4>
        <p>
          Reconocen que cada miembro del equipo es único. Actúan como mentores, prestan atención 
          a las necesidades individuales de desarrollo y crean oportunidades personalizadas 
          de crecimiento.
        </p>

        <h3><strong>Impacto en la Cultura Organizacional</strong></h3>
        <p>Las organizaciones lideradas por líderes transformacionales experimentan:</p>

        <ul className="blog-list">
          <li>Mayor compromiso y satisfacción de los empleados</li>
          <li>Reducción significativa en la rotación de personal</li>
          <li>Aumento en la innovación y creatividad</li>
          <li>Mejor desempeño organizacional general</li>
          <li>Cultura de aprendizaje continuo y mejora</li>
        </ul>

        <h3><strong>Cómo Desarrollar tu Liderazgo Transformacional</strong></h3>

        <h4><strong>Autoconocimiento Profundo</strong></h4>
        <p>
          Comprende tus fortalezas, debilidades, valores y motivaciones. 
          La autenticidad es fundamental para el liderazgo transformacional.
        </p>

        <h4><strong>Comunica una Visión Inspiradora</strong></h4>
        <p>
          Articula claramente hacia dónde va la organización y por qué es importante. 
          Conecta el trabajo diario con un propósito mayor.
        </p>

        <h4><strong>Desarrolla Inteligencia Emocional</strong></h4>
        <p>
          Aprende a leer y responder a las emociones de tu equipo. La empatía y la conexión 
          emocional son herramientas poderosas del líder transformacional.
        </p>

        <h4><strong>Invierte en el Desarrollo de Otros</strong></h4>
        <p>
          Dedica tiempo y recursos al crecimiento de tu equipo. El éxito del líder 
          transformacional se mide por el éxito de quienes lidera.
        </p>

        <h3><strong>Casos de Éxito</strong></h3>
        <p>
          Líderes como Satya Nadella en Microsoft han demostrado el poder del liderazgo 
          transformacional. Al cambiar la cultura de la empresa de “sabelotodo” a 
          “aprende-todo”, transformó Microsoft en una de las empresas más valiosas del mundo.
        </p>

        <h3><strong>Conclusión</strong></h3>
        <p>
          El liderazgo transformacional no es un destino, es un viaje continuo de crecimiento 
          personal y profesional. Requiere valentía para desafiar el status quo, humildad para 
          reconocer que no tienes todas las respuestas y un compromiso genuino con el desarrollo 
          de otros. Su impacto trasciende números y métricas; se mide en vidas cambiadas y 
          potencial liberado.
        </p>

      </div>
    )}
  </div>
)}
{/* 📌 TEXTO EXTENDIDO PARA LA PUBLICACIÓN DE TECNOLOGÍA (ID 4) */}
{art.id === 4 && (
  <div className="blog-extra-content">

    {selectedCategory === "tecnologia" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>La Revolución Silenciosa</strong></h2>
        <p>
          La Inteligencia Artificial no es el futuro del sector financiero, es el presente. 
          Desde algoritmos de trading hasta asistentes virtuales para clientes, la IA está 
          transformando cada aspecto de la industria financiera.
        </p>

        <h3><strong>Aplicaciones Clave de la IA en Finanzas</strong></h3>

        <h4><strong>1. Detección de Fraudes en Tiempo Real</strong></h4>
        <p>
          Los sistemas de IA pueden analizar millones de transacciones por segundo, identificando 
          patrones sospechosos que escaparían al ojo humano. El Machine Learning permite que estos 
          sistemas mejoren continuamente, adaptándose a nuevas técnicas de fraude.
        </p>

        <h4><strong>2. Trading Algorítmico</strong></h4>
        <p>
          Los algoritmos de IA pueden procesar vastas cantidades de datos del mercado, noticias y 
          redes sociales para tomar decisiones de inversión en milisegundos. El 70–80% del trading 
          en Wall Street ya es ejecutado por algoritmos.
        </p>

        <h4><strong>3. Análisis Crediticio Mejorado</strong></h4>
        <p>
          La IA puede evaluar el riesgo crediticio utilizando cientos de variables, no solo el 
          historial crediticio tradicional. Esto permite a las instituciones financieras tomar 
          decisiones más precisas y ofrecer crédito a poblaciones previamente desatendidas.
        </p>

        <h4><strong>4. Personalización de Servicios</strong></h4>
        <p>
          Chatbots y asistentes virtuales impulsados por IA proporcionan atención al cliente 24/7, 
          respondiendo preguntas, procesando transacciones y ofreciendo asesoramiento financiero 
          personalizado basado en el perfil único de cada cliente.
        </p>

        <h3><strong>Beneficios Medibles</strong></h3>

        <ul className="blog-list">
          <li><strong>Reducción de costos:</strong> Automatización de tareas repetitivas permite reducir costos operativos hasta un 40%.</li>
          <li><strong>Mejora en la experiencia del cliente:</strong> Respuestas instantáneas y servicios personalizados aumentan la satisfacción.</li>
          <li><strong>Minimización de riesgos:</strong> Detección temprana de anomalías y fraudes.</li>
          <li><strong>Decisiones más inteligentes:</strong> Análisis de datos complejos para insights accionables.</li>
        </ul>

        <h3><strong>Desafíos y Consideraciones Éticas</strong></h3>

        <h4><strong>Sesgo Algorítmico</strong></h4>
        <p>
          Los sistemas de IA aprenden de datos históricos que pueden contener sesgos. 
          Es crucial desarrollar algoritmos justos que no discriminen basándose en raza, 
          género o estatus socioeconómico.
        </p>

        <h4><strong>Privacidad de Datos</strong></h4>
        <p>
          La IA requiere grandes cantidades de datos personales. Las instituciones deben 
          balancear la innovación con una protección rigurosa de la privacidad del cliente.
        </p>

        <h4><strong>Explicabilidad</strong></h4>
        <p>
          Las decisiones financieras tomadas por IA deben ser explicables. 
          Los reguladores y clientes tienen derecho a entender cómo se llegan 
          a conclusiones que afectan sus finanzas.
        </p>

        <h3><strong>El Futuro: IA Generativa en Finanzas</strong></h3>
        <p>La próxima frontera es la IA generativa. Imagina sistemas que puedan:</p>

        <ul className="blog-list">
          <li>Generar reportes financieros personalizados en lenguaje natural</li>
          <li>Crear estrategias de inversión únicas para cada cliente</li>
          <li>Simular escenarios económicos complejos para planificación estratégica</li>
          <li>Producir documentación legal y contratos automáticamente</li>
        </ul>

        <h3><strong>Conclusión</strong></h3>
        <p>
          La IA no está aquí para reemplazar a los profesionales financieros, sino para potenciarlos. 
          Aquellos que adopten estas tecnologías y desarrollen habilidades complementarias estarán 
          mejor posicionados para prosperar en la nueva era del sector financiero. 
          La pregunta no es si debes adoptar la IA, sino qué tan rápido puedes hacerlo 
          de manera responsable y efectiva.
        </p>

      </div>
    )}
  </div>
)}
{/* 📌 TEXTO EXTENDIDO PARA LA PUBLICACIÓN DE CULTURA EMPRESARIAL (ID 5) */}
{art.id === 5 && (
  <div className="blog-extra-content">

    {selectedCategory === "cultura-empresarial" && (
      <div className="blog-extra-full" style={{ marginTop: "20px" }}>

        <h2><strong>La Cultura: El ADN de tu Empresa</strong></h2>
        <p>
          La cultura organizacional no es un póster en la pared con valores corporativos. 
          Es el conjunto de creencias, comportamientos y prácticas que definen cómo 
          se hace el trabajo en tu empresa. Es lo que tus empleados dicen de la compañía 
          cuando no estás presente.
        </p>

        <h3><strong>Por qué la Cultura Importa</strong></h3>
        <p>Las empresas con culturas fuertes superan a sus competidores en casi todas las métricas importantes:</p>

        <ul className="blog-list">
          <li><strong>Retención de talento:</strong> 3.8 veces más probabilidades de permanecer.</li>
          <li><strong>Productividad:</strong> Equipos comprometidos son hasta 21% más productivos.</li>
          <li><strong>Innovación:</strong> Culturas que aceptan el fracaso fomentan creatividad.</li>
          <li><strong>Rentabilidad:</strong> Empresas con culturas excepcionales reportan hasta 4× más ingresos.</li>
        </ul>

        <h3><strong>Elementos de una Cultura Organizacional Excepcional</strong></h3>

        <h4><strong>1. Propósito Claro y Compartido</strong></h4>
        <p>
          Los empleados necesitan entender el “por qué” detrás de su trabajo. 
          Un propósito claro da significado a las tareas diarias y une al equipo.
        </p>

        <h4><strong>2. Valores Vividos, No Solo Declarados</strong></h4>
        <p>
          Los valores escritos no sirven si no se reflejan en decisiones diarias. 
          La cultura real es lo que haces, no lo que dices.
        </p>

        <h4><strong>3. Comunicación Transparente</strong></h4>
        <p>
          La transparencia construye confianza. Comparte éxitos y desafíos por igual.
        </p>

        <h4><strong>4. Reconocimiento y Celebración</strong></h4>
        <p>
          Reconocer logros refuerza comportamientos positivos y fortalece vínculos.
        </p>

        <h4><strong>5. Desarrollo Continuo</strong></h4>
        <p>
          Una cultura de aprendizaje invierte en el crecimiento de su gente mediante 
          capacitación, mentoring y oportunidades de avance.
        </p>

        <h4><strong>6. Balance Trabajo–Vida</strong></h4>
        <p>
          El agotamiento destruye culturas. El balance es necesario para la sostenibilidad.
        </p>

        <h3><strong>Construyendo Cultura desde Cero</strong></h3>

        <p><strong>Paso 1: Define tu Cultura Aspiracional</strong></p>
        <p>
          Involucra al equipo para definir qué tipo de lugar de trabajo quieren construir.
        </p>

        <p><strong>Paso 2: Contrata por Alineación Cultural</strong></p>
        <p>
          Las habilidades se enseñan; los valores no. Busca personas alineadas con tu cultura.
        </p>

        <p><strong>Paso 3: Lidera con el Ejemplo</strong></p>
        <p>
          Los líderes establecen el tono. Sé el modelo de la cultura que deseas crear.
        </p>

        <p><strong>Paso 4: Institucionaliza Prácticas Culturales</strong></p>
        <p>
          Ritualiza prácticas que refuercen la cultura: celebraciones, reuniones, 
          espacios de innovación, comunicación abierta.
        </p>

        <p><strong>Paso 5: Mide y Ajusta</strong></p>
        <p>
          Usa encuestas, retroalimentación y entrevistas para medir tu clima laboral 
          y adaptarlo con el tiempo.
        </p>

        <h3><strong>Señales de Alerta Cultural</strong></h3>
        <ul className="blog-list">
          <li>Alta rotación, especialmente de alto desempeño.</li>
          <li>Chismes o política interna excesiva.</li>
          <li>Falta de colaboración entre áreas.</li>
          <li>Equipos constantemente “apagando incendios”.</li>
          <li>Cinismo, apatía o resistencia al cambio.</li>
        </ul>

        <h3><strong>El Costo de Ignorar la Cultura</strong></h3>
        <p>
          Una cultura tóxica afecta la moral y la rentabilidad. 
          Reemplazar a un empleado puede costar 1.5–2× su salario anual, 
          sin contar el impacto en productividad y reputación.
        </p>

        <h3><strong>Conclusión</strong></h3>
        <p>
          La cultura organizacional no es un proyecto con fecha límite. 
          Es un ecosistema que requiere cuidado constante. 
          Las empresas más exitosas saben que su mayor activo es su gente 
          y la cultura que los une. Invierte en tu cultura hoy 
          y cosecharás beneficios por años.
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
   {/* LÍNEA GRIS ENCIMA DE LOS ICONOS */}
                <div className="post-icons-top-line"></div>
       
              {/* BOTÓN LEER MÁS SOLO SI NO ESTÁ EN SU ÁREA */}
{selectedCategory !== art.categoria && (
  <button 
    className="blog-leer-small-btn"
    onClick={() => irACategoria(art.categoria)}
  >
    Leer más
  </button>
)}


             

                {/* NUEVOS ICONOS ACTUALIZADOS */}
                <div className="post-actions">

                  {/* ❤️ ME GUSTA */}
                <div 
  className={`action-item ${blogLikes[art.id] ? "liked" : ""}`}
  onClick={() => toggleBlogLike(art.id)}
>

                    <Heart className="action-icon" />
                    <span>{blogLikes[art.id] ? art.likes + 1 : art.likes}</span>
                  
                  </div>
{/* 💬 COMENTAR */}
<div 
  className="action-item comment-toggle"
  onClick={() => setActiveCommentBox(activeCommentBox === art.id ? null : art.id)}
>
  <MessageCircle className="action-icon" />
  <span>{postComments[art.id]?.length || 0}</span>
</div>

{/* MOSTRAR SOLO SI EL USUARIO HACE CLICK */}
{activeCommentBox === art.id && (
  <div className="comments-section">

    {/* 👉 CAJA PARA ESCRIBIR COMENTARIO */}
    <div className="comment-container">
      <div className="comment-header">
        <div className="comment-avatar"></div>
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
          <button
            className="comment-btn secondary"
            onClick={() => saveEditedComment(art.id)}
          >
            Guardar edición
          </button>
        )}
      </div>
    </div>
 {/* 👉 LISTA DE COMENTARIOS */}
    <div className="comments-list">
   {postComments[art.id]?.map(comment => (
  <div key={comment.id} className="comment-item">
    
    {/* Avatar */}
    <div className="comment-avatar"></div>

    {/* Contenido */}
    <div className="comment-body">
      <div className="comment-header">
        <span className="comment-username">Usuario Actual</span>
        <span className="comment-time">• ahora</span>
      </div>

      {/* Texto del comentario */}
      <p className="comment-text">{comment.text}</p>
    </div>

    {/* Menú de opciones (tres puntitos) */}
    <div className="comment-menu">
      <button
        className="dots-btn"
        onClick={() =>
          setMenuOpen(menuOpen === comment.id ? null : comment.id)
        }>
        ⋮
      </button>

      {menuOpen === comment.id && (
        <div className="menu-popup">
          <button
            onClick={() => {
              setEditingComment(comment.id);
              setCommentText(comment.text);
              setActiveCommentBox(art.id);
              setMenuOpen(null);
            }}
          >
            ✏ Editar
          </button>

          <button
            onClick={() => deleteComment(art.id, comment.id)}
          >
            🗑 Eliminar
          </button>
        </div>
      )}
    </div>
  </div>
))}

    </div>

  </div>
)}


                  {/* 🔄 COMPARTIR */}
                  <div className="action-item">
                    <Share2 className="action-icon" />
                    <span>Compartir</span>
                  </div>
                </div>

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
