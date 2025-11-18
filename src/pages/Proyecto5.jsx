import React, { useState } from "react";
import "./Proyecto5.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto5 = () => {
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

  const imagenPrincipal =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4fPotyHtJFVHh20SUub_rIghwmwwL5q7yzgBxQ-IkGnddC9B";

  return (
    <section className="proyecto-detalle">
      {/* Botón Volver */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft />
        Volver
      </button>

      {/* Banner */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de propiedad</div>

        <img
          src={imagenPrincipal}
          alt="Residencial Dimher"
          className="proyecto-banner-img"
        />

        <div className="proyecto-banner-texto">
          <h1>Residencial Dimher</h1>
          <p>Bonao</p>
        </div>
      </div>

      {/* Información */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Descripción del Proyecto</h2>
          <p>
            Residencial Dimher es un proyecto ubicado en Bonao, diseñado para
            brindar comodidad, elegancia y funcionalidad a sus residentes.
          </p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li>
              <Home className="icono" /> Acabados modernos
            </li>
            <li>
              <Ruler className="icono" /> Excelente distribución
            </li>
            <li>
              <Building2 className="icono" /> Diseño funcional
            </li>
            <li>
              <MapPin className="icono" /> Ubicado en Bonao
            </li>
          </ul>
        </div>
      </div>

      {/* Compartir */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>

        <div className="blog1-social-icons">
          <a
            href="https://www.facebook.com/share/1AduQcnyL6/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/grupodimher?igsh=MXJrcmt5OXNwamc5Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
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
            href="https://www.youtube.com/results?search=query=grupo+dimher"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copiar Link */}
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

export default Proyecto5;
