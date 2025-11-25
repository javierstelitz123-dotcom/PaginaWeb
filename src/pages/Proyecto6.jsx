import React, { useState } from "react";
import "./Proyecto6.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto6 = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const currentUrl = window.location.href;

  // Imagen principal y carrusel
  const imagenes = [
    "https://grupodimher.com/assets/images/property/gallery/682eb643ae3e61747891779.jpeg",
    "https://grupodimher.com/assets/images/property/gallery/682eb643376161747891779.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682eb6436294a1747891779.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682eb6438841c1747891779.jpeg",
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
      {/* Botón Volver */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft /> Volver
      </button>

      {/* Banner con slider */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de Propiedad</div>

        {/* GALERÍA */}
        <div className="galeria-container">
          <button
            className="flecha izquierda"
            onClick={() => moverImagen(-1)}
          >
            ‹
          </button>

          <div className="imagen-principal">
            <img
              src={imagenes[imagenActual]}
              alt={`Proyecto 6 - Imagen ${imagenActual + 1}`}
            />
          </div>

          <button
            className="flecha derecha"
            onClick={() => moverImagen(1)}
          >
            ›
          </button>

          {/* Miniaturas eliminadas */}
        </div>

        {/* Titulo solo en la primera imagen */}
        {imagenActual === 0 && (
          <div className="proyecto-banner-texto">
            <h1>Residencial Don Bumba</h1>
            <p>Bonao</p>
          </div>
        )}
      </div>

      {/* Información */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Descripción</h2>
          <p>
            Residencial Don Bumba está ubicado en Bonao y ofrece espacios modernos,
            accesibles y creados para brindar comodidad a toda la familia.
          </p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li><Home className="icono" /> Apartamentos modernos</li>
            <li><Ruler className="icono" /> Distribuciones optimizadas</li>
            <li><Building2 className="icono" /> Proyecto cerrado y seguro</li>
            <li><MapPin className="icono" /> Ubicado en Bonao</li>
          </ul>
        </div>
      </div>

      {/* Compartir */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>
        <div className="blog1-social-icons">
          <a href="https://facebook.com" target="_blank" className="facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" className="instagram"><FaInstagram /></a>
          <a href="https://api.whatsapp.com/send/?phone=18098327894" target="_blank" className="whatsapp"><FaWhatsapp /></a>
          <a href="https://youtube.com" target="_blank" className="youtube"><FaYoutube /></a>
        </div>

        <div className="blog1-copy-link-wrapper">
          <input type="text" value={currentUrl} readOnly className="blog1-copy-input" />
          <button className="blog1-copy-button" onClick={handleCopy}>
            {copied ? "¡Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proyecto6;
