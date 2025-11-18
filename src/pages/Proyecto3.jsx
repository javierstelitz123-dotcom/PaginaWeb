import React, { useState } from "react";
import "./Proyecto3.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto3 = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const currentUrl = window.location.href;

  // 🔥 Tus imágenes originales del proyecto 3
  const imagenes = [
    "https://grupodimher.com/assets/images/property/thumb/682eba0839c291747892744.jpg",
    "https://grupodimher.com/assets/images/property/thumb/682ebf83c161b1747894147.jpg",
    "https://images.unsplash.com/photo-1586105251261-72a756497a11",
    "https://images.unsplash.com/photo-1583855282680-6dbdc69b0931",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    "https://images.unsplash.com/photo-1595846723761-e...jpg",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  ];

  const [indice, setIndice] = useState(0);

  // Botón para copiar enlace
  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVolver = () => {
    navigate(-1);
  };

  // Slider
  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <section className="proyecto-detalle">
      {/* Volver */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft />
        Volver
      </button>

      {/* Banner con Slider */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de propiedad</div>

        <img
          src={imagenes[indice]}
          alt="Proyecto 3"
          className="proyecto-banner-img"
        />

        {/* TÍTULO SOLO EN LA IMAGEN PRINCIPAL */}
        {indice === 0 && (
          <div className="proyecto-banner-texto">
            <h1>Residencial Palma Real</h1>
            <p>La Vega</p>
          </div>
        )}

        {/* Flechas */}
        <button className="proyecto-arrow left" onClick={anterior}>
          <FaChevronLeft />
        </button>

        <button className="proyecto-arrow right" onClick={siguiente}>
          <FaChevronRight />
        </button>
      </div>

      {/* Información */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Descripción</h2>
          <p>
            El Residencial Palma Real es un proyecto moderno que combina
            elegancia, comodidad y accesibilidad en una de las zonas de mayor
            crecimiento de La Vega. Diseñado para quienes buscan una vivienda
            funcional en un ambiente seguro y familiar.
          </p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li>
              <Home className="icono" /> Apartamentos cómodos y modernos
            </li>
            <li>
              <Ruler className="icono" /> Distribuciones eficientes
            </li>
            <li>
              <Building2 className="icono" /> Proyecto cerrado
            </li>
            <li>
              <MapPin className="icono" /> Ubicado en La Vega
            </li>
          </ul>
        </div>
      </div>

      {/* Compartir */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>

        <div className="blog1-social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=18098327894"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copiar link */}
        <div className="blog1-copy-link-wrapper">
          <input
            type="text"
            value={currentUrl}
            readOnly
            className="blog1-copy-input"
          />
          <button className="blog1-copy-button" onClick={handleCopy}>
            {copied ? "¡Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proyecto3;
