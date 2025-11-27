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
          src="https://osirismacias.com/wp-content/uploads/sites/45/2022/09/metas-financieras-600x475.jpg"
          alt="5 Estrategias para Alcanzar tus Metas Financieras en 2025"
        />
        <div className="blog-date">
          <span className="day">15</span>
          <span className="month">Nov</span>
        </div>
      </div>
      <div className="blog-content">
        <h3>5 Estrategias para Alcanzar tus Metas Financieras en 2025</h3>
        <p>
          Invertir en bienes raíces puede ser un desafío, pero con planificación, dedicación y las mejores decisiones…Descubre cómo planificar tus finanzas personales con métodos probados que te ayudarán a lograr la libertad financiera que siempre has deseado.
        </p>
       <Link to="/blog?categoria=finanzas&id=1" className="blog-read">Leer más</Link>

      </div>
    </div>

    {/* Segunda card */}
    <div className="blog-card">
      <div className="blog-img">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D12AQFOZ0PV5jGTog/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1656016261162?e=2147483647&v=beta&t=9mrP2iYOOLzVpCJ81i3DgRMGV3zOlIh2kOl7MS3eXFo"
          alt="¿Cómo Construir una Carrera Exitosa desde Cero?"
        />
        <div className="blog-date">
          <span className="day">12</span>
          <span className="month">Nov</span>
        </div>
      </div>
      <div className="blog-content">
        <h3>¿Cómo Construir una Carrera Exitosa desde Cero?</h3>
        <p>
          Los primeros pasos son fundamentales. Aprende a establecer bases sólidas para tu desarrollo profesional con consejos de expertos en recursos humanos.
        </p>
<Link to="/blog?categoria=carrera&id=2" className="blog-read">Leer más</Link>


      </div>
    </div>

    {/* Tercera card */}
    <div className="blog-card">
      <div className="blog-img">
        <img
          src="https://th.bing.com/th/id/R.adffbdcce3bbfcdd012beeb17004a50b?rik=RTiSeOkxzTRIgA&pid=ImgRaw&r=0"
          alt="El Poder del Liderazgo Transformacional en las Empresas"
        />
        <div className="blog-date">
          <span className="day">10</span>
          <span className="month">Nov</span>
        </div>
      </div>
      <div className="blog-content">
        <h3>El Poder del Liderazgo Transformacional en las Empresas</h3>
        <p>
 Un líder no solo dirige, transforma. Conoce las claves del liderazgo que está revolucionando el mundo corporativo y cómo puedes aplicarlo.
        </p>
       <Link to="/blog?categoria=liderazgo&id=3" className="blog-read">Leer más</Link>

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
