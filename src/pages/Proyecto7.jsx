import React, { useState } from "react";
import "./Proyecto7.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto7 = () => {
  const [copied, setCopied] = useState(false);
  const [indice, setIndice] = useState(0);
  const currentUrl = window.location.href;
  const navigate = useNavigate();

  // Imágenes del proyecto 7
  const imagenes = [
    "https://grupodimher.com/assets/images/property/gallery/682ead76e18401747889526.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead77208321747889527.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead775c1a51747889527.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead779a55b1747889527.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead77d54a31747889527.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead781d5c01747889528.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead785a9e31747889528.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead789b2631747889528.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead78db4c11747889528.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead7910f461747889529.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead7934db81747889529.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead79728331747889529.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ead79ad5b31747889529.jpg",
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVolver = () => {
    navigate(-1);
  };

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
        <FaArrowLeft /> Volver
      </button>

      {/* Banner con slider */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de propiedad</div>

        <div className="galeria-container">
          <button className="flecha izquierda" onClick={anterior}>‹</button>
          <div className="imagen-principal">
            <img
              src={imagenes[indice]}
              alt="Residencial Los Álamos"
              className="proyecto-banner-img"
            />
          </div>
          <button className="flecha derecha" onClick={siguiente}>›</button>

          {/* Miniaturas eliminadas */}
        </div>

        {/* Título */}
        {indice === 0 && (
          <div className="proyecto-banner-texto">
            <h1>Residencial Los Alamos</h1>
            <p>Bonao</p>
          </div>
        )}
      </div>

      {/* Información */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Detalles del Proyecto</h2>
          <p>
            Residencial Los Álamos es un proyecto diseñado para brindar
            comodidad, seguridad y una vida moderna en una ubicación estratégica
            de Bonao. Con espacios bien distribuidos y un entorno agradable, es
            ideal para familias que buscan tranquilidad y estilo.
          </p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li><Home className="icono" /> Viviendas modernas con excelentes acabados</li>
            <li><Ruler className="icono" /> Distribuciones funcionales y espaciosas</li>
            <li><Building2 className="icono" /> Parqueos y áreas comunes disponibles</li>
            <li><MapPin className="icono" /> Ubicado estratégicamente en Bonao</li>
          </ul>
        </div>
      </div>

      {/* Compartir */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>
        <div className="blog1-social-icons">
          <a href="https://www.facebook.com/share/1AduQcnyL6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/grupodimher?igsh=MXJrcmt5OXNwamc5Mg==" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
          <a href="https://api.whatsapp.com/send/?phone=18098327894&text&type=phone_number&app_absent=0&wame_ctl=1" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
          <a href="https://www.youtube.com/results?search_query=grupo+dimher" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
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

export default Proyecto7;
