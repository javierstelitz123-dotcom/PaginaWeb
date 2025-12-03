import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";
import { motion } from "framer-motion";
import Ciudades from './Ciudades';
import Confianza from "../components/Confianza";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faCheckCircle,
  faChartLine,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

// =============================================
// ✅ CONEXIÓN A BACKEND (NO AFECTA TU DISEÑO)
// =============================================
const Inicio = () => {
  const [inicioData, setInicioData] = useState({
    titulo: "",
    descripcion: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/inicio")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos cargados desde MongoDB:", data); 
        setInicioData(data); // ⚠️ Datos cargados pero NO usados en el HTML
      })
      .catch((err) => console.error("Error cargando INICIO:", err));
  }, []);

  // ⚠️ NO usamos inicioData en el JSX para NO CAMBIAR NADA

  // Proyectos siguen estáticos
  const proyectos = [
    {
      title: "Villas el Americano",
      location: "Bonao",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEKQ3f6_P0lwvHskCszJCTijeyFRcFgp82KZb-HMvMLwVnimkD",
    },
    {
      title: "Residencial Doña Amalia 2",
      location: "Bonao",
      img: "https://grupodimher.com/assets/images/property/thumb/682ebf83c161b1747894147.jpg",
    },
    {
      title: "Residencial Don Soto",
      location: "Bonao",
      img: "https://grupodimher.com/assets/images/property/thumb/682eba0839c291747892744.jpg",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-bg-letras"></div>

        <div className="hero-bg-nombre">
          <span className="grupo">Grupo</span>
          <span className="dimher">Dimher</span>
        </div>

        <div className="hero-container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* ⚠️ Mantengo tu texto original (NO dinámico) */}
            <p className="hero-subtitle">
              Innovamos el mundo inmobiliario con proyectos que combinan <strong>seguridad, rentabilidad y excelencia</strong>.
        
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/nosotros" className="cta-btn">
                Descubra Más
              </Link>
            </motion.div>
          </motion.div>

          <motion.div>
            <div className="floating-card"></div>
          </motion.div>
        </div>
      </section>

      {/* ================= POR QUÉ ELEGIRNOS ================= */}
      <section className="why-section">
        <div className="why-header">
         
 <div class="why-header">
  <div class="why-badge">Tu aliado confiable en inversiones inmobiliarias</div>

  <h2>
    ¿Por qué elegir <span class="why-blue">GRUPO</span> <span class="why-orange">DIMHER</span>?
  </h2>
</div>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <FontAwesomeIcon icon={faShieldAlt} className="why-icon" />
            <h3>Inversión Segura</h3>
            <p>Tu futuro financiero está protegido.</p>
          </div>
          <div className="why-card">
            <FontAwesomeIcon icon={faCheckCircle} className="why-icon" />
            <h3>Calidad Garantizada</h3>
            <p>Construcciones con los más altos estándares de calidad.</p>
          </div>
          <div className="why-card">
            <FontAwesomeIcon icon={faChartLine} className="why-icon" />
            <h3>Compañia transparente</h3>
            <p>Transparencia para tu tranquilidad.</p>
          </div>
          <div className="why-card">
            <FontAwesomeIcon icon={faHeadset} className="why-icon" />
            <h3>Soporte</h3>
            <p>Soporte confiable y rápido.</p>
          </div>
        </div>
      </section>

{/* ================= SOBRE NOSOTROS ================= */}
<section className="sobre-nosotros sobre-fondo">

  <div className="sobre-grid">

    {/* Galería de imágenes estilo portafolio */}
    <div className="sobre-img-col">
      <img
        src="https://grupodimher.com/assets/images/property/gallery/682eba098d7c61747892745.jpg"
        alt="img1"
      />
      <img
        src="https://grupodimher.com/assets/images/property/gallery/67f8e5d8c943f1744365016.jpg"
        alt="img2"
      />
      <img
        src="https://grupodimher.com/assets/images/property/gallery/682ec1858da4a1747894661.jpg"
        alt="img3"
      />
      <img
        src="http://localhost:3000/static/media/img2.243d7c75766465000976.jpg"
        alt="img4"
      />
    </div>

    {/* Texto */}
    <div className="sobre-texto">
      <h1>Sobre Nosotros</h1>

      <p>
        Grupo Dimher desarrolla solares urbanizados con entradas impactantes,
        garitas, calles con contenes, solares compactados, servicios de agua y
        electricidad, áreas verdes, cierre perimetral y, en algunos casos,
        Casa Club, asfalto, entre otros beneficios.
      
      </p>

      <Link to="/nosotros" className="sobre-btn">
        Conoce más
      </Link>
    </div>

  </div>
</section>




{/* ================= PROYECTOS DESTACADOS ================= */}
<section className="featured-projects">

  <p className="featured-subtitle">Últimas propiedades</p>

  <h2 className="featured-title">Explora las ultimas propiedades</h2>

  <div className="projects-grid">
    {proyectos.map((proyecto, index) => (
      <motion.div
        key={index}
        className="project-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={proyecto.img} alt={proyecto.title} />

        <div className="project-info">
          <h3>{proyecto.title}</h3>

          {/* UBICACIÓN + ICONO */}
          <div className="location-row">
            <span className="location-icon">📍</span>
            <span>{proyecto.location}</span>
          </div>

          {/* BOTÓN DETALLES */}
          <Link to={`/proyecto/${index}`} className="btn-detalles">
            Detalles
          </Link>

        </div>
      </motion.div>
    ))}
  </div>

  <div className="btn-container">
    <Link to="/proyectos" className="btn-ver-mas">
      Explorar
    </Link>
  </div>

</section>



      {/* ================= CIUDADES ================= */}
      <section>
        <Ciudades />
      </section>

      {/* ================= CONFÍANZA ================= */}
      <Confianza />

{/* ================= BLOG NEXT-GEN ================= */}
<section class="blog-modern">

 <div class="blog-modern-header">
 <span class="blog-badge">BLOG</span>

  <div class="blog-header-texts">
    <h2>Últimas Noticias y Consejos Inmobiliarios</h2>
    <Link to="/blog" class="blog-explore">Explorar →</Link>
  </div>
</div>


  <div class="blog-cards">

{/* CARD 1 */}
<article class="blog-card-item">
  <div class="blog-card-img">
    <img src="https://www.aguirrebaeza.com/wp-content/uploads/2015/12/5179550_m.jpg" />
  </div>

  <div class="blog-card-body">
    <span class="blog-date">15 Noviembre 2025</span>

    <h3>¿Cómo asegurar una inversión inteligente mediante el análisis del terreno?</h3>

    <p>
      El análisis de terrenos es el proceso de evaluación integral de una propiedad antes de su adquisición, considerando aspectos físicos, legales y de viabilidad técnica.
    </p>

    <Link
      to="/blog?categoria=analisis-terrenos&id=1"
      className="blog-read-more"
    >
      Leer más
    </Link>
  </div>
</article>


    {/* CARD 2 */}
<article class="blog-card-item">
  <div class="blog-card-img">
    <img src="https://presidencia.gob.do/sites/default/files/styles/large/public/news/2025-09/PHOTO-2025-09-11-20-05-30%20%281%29.jpg?itok=nAkYnjr0" />
  </div>

  <div class="blog-card-body">
    <span class="blog-date">12 Noviembre 2025</span>

    <h3>Normativas clave que rigen el desarrollo inmobiliario en República Dominicana</h3>

    <p>
      En República Dominicana, desarrollar terrenos no es solo planificar calles, levantar infraestructura y vender lotes.
    </p>

    <Link
      to="/blog?categoria=leyes-regulaciones&id=2"
      className="blog-read-more"
    >
      Leer más
    </Link>
  </div>
</article>

{/* CARD 3 */}
<article class="blog-card-item">
  <div class="blog-card-img">
    <img src="https://media.licdn.com/dms/image/v2/D4D12AQHxvhpu2kGoCA/article-cover_image-shrink_720_1280/B4DZkWbKByHYAM-/0/1757017846744?e=2147483647&v=beta&t=15UnuwXVIxvSCdaH0P_WmujlbnAKOPSlAHPaUTI7HGQ" />
  </div>

  <div class="blog-card-body">
    <span class="blog-date">10 Noviembre 2025</span>

    <h3>¿Cómo la visión estratégica impulsa la comercialización efectiva de lotes?</h3>

    <p>
      Cuando hablamos de comercialización de lotes, no se trata solo de vender terrenos; se trata de aplicar estrategias inteligentes que permitan mover inventario rápido y posicionar el proyecto.
    </p>

    <Link
      to="/blog?categoria=comercializacion-lotes&id=3"
      className="blog-read-more"
    >
      Leer más
    </Link>
  </div>
</article>

  </div>
</section>






      {/* ================= MÉTRICAS ================= */}
      <section className="metrics-section">
        <h2 className="metrics-title">
          Nuestro <span>Impacto</span> en el Sector Inmobiliario
        </h2>

        <div className="metrics-grid">
          <motion.div className="metric-card" whileHover={{ scale: 1.05 }}>
            <h3>+3K</h3>
            <p>Clientes Satisfechos</p>
          </motion.div>

          <motion.div className="metric-card" whileHover={{ scale: 1.05 }}>
            <h3>+15</h3>
            <p>Proyectos Completados</p>
          </motion.div>

          <motion.div className="metric-card" whileHover={{ scale: 1.05 }}>
            <h3>+5</h3>
            <p>Años de Experiencia</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
