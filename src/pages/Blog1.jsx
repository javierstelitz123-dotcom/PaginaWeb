import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa";
import "./Blog1.css";

const Blog1 = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="blog1-page">
      <div className="blog1-background">
        {/* Botón Volver */}
        <div className="blog1-back-wrapper">
          <button className="blog1-back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft style={{ marginRight: "8px" }} />
            Volver
          </button>
        </div>

        {/* Contenedor principal */}
        <div className="blog1-container">
          {/* Imagen con fecha */}
          <div className="blog1-image-wrapper">
            <div className="blog1-date"></div>
            <img
              src="http://grupodimher.com/assets/images/frontend/blog//thumb_663f5f2adbcc81715429162.png"
              alt="Superando desafíos comunes"
              className="blog1-image"
            />
          </div>

          {/* Título y descripción */}
          <div className="blog1-text">
            <h1 className="blog1-title-left"> desafíos comunes</h1>
            <p>
              Invertir en bienes raíces puede ser un emprendimiento lucrativo, pero
              no está exento de desafíos. Desde fluctuaciones del mercado hasta
              obstáculos regulatorios, navegar por el mundo de las inversiones
              inmobiliarias requiere habilidad, conocimiento y perseverancia. En
              este blog, exploraremos algunos de los obstáculos comunes que
              enfrentan los inversores y discutiremos estrategias para superarlos.
            </p>
          </div>

          {/* Contenido del blog */}
          <div className="blog1-content">
            {/* ... contenido del blog ... */}
          </div>
        </div>

        {/* Sección Compartir ahora */}
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
              href="https://www.youtube.com/results?search_query=grupo+dimher"
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
      </div>
    </div>
  );
};

export default Blog1;
