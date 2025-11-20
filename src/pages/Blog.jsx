import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Encabezado con fondo */}
      <div className="blog-banner">
        <h1 className="blog-banner-title">Nuestro Blog</h1>
      </div>

      {/* ENCABEZADO ESTILO FOTO */}
      <div className="blog-header-custom">
        {/* Redes sociales */}
        <div className="blog-social-icons">
          <a
            href="https://www.instagram.com/grupodimher?igsh=MXJrcmt5OXNwamc5Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1AduQcnyL6/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=18098327894&text&type=phone_number&app_absent=0&wame_ctl=1"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.youtube.com/results?search_query=grupo+dimher"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Título centrado */}
        <h1 className="blog-main-title">
          <span style={{ color: "#1d3557" }}>GRUPO</span>{" "}
          <span style={{ color: "#f15a24" }}>DIMHER</span>
        </h1>
      </div>

      {/* CONTENEDOR CON FONDO BLANCO E IMAGEN CENTRADA */}
      <div className="blog-top-wrapper">
        <div className="blog-top-image">
          <img
            src="https://sunhatvillaswebstorage.blob.core.windows.net/photocache/4825/2880/1.jpg"
            alt="Top"
          />
        </div>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="blog-container">
         <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "30px", color: "#000", textAlign: "center" }}>
    Nuestro Blog
  </h2>

        {/* TARJETA 1 */}
        <div className="blog-card">
          <img
            src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5f2adbcc81715429162.png"
            alt="Superando desafíos comunes"
          />
          <div className="date-box">
            <span className="day">11</span>
            <span className="month">may</span>
          </div>
          <div className="blog-content">
            <h3>Superando desafíos comunes</h3>
            <p>
              Invertir en bienes raíces puede ser un desafío, pero con
              planificación, dedicación y las mejores decisiones…
            </p>
            <Link to="/blog1">Leer más</Link>
            <div className="blog-card-footer-line"></div>
            <div className="blog-card-footer-stats">
              <span className="views">1665 visualizaciones</span>
              <span className="likes">30 <i className="fa-solid fa-heart"></i></span>
            </div>
          </div>
        </div>

        {/* TARJETA 2 */}
        <div className="blog-card">
          <img
            src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5f14136bc1715429140.png"
            alt="Historias de inversores"
          />
          <div className="date-box">
            <span className="day">11</span>
            <span className="month">may</span>
          </div>
          <div className="blog-content">
            <h3>Historias de inversores</h3>
            <p>
              En el mundo de las inversiones, cada historia de éxito es única,
              dedicada y valiosa para los demás…
            </p>
            <a href="#">Leer más</a>
            <div className="blog-card-footer-line"></div>
            <div className="blog-card-footer-stats">
              <span className="views">1785 visualizaciones</span>
              <span className="likes">890 <i className="fa-solid fa-heart"></i></span>
            </div>
          </div>
        </div>

        {/* TARJETA 3 */}
        <div className="blog-card">
          <img
            src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5ef969b2b1715429113.png"
            alt="Guía definitiva de inversión"
          />
          <div className="date-box">
            <span className="day">11</span>
            <span className="month">may</span>
          </div>
          <div className="blog-content">
            <h3>Guía definitiva de inversión</h3>
            <p>
              Descubre la Guía Definitiva de Inversión en Bienes Raíces, con
              todas las herramientas necesarias para dar los mejores pasos…
            </p>
            <a href="#">Leer más</a>
            <div className="blog-card-footer-line"></div>
            <div className="blog-card-footer-stats">
              <span className="views">2435 visualizaciones</span>
              <span className="likes">240 <i className="fa-solid fa-heart"></i></span>
            </div>
          </div>
        </div>

        {/* TARJETA 4 */}
        <div className="blog-card">
          <img
            src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5edd8229f1715429085.png"
            alt="Cómo construir tu portafolio"
          />
          <div className="date-box">
            <span className="day">11</span>
            <span className="month">may</span>
          </div>
          <div className="blog-content">
            <h3>Cómo construir tu portafolio</h3>
            <p>
              Aprende los principios básicos para crear un portafolio de
              inversiones sólido y rentable…
            </p>
            <a href="#">Leer más</a>
            <div className="blog-card-footer-line"></div>
            <div className="blog-card-footer-stats">
              <span className="views">865 visualizaciones</span>
              <span className="likes">40 <i className="fa-solid fa-heart"></i></span>
            </div>
          </div>
        </div>

        {/* TARJETA 5 */}
        <div className="blog-card">
          <img
            src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5eb92cc0a1715429049.png"
            alt="¿Qué es inversión llave en mano?"
          />
          <div className="date-box">
            <span className="day">11</span>
            <span className="month">may</span>
          </div>
          <div className="blog-content">
            <h3>¿Qué es inversión llave en mano?</h3>
            <p>
              Inversiones llave en mano: una opción práctica para obtener
              resultados rápidos y seguros…
            </p>
            <a href="#">Leer más</a>
            <div className="blog-card-footer-line"></div>
            <div className="blog-card-footer-stats">
              <span className="views">897 visualizaciones</span>
              <span className="likes">80 <i className="fa-solid fa-heart"></i></span>
            </div>
          </div>
        </div>

        {/* TARJETA 6 */}
        <div className="blog-card">
          <img
            src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5e99687181715429017.png"
            alt="Consejos para invertir en bienes raíces"
          />
          <div className="date-box">
            <span className="day">24</span>
            <span className="month">mar</span>
          </div>
          <div className="blog-content">
            <h3>Consejos para invertir en bienes raíces</h3>
            <p>
              Mejora tu inversión inmobiliaria con estos consejos prácticos de
              expertos del sector…
            </p>
            <a href="#">Leer más</a>
            <div className="blog-card-footer-line"></div>
            <div className="blog-card-footer-stats">
              <span className="views">1607 visualizaciones</span>
              <span className="likes">57 <i className="fa-solid fa-heart"></i></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
