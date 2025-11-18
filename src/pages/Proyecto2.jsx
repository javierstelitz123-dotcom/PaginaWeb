import React, { useState } from "react";
import "./Proyecto2.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft, FaCopy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto2 = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVolver = () => {
    navigate(-1);
  };

  // Mantengo tu primera imagen como principal (igual que Proyecto 4)
  const imagenPrincipal = "https://grupodimher.com/assets/images/property/thumb/682ebf83c161b1747894147.jpg";

  return (
    <section className="proyecto-detalle">
      {/* Botón Volver arriba */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft />
        Volver
      </button>

      {/* Imagen principal estilo Proyecto 4 */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de propiedad</div>

        <img
          src={imagenPrincipal}
          alt="Residencial Doña Amalia 2"
          className="proyecto-banner-img"
        />

        <div className="proyecto-banner-texto">
          <h1>Residencial Doña Amalia 2</h1>
          <p>Bonao</p>
        </div>
      </div>

      {/* Información del proyecto */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Descripción de Propiedad</h2>
          <p>
            Este hermoso residencial combina la elegancia moderna con la
            tranquilidad de la zona. Sus espacios amplios y luminosos
            garantizan el confort de cada familia.
          </p>
          <p>
            Ubicado en <span className="ubicacion-inline">📍 Bonao</span>, cuenta
            con fácil acceso a las principales vías y zonas comerciales.
          </p>
          <p>
            Cada vivienda ha sido diseñada con materiales de alta calidad,
            brindando durabilidad y estilo contemporáneo en cada rincón.
          </p>
          <p>
            Ideal para quienes buscan un hogar con valor, diseño y ubicación
            privilegiada en una de las mejores áreas residenciales.
          </p>
        </div>

        {/* Características – mantuve ejemplo igual que Proyecto 4 */}
        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li>
              <Home className="icono" /> Residencial moderno
            </li>
            <li>
              <Ruler className="icono" /> Espacios amplios y cómodos
            </li>
            <li>
              <Building2 className="icono" /> Zona residencial tranquila
            </li>
            <li>
              <MapPin className="icono" /> Ubicado en Bonao
            </li>
          </ul>
        </div>
      </div>

      {/* Sección Compartir estilo Proyecto 4 */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>

        <div className="blog1-social-icons">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
          </a>

          <a
            href={`https://api.whatsapp.com/send/?text=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copiar link */}
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

export default Proyecto2;
