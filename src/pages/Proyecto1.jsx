import React, { useState } from "react";
import "./Proyecto1.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto1 = () => {
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

  return (
    <section className="proyecto-detalle">
      {/* Botón Volver */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft />
        Volver
      </button>

      {/* Imagen principal con badge y título */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de propiedad</div>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Villas el Americano"
          className="proyecto-banner-img"
        />
        <div className="proyecto-banner-texto">
          <h1>Villas el Americano</h1>
          <p>Bonao</p>
        </div>
      </div>

      {/* Información del proyecto */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Detalles del Proyecto</h2>
          <p>Nuevo Proyecto ecoturístico ¡Villas el Americano!.</p>
          <p>Ideal tanto para vivir como a modo de inversión ¡Tú eliges!</p>
          <p>
            <MapPin className="icono" /> Ubicado en la calle Los Pedregones, por los Tanques, detrás del Samán.
          </p>
          <p>¡Fincas desde 1,527.49 metros en adelante!</p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li>
              <Home className="icono" /> Apartamentos modernos con acabados de primera
            </li>
            <li>
              <Ruler className="icono" /> Distribuciones cómodas y funcionales
            </li>
            <li>
              <Building2 className="icono" /> Parqueo privado y áreas sociales
            </li>
            <li>
              <MapPin className="icono" /> Ubicado estratégicamente en Bonao
            </li>
          </ul>
        </div>
      </div>

      {/* Compartir ahora */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>
        <div className="blog1-social-icons">
          <a href="#" className="facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="instagram">
            <FaInstagram />
          </a>
          <a href="#" className="whatsapp">
            <FaWhatsapp />
          </a>
          <a href="#" className="youtube">
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

export default Proyecto1;
