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
              Innovamos el mundo inmobiliario con proyectos que combinan{" "}
              <strong>seguridad, rentabilidad y excelencia</strong>. Transforma
              tus sueños en realidades tangibles con nosotros.
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

{/* ================= BLOG ================= */}
<section className="blog-section">
  <div className="blog-header">
    <span className="blog-subtitle">Blog</span>
    <h2 className="blog-title">Últimas Noticias y Consejos Inmobiliarios</h2>
<Link to="/blog" className="blog-explore">
  Explorar →
</Link>
  </div>

  <div className="blog-grid">
    {/* Primera card */}
    <div className="blog-card">
      <div className="blog-img">
        <img
          src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5f2adbcc81715429162.png"
          alt="Superando desafíos comunes"
        />
        <div className="blog-date">
          <span className="day">11</span>
          <span className="month">may</span>
        </div>
      </div>
      <div className="blog-content">
        <h3>Superando desafíos comunes</h3>
        <p>
          Invertir en bienes raíces puede ser un desafío, pero con planificación, dedicación y las mejores decisiones…
        </p>
        <Link to="/blog1" className="blog-read">Leer más</Link>
      </div>
    </div>

    {/* Segunda card */}
    <div className="blog-card">
      <div className="blog-img">
        <img
          src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5eb92cc0a1715429049.png"
          alt="¿Qué es inversión llave en mano?"
        />
        <div className="blog-date">
          <span className="day">11</span>
          <span className="month">may</span>
        </div>
      </div>
      <div className="blog-content">
        <h3>¿Qué es inversión llave en mano?</h3>
        <p>
          Inversiones llave en mano: una opción práctica para obtener resultados rápidos y seguros…
        </p>
        <Link to="/blog2" className="blog-read">Leer más</Link>
      </div>
    </div>

    {/* Tercera card */}
    <div className="blog-card">
      <div className="blog-img">
        <img
          src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5e99687181715429017.png"
          alt="Consejos para invertir en bienes raíces"
        />
        <div className="blog-date">
          <span className="day">24</span>
          <span className="month">mar</span>
        </div>
      </div>
      <div className="blog-content">
        <h3>Consejos para invertir en bienes raíces</h3>
        <p>
          Mejora tu inversión inmobiliaria con estos consejos prácticos de expertos del sector…
        </p>
        <Link to="/blog3" className="blog-read">Leer más</Link>
      </div>
    </div>
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
