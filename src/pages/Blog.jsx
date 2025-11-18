import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";


const Blog = () => {
  return (
    <div className="blog-page">
      {/* Encabezado con fondo */}
   <div className="blog-banner">
  <h1 className="blog-banner-title">Blog</h1>
</div>



      {/* Contenedor de tarjetas */}
      <div className="blog-container">
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
          </div>
        </div>

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
          </div>
        </div>

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
          </div>
        </div>

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
          </div>
        </div>

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
          </div>
        </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
