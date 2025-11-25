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

  // Imagen principal (igual que Proyecto 4)
  const imagenPrincipal =
    "https://grupodimher.com/assets/images/property/thumb/682ebf83c161b1747894147.jpg";

  // Carrusel imágenes Proyecto 3
  const imagenes = [
    "https://grupodimher.com/assets/images/property/gallery/682eba08908541747892744.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682eba08ccf161747892744.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682eba090f0461747892745.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682eba09445dd1747892745.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682eba098d7c61747892745.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682eba09ceda01747892745.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682eba0a24b4e1747892746.jpg",
  ];

  const [imagenActual, setImagenActual] = useState(0);

  const moverImagen = (direccion) => {
    setImagenActual((prev) => {
      const nueva = prev + direccion;
      if (nueva < 0) return imagenes.length - 1;
      if (nueva >= imagenes.length) return 0;
      return nueva;
    });
  };

  // Botón copiar link
  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVolver = () => {
    navigate(-1);
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

        <div className="galeria-container">
          {/* Flecha izquierda */}
          <button
            className="flecha izquierda"
            onClick={() => moverImagen(-1)}
          >
            <FaChevronLeft />
          </button>

          {/* Imagen principal */}
          <div className="imagen-principal">
            <img
              src={imagenes[imagenActual] || imagenPrincipal}
              alt="Proyecto 3"
              className="proyecto-banner-img"
            />
          </div>

          {/* Flecha derecha */}
          <button
            className="flecha derecha"
            onClick={() => moverImagen(1)}
          >
            <FaChevronRight />
          </button>

          {/* Miniaturas eliminadas */}
        </div>

        {/* TÍTULO SOLO EN LA PRIMERA IMAGEN */}
        {imagenActual === 0 && (
          <div className="proyecto-banner-texto">
            <h1>Residencial Don Soto</h1>
            <p>Bonao</p>
          </div>
        )}
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
