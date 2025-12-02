import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./FAQ.css";
import { Link } from "react-router-dom";

const preguntasFrecuentes = [
  {
    id: 1,
    pregunta: "¿Qué es inversión inmoviliaria?",
    respuesta:
      "Consiste en comprar, gestionar o vender propiedades para generar ingresos.",
  },
  {
    id: 2,
    pregunta: "¿Qué tipos de inversión existen?",
    respuesta: "Tipo: residencial, comercial, industrial y terrenos.",
  },
  {
    id: 3,
    pregunta: "¿Cómo empezar a invertir?",
    respuesta:
      "Edúcate, desarrolla una estrategia y construye una red profesional.",
  },
  {
    id: 4,
    pregunta: "¿Cúanto dinero necesito?",
    respuesta:
      "Varía según el tipo de propiedad y método de inversión.",
  },
  {
    id: 5,
    pregunta: "¿Dónde se ubican sus proyectos?",
    respuesta:
      "Nuestros desarrollos están estratégicamente situados en zonas de alta plusvalía de Monseñor Nouel y otras regiones en crecimiento del país.",
  },
];

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  // Abre al pasar el mouse y cierra al salir
  const handleMouseEnter = (id) => {
    setOpenFAQ(id);
  };

  const handleMouseLeave = () => {
    setOpenFAQ(null);
  };

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
  {/* Nuevo título principal con fondo "Grupo Dimher" */}
  <div className="faq-hero-titulo">
    <span className="grupo">Grupo</span>
    <span className="dimher">Dimher</span>
  </div>

  {/* Subtítulo debajo */}
  <div className="faq-hero-subtitulo">
    <h2>
      Todas tus consultas{" "}
      <FontAwesomeIcon icon={faQuestionCircle} className="faq-hero-icon" />
    </h2>
    <p><strong>Resuelve tus dudas sobre nuestros servicios y proyectos inmobiliarios.</strong></p>
  </div>
</section>


      {/* Lista de preguntas */}
      <section className="faq-list-section">
        <div className="faq-container">
          {preguntasFrecuentes.map((item) => (
            <div
              className={`faq-item ${openFAQ === item.id ? "active" : ""}`}
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="faq-pregunta">
                <span>{item.pregunta}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`faq-toggle-icon ${openFAQ === item.id ? "open" : ""}`}
                />
              </div>

              <div className={`faq-respuesta ${openFAQ === item.id ? "open" : ""}`}>
                <p>{item.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
            {/* Sección de contacto estilo imagen enviada */}
      <section className="faq-contact-section">
        <div className="faq-contact-overlay"></div>
        <div className="faq-contact-content">
          <h2>¿TIENES ALGUNA DUDA? NO DUDES EN CONTACTARNOS</h2>
<Link to="/contacto#contacto" className="faq-contact-btn">
  DÉJANOS UN MENSAJE
</Link>

        </div>
      </section>
    </div>
  );
}

export default FAQ;
