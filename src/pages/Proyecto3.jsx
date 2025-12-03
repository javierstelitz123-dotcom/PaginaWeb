import React, { useState } from "react";
import "./Proyecto3.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto3 = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

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

      {/* ===== HEADER COMO PROYECTO 1/2 ===== */}
      <div className="nuevo-header-proyecto">
        <div className="overlay-header"></div>

        <h1 className="header-titulo">Residencial Don Soto</h1>
        <p className="header-ubicacion">Bonao</p>

        <button
          className="header-btn"
          onClick={() => navigate("/contacto")}
        >
          Estoy interesado
        </button>
      </div>

      {/* ===== INFO ===== */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Descripción</h2>
          <p>
            El Residencial Palma Real es un proyecto moderno que combina elegancia,
            comodidad y accesibilidad en una de las zonas de mayor crecimiento de La Vega.
            Diseñado para quienes buscan una vivienda funcional en un ambiente seguro
            y familiar.
          </p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li><Home className="icono" /> Apartamentos cómodos y modernos</li>
            <li><Ruler className="icono" /> Distribuciones eficientes</li>
            <li><Building2 className="icono" /> Proyecto cerrado</li>
            <li><MapPin className="icono" /> Ubicado en La Vega</li>
          </ul>
        </div>
      </div>

      {/* === CARRUSEL IGUAL PROYECTO 1 === */}
      <div className="galeria-container">
        <button className="flecha izquierda" onClick={() => moverImagen(-1)}>‹</button>

        <div className="imagen-principal">
          <img
            src={imagenes[imagenActual]}
            alt="Imagen del proyecto"
            className="proyecto-banner-img"
          />
        </div>

        <button className="flecha derecha" onClick={() => moverImagen(1)}>›</button>
      </div>

      {/* MOSAICO IGUAL PROYECTO 1 */}
      <div className="mosaico-galeria">
        {imagenes.map((img, index) => (
          <img key={index} src={img} alt={`foto-${index}`} />
        ))}
      </div>

      {/* ===== COMPARTIR ===== */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>

        <div className="blog1-social-icons">
          <a href="#" className="facebook"><FaFacebookF /></a>
          <a href="#" className="instagram"><FaInstagram /></a>
          <a href="#" className="whatsapp"><FaWhatsapp /></a>
          <a href="#" className="youtube"><FaYoutube /></a>
        </div>

        <div className="blog1-copy-link-wrapper">
          <input type="text" value={currentUrl} readOnly className="blog1-copy-input" />
          <button className="blog1-copy-button" onClick={handleCopy}>
            {copied ? "¡Copiado!" : "Copiar"}
          </button>
        </div>

        <button className="proyecto-volver" onClick={handleVolver}>
          <FaArrowLeft /> Volver
        </button>
      </div>

    </section>
  );
};

export default Proyecto3;
